import  express, { urlencoded }  from "express";
import { engine } from "express-handlebars";
import _dirname from "./utils.js";
import * as path from "path"

const app = express ()
const PORT =8080

app.use(express.json())
app.use(urlencoded({extended: true}));


//estructura 
app.engine("handlebars",engine());
app.set("view engie","handlebars")
app.set("views",path.resolve(_dirname + "/views"))


app.get("/",(req,res)=>{
    res.render("home",{
    title:" Backend | Handlebars",
    });
});

app.listen(PORT, ()=>{
    console.log(`servidor por puerto ${PORT}`)
})