import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";

const {
    getCards,
    getCard,
    createCard,
    putCard,
    patchCard,
    deleteCard,
    deleteCards,
    all,
} = require("../controllers/cards");

export class CardsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "CardsRoutes");
    }
    configureRoutes() {
        this.app
            .route("/cards/")
            .get(getCards)
            .post(createCard)
            .delete(deleteCards);
        this.app
            .route("/cards/:id")
            .all(all)
            .get(getCard)
            .patch(patchCard)
            .put(putCard)
            .delete(deleteCard);

        return this.app;
    }
}
