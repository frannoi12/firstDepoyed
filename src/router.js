
import ArtWorkRouter from "./ArtWorkRouter.js"


const artWorkRoot = new ArtWorkRouter();

export default (app) => {
    app.use('/', (_, res) =>{
        res.send('Welcome to my api');
    });
    app.use('/test', (_, res) =>{
        res.send('test');
    });
    

    app.use('/artworks',artWorkRoot.getRouter());

}