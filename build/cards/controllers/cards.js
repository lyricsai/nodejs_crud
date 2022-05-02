"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
require("dotenv").config();
const ICard = require("../models/card");
const BASE_URL = process.env.BASE_URL;
const all = (req, res, next) => {
    next();
};
const getCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield axios.get(BASE_URL + "/cards");
        res.send(result.data);
    }
    catch (error) {
        res.send(error);
    }
});
const getCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        let result = yield axios.get(BASE_URL + "/cards/" + id).then(() => res.sendStatus(200).send(result.data), (e) => {
            res.status(404).send(`There is no card with id: ${id}`);
        });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield axios.post(BASE_URL + "/cards", req.body).then(() => res.sendStatus(201), (e) => res.sendStatus(500));
    }
    catch (error) {
        res.send(error);
    }
});
const putCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield axios.put(BASE_URL + "/cards/" + id, req.body).then(() => res.sendStatus(200), (e) => {
            res.status(404).send(`There is no card with id: ${id}`);
        });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
const patchCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield axios.patch(BASE_URL + "/cards/" + id, req.body).then(() => res.send(req.body).status(200), (e) => {
            res.status(404).send(`There is no card with id: ${id}`);
        });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
const deleteCards = (req, res) => {
    try {
    }
    catch (error) {
        res.send(error);
    }
};
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield axios.delete(BASE_URL + "/cards/" + id).then(() => res.sendStatus(200), (e) => res.sendStatus(500));
    }
    catch (error) { }
});
const notFound = (req, res) => {
    try {
        res.send("404. Not Found");
    }
    catch (error) { }
};
module.exports = {
    all,
    getCard,
    getCards,
    createCard,
    putCard,
    patchCard,
    deleteCard,
    deleteCards,
    notFound,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FyZHMvY29udHJvbGxlcnMvY2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBRXRDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUEwQixFQUFFLEVBQUU7SUFDcEUsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNuRCxJQUFJO1FBQ0EsSUFBSSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtBQUNMLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDakMsSUFBSTtRQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDeEQs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