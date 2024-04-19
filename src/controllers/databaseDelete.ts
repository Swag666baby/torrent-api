import {readFileSync, writeFileSync} from "fs";
import Game from "../interfaces/games";

export const databaseDelete = (game_to_be_removed: number) => {
    try{
        const database: Array<Game> = JSON.parse(readFileSync("./database/games/allGames.json").toString());
	    const games: Array<Game> = database.filter(element => element.id !== game_to_be_removed);
	
        writeFileSync("./database/games/allGames.json", JSON.stringify([games], null, 2));
        return { status: "Successfully", code: 200, message: "game successfully deleted!" };
    }catch(error){
        console.log(error);
        return { status: "Error", code: 500, message: "Internal server error!" };
    }
	
}