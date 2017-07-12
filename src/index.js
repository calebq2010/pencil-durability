var paper = "";

var write = function(string) {
    paper += string;

    return paper;
}

var pencil = function(string) {
    var durability = string.length;
    var characterArray = [];

    for (i = 0; i < string.length; i++) {
        var character = string[i];

        if (character === character.toUpperCase() && durability != 0) {
            characterArray.push(character);
            durability -= 2;
        }

        if (character === character.toLowerCase() && durability != 0) {
            characterArray.push(character);
            durability -= 1;
        }
    }

    return characterArray.join('');
}



module.exports = {
    write: write,
    pencil: pencil
};