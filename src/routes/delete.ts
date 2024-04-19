import { Router } from "express";
import { databaseSearch } from "../models/databaseSearch";
import { databaseDelete } from "../controllers/databaseDelete";

const route: Router = Router();

route.post("/delete", async(request, response) => {
    try{
        const game : object = databaseSearch(request.body.id);

        if(game){
            response.send(databaseDelete(request.body.id));
        }else{
            response.send({ status: "Error", code: 404, message: "id not found" });
        }
        
    }catch(error){
        response.send({ status: "Error", code: 500, message: "Internal server error" });
        console.log(error);
    }
})

export default route;