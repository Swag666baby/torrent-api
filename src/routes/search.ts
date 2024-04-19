import { Router } from "express"
import { databaseSearch } from "../models/databaseSearch";
const route: Router = Router()

route.get("/search", async(request, response) => {
    const search: string  = (request.query.q as string) ?? "";

    response.send(databaseSearch(search));
})

export default route;