import express from "express";
import ArtWorkController from "./ArtWorkController.js";


export default class ArtWorkRouter {
    router;
    artWorkController;

    constructor() {
        this.router = express.Router();
        this.artWorkController = new ArtWorkController();
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get('/', this.artWorkController.getAll.bind(this.artWorkController));
        this.router.get('/filter/:id', this.artWorkController.getId.bind(this.artWorkController));
        this.router.get('/filter', this.artWorkController.TYAfilter.bind(this.artWorkController));
        this.router.post('/create', this.artWorkController.create.bind(this.artWorkController)); // Utilisez POST pour créer
        this.router.put('/update/:id', this.artWorkController.update.bind(this.artWorkController));
        this.router.delete('/delete/:id', this.artWorkController.delete.bind(this.artWorkController));
    }

    getRouter() {
        return this.router;
    }
}