import express from "express";
import cors from "cors";
import APIRoutes from "./src/Routes/index.js";
import bodyParser from "body-parser";
import { join,dirname } from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPath = join(__dirname, "build", "index.html");

//#region middlewares

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// Define API routes
app.use("/api", APIRoutes);

// Error handling middleware for other errors
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // Render the error page
    res.status(err.status || 500);
    res.json({
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });