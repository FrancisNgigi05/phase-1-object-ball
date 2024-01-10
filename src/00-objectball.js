function gameObject() {
    const teams = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 22,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 3,
                    "Blocks": 1,
                    "Slam Dunks": 1
                },
                "Reggie Evans": {
                    "Number": 30,
                    "Shoe": 14,
                    "Points": 12,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 12,
                    "Blocks": 12,
                    "Slam Dunks": 7
                },
                "Brook Lopez": {
                    "Number": 11,
                    "Shoe": 17,
                    "Points": 17,
                    "Rebounds": 19,
                    "Assists": 10,
                    "Steals": 3,
                    "Blocks": 1,
                    "Slam Dunks": 15,
                },
                "Mason Plumlee": {
                    "Number": 1,
                    "Shoe": 19,
                    "Points": 26,
                    "Rebounds": 12,
                    "Assists": 6,
                    "Steals": 3,
                    "Blocks": 8,
                    "Slam Dunks": 5,
                },
                "Jason Terry": {
                    "Number": 31,
                    "Shoe": 15,
                    "Points": 19,
                    "Rebounds": 2,
                    "Assists": 2,
                    "Steals": 4,
                    "Blocks": 11,
                    "Slam Dunks": 1,
                },
            }
        },
        away: {
            teamName: "Charolette Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    "Number": 4,
                    "Shoe": 18,
                    "Points": 10,
                    "Rebounds": 1,
                    "Assists": 1,
                    "Steals": 2,
                    "Blocks": 7,
                    "Slam Dunks": 2,
                },
                "Bismak Biyombo": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 12,
                    "Rebounds": 4,
                    "Assists": 7,
                    "Steals": 7,
                    "Blocks": 15,
                    "Slam Dunks": 10,
                },
                "DeSagna Diop": {
                    "Number": 2,
                    "Shoe": 14,
                    "Points": 24,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 4,
                    "Blocks": 5,
                    "Slam Dunks": 5,
                },
                "Ben Gordon": {
                    "Number": 8,
                    "Shoe": 15,
                    "Points": 33,
                    "Rebounds": 3,
                    "Assists": 2,
                    "Steals":1,
                    "Blocks": 1,
                    "Slam Dunks": 0,
                },
                "Brendan Haywood": {
                    "Number": 33,
                    "Shoe": 15,
                    "Points": 6,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 22,
                    "Blocks": 5,
                    "Slam Dunks": 12,
                },
            }
        }
    }
    return (teams);
}
// function that displays the points scored by a player
function namePointScored (playersName) {
    const gameData = gameObject();
    // checking home team
    for (const player in gameData.home.players) {
        if (player === playersName) {
            return (gameData.home.players[player].Points);
        }
    }
    debugger;
    // checking away team
    for (const player in gameData.away.players) {
        if (player === playersName) {
            return (gameData.away.players[player].Points);
        }
    }
    debugger;
    return (null);
}

console.log(namePointScored("Brendan Haywood"));
// function that displays the shoe name of a player
function shoeSize(playerName) {
    const gameData = gameObject();
    // checking home team
    for (const player in gameData.home.players) {
        if (player === playerName) {
            return (gameData.home.players[player].Shoe)
        }
    }
    debugger;
    // checking away team
    for (const player in gameData.away.players) {
        if (player === playerName) {
            return (gameData.away.players[player].Shoe);
        }
    }
    debugger;
    return (null);
}

console.log(shoeSize("Brendan Haywood"));
// funnction that displays the color of a team
function teamColors(name) {
    let gameData = gameObject();

    if (name === gameData.home.teamName) {
        return (gameData.home.colors);
    }
    debugger;
    if (name === gameData.away.teamName) {
        return (gameData.away.colors);
    }
    debugger;
    return (null);
}

console.log(teamColors("Charolette Hornets"));
// function that returns an array of jersey numbers if a team
function playerNumbers(nameOfTeam) {
    let gameData = gameObject();

    if (nameOfTeam === gameData.home.teamName) {
        // Getting the values
        const numbers = Object.values(gameData.home.players).map(function(player) {
            return (player.Number);
        });
        return (numbers);
    }
    else if (nameOfTeam === gameData.away.teamName) {
        const numbers = Object.values(gameData.away.players).map(function (player) {
            return (player.Number);
        })
        return (numbers);
    }
    else {
        return (null);
    }
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    const gameData = gameObject();
    // checking home team
    for (const player in gameData.home.players) {
        if (player === playerName) {
            return (gameData.home.players[player])
        }
    }
    debugger;
    // checking away team
    for (const player in gameData.away.players) {
        if (player === playerName) {
            return (gameData.away.players[player]);
        }
    }
    debugger;
    return (null);
}

console.log(playerStats("Ben Gordon"));

function bigShoeRebounds(playerName) {
}