import express, { Request, Response } from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import debug from "debug";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { CardsRoutes } from "./cards/routes/cards.routes.config";
require("dotenv").config();

const PORT = 2000;
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

const loggerMiddleware: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerMiddleware.meta = false;
}

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerMiddleware));
routes.push(new CardsRoutes(app));

app.get("/hello", (req: Request, res: Response) => {
    res.status(200).send({
        hostname: req.hostname,
        path: req.path,
        method: req.method,
    });
});

const start = () => {
    try {
        server.listen(PORT, () => {
            routes.forEach((route: CommonRoutesConfig) => {
                debugLog(`Routes configured for ${route.getName()}`);
            });
            console.log("runningMessage");
        });
    } catch (error) {
        console.log(error);
    }
};

start();
