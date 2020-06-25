const $ = require("cheerio");
const axios = require("axios")


const dotenv = require("dotenv")
dotenv.config({
    path: ".example.env"
})


let history = [null, null];
exports.index = (req, ress) => {
    axios.get(`https://www.worldometers.info/coronavirus/country/${process.env.COUNTRY}`).then( async res => {
        const body = await res.data;
        const ok = $.load(body);
        const final_html = ok.html()
        const parsedHtml = $.load(res.data)
        // console.log(parsedHtml("script").get()[parsedHtml("script").get().length - 1])
        // console.log( $('div.col-md-12').eq(0).length)
        const _data = $("div.content-inner > div", final_html).eq(1).text().replace("Last updated", "Dernière mise a jour")
        console.log(_data)
        let data = [];
        for (let index = 0; index < $("div.maincounter-number > span", final_html).length; index++) {
            let element = {}
            element.count = parseInt($("div.maincounter-number > span", final_html).eq(index).text().trim().replace(',', ""));
            if (index === 0) {
                if (!history[0] && !history[1]) {
                    history[0] = history[1] = element.count;
                } else {
                    if (element.count !== history[1]) {
                        history[0] = history[1];
                        history[1] = element.count;
                    }
                }
            }
            element.label = !index ? "Total Corona cases": index === 1 ? "Total deceased" : "Total recovered"
            
            data.push(element)
        }
        data.push({label: _data})
        data.push(history)
        ress.json(data)
    })
}