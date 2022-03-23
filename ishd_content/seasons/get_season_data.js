console.log("Loaded Teams From ishd.com");

const request = require("request")

var url = "https://www.ishd.de/vereine.json?limit=500"

const fs = require("fs");
const { getSystemErrorMap } = require("util");

function saveFileFromLink(url, filepath) {
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(__dirname);
            fs.writeFileSync(__dirname + "/" + filepath, JSON.stringify(body, null, '\t'));
        }
    })
}


saveFileFromLink("https://www.ishd.de/saison/2022/ligen/2-jugendliga-west-a/tabelle.json", "jugend_tabelle.json");
saveFileFromLink("https://www.ishd.de/saison/2022/ligen/2-jugendliga-west-a/spielplan.json?search=Ahauser%20Maidy%20Dogs%20I&limit=200", "jugend_spiele.json");