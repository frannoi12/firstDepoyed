
import express from "express";
import dotenv from "dotenv";
import registrateRouter from "./router.js";

dotenv.config();

const app = new express();
const PORT = process.env.PORT || 3000;


app.use(express.json());



registrateRouter(app);


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
});

export default app; 

