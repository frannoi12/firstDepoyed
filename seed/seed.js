import fs from "fs/promises";
import { PrismaClient} from "@prisma/client";




const prismaClient =  new PrismaClient()



async function seedRun() {
    try {
        const file = await fs.open('./seed/db_data_seed.json');
        const db_content = await file.readFile({ encoding: "utf-8" });
        await file.close(); 

        const list = JSON.parse(db_content);


        await Promise.all(list.map(async (element) => {
            await prismaClient.artwork.create({
                data: element,
            });
        }));

        console.log("Données insérées avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'insertion des données :", error);
    } finally {
        await prismaClient.$disconnect();
    }
}

seedRun()


