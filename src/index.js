var paper = "";

var write = function(string) {
    paper += string;

    return paper;
}

var pencil = function(durability) {
    return "text";
}



module.exports = {
    write: write,
    pencil: pencil
};