import { Router } from "express";
import { databaseSearch } from "../models/databaseSearch";
import { databaseAdd } from "../controllers/databaseAdd";
const route: Router = Router();

route.post("/add", async(request, response) => {
    try{
        const id: number = databaseSearch("").results + 1;
        const game: any = request.body;
        game.id = id;

        response.send(databaseAdd(game));
    }catch(error){
        response.send({ status: "Error", code: 500, message: "Internal server error" });
        console.log(error);
    }
})

export default route;