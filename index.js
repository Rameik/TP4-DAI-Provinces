import express from "express";
import cors from "cors";
import { router as ProvinceRouter } from "./src/controllers/province-controller.js"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/front", express.static("public"));

app.use("/api/province", ProvinceRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})