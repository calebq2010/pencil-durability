var paper = "";

var write = function(string, durability) {
    paper += string;
    var point = pointDegradation(string, durability);

    if (string.length > durability && durability != 0) {
        var count = 0;
        paper = "";

        for (i = 0; i < string.length; i++) {

            if (count < durability) {
                paper += string[i];
                count++;
                console.log(count);
            } else if (count >= durability) {
                paper += " ";
                console.log(paper);
            }
        }
    }


    return {
        paper: paper,
        point: point
    };
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