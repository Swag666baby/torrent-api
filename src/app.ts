import * as express from "express";
import * as bodyParser from "body-parser";
import Main from "./routes/main";
import SearchRoute from "./routes/search";
import AddRoute from "./routes/add";
import RemoveRoute from "./routes/delete";

const app = express();
app.use(bodyParser.json());

app.use("/", 
    Main,
    SearchRoute,
    AddRoute,
    RemoveRoute
)

app.listen(4000, () => {
    console.log("app iniciado na porta 4000!")
})