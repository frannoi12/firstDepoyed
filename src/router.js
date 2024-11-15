
import ArtWorkRouter from "./ArtWorkRouter.js"


const artWorkRoot = new ArtWorkRouter();

export default (app) => {
    app.use('/test', (_, res) =>{
        res.send('test');
    });
    

    app.use('/artworks',artWorkRoot.getRouter());

}