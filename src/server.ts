import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
console.log("Server Starting ...\n");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [`http://localhost:5000`, `http://localhost:3000`],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.listen(port);
console.log(`Server is running on port http://localhost:${port}/api-docs`);
