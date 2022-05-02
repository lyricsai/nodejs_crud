import express, { Request, Response } from "express";
const axios = require("axios");
require("dotenv").config();

const ICard = require("../models/card");
const BASE_URL = process.env.BASE_URL;

const all = (req: Request, res: Response, next: express.NextFunction) => {
    next();
};

const getCards = async (req: Request, res: Response) => {
    try {
        let result = await axios.get(BASE_URL + "/cards");
        res.send(result.data);
    } catch (error) {
        res.send(error);
    }
};

const getCard = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        let result = await axios.get(BASE_URL + "/cards/" + id).then(
            () => res.sendStatus(200).send(result.data),
            (e: any) => {
                res.status(404).send(`There is no card with id: ${id}`);
            }
        );
    } catch (error) {
        res.sendStatus(500);
    }
};

const createCard = async (req: Request, res: Response) => {
    try {
        let result = await axios.post(BASE_URL + "/cards", req.body).then(
            () => res.sendStatus(201),
            (e: any) => res.sendStatus(500)
        );
    } catch (error) {
        res.send(error);
    }
};

const putCard = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await axios.put(BASE_URL + "/cards/" + id, req.body).then(
            () => res.sendStatus(200),
            (e: any) => {
                res.status(404).send(`There is no card with id: ${id}`);
            }
        );
    } catch (error) {
        res.sendStatus(500);
    }
};

const patchCard = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await axios.patch(BASE_URL + "/cards/" + id, req.body).then(
            () => res.send(req.body).status(200),
            (e: any) => {
                res.status(404).send(`There is no card with id: ${id}`);
            }
        );
    } catch (error) {
        res.sendStatus(500);
    }
};

const deleteCards = (req: Request, res: Response) => {
    try {
    } catch (error) {
        res.send(error);
    }
};

const deleteCard = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        await axios.delete(BASE_URL + "/cards/" + id).then(
            () => res.sendStatus(200),
            (e: any) => res.sendStatus(500)
        );
    } catch (error) {}
};

const notFound = (req: Request, res: Response) => {
    try {
        res.send("404. Not Found");
    } catch (error) {}
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
