import { readFileSync } from "fs";
import Game from "../interfaces/games";


export const databaseSearch = (search: string) => {
    const database: Array<Game> = JSON.parse(readFileSync("./database/games/allGames.json").toString());
    const gamesFound: Array<Game> = [];

    for(let game of database){
        if(!Number(search) && game.title?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()) || game.id.toString() == search) {
            gamesFound.push(game);
        }
    }

    if(gamesFound[0]){
        return { status: "Successfully", code: 200, results: gamesFound.length, games: gamesFound };
    }else{
        return { status: "Error", code: 404, message: "game not found!" };
    }
};
