var paper = "";

var write = function(string) {
    paper += string;
    pointDegradation(string);

    return paper;
}

var pointDegradation = function(string, durability) {
    var durability = durability;
    var characterArray = [];

    if (durability === 0) {
        var spaceArray = [];

        for (i = 0; i < string.length; i++) {
            spaceArray.push(" ");
        }

        return spaceArray.join('');
    }

    for (i = 0; i < string.length; i++) {
        var character = string[i];

        if (character === " ") {
            //durability -= 1;
            characterArray.push(character);
        }

        if (character === character.toUpperCase() && durability != 0 && character != " ") {
            characterArray.push(character);
            durability -= 2;
        }

        if (character === character.toLowerCase() && durability != 0 && character != " ") {
            characterArray.push(character);
            durability -= 1;
        }
    }

    return durability;
}



module.exports = {
    write: write,
    pointDegradation: pointDegradation
};