const path = require("path");

function imgNameGen(imgName) {
    return new Date().getTime() + "_" + imgName;
}

function imgPathGen(directory, imgName) {
    return path.join(__dirname, directory + `${imgName}`);
}

module.exports = { imgNameGen, imgPathGen };
