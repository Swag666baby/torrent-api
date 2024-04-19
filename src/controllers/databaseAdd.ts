import { readFileSync, writeFileSync } from "fs";
import Game from "../interfaces/games";

export const databaseAdd = (game: Game) => {
    try{
        const database: Array<Game> = JSON.parse(readFileSync("./database/games/allGames.json").toString());
        database.push(game);
        writeFileSync("./database/games/allGames.json", JSON.stringify(database, null, 2));

        return {status: "Successfully", code: 200, message: "Game added to database successfully!"};
    }catch(error){
        console.log(error);
        return {status: "Error", code: 500, message: "Internal server error"};
    }
}