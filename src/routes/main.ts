import { Router } from "express";
const route: Router = Router();

route.get("/", async(request, response) => {
    response.send({documentation: "https://github.com/Swag666baby/nuvem-azul-api"});
})

export default route;