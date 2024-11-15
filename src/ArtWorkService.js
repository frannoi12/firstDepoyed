import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default class ArtWorkService {

    async getAll() {
        try {
            return await prisma.artwork.findMany();
        } catch (error) {
            throw new Error(`Error retrieving artwork: ${error.message}`);
        }
    }
    
    async create(artwork_data) {
        try {
            return prisma.artwork.create({
                data: artwork_data,
            });
        } catch (error) {
            // console.error(`Error creating artwork: ${error.message}`);
            throw new Error(`Error creating artwork: ${error.message}`);
        }
    }

    async get(_id) {
        try {
            const artwork = await prisma.artwork.findUnique({
                where: { id: _id },
            });
            if (!artwork) {
                throw new Error("Artwork not found");
            }
            return artwork;
        } catch (error) {
            throw new Error(`Error retrieving artwork: ${error.message}`);
        }
    }

    async update(_id, artwork_data) {
        try {
            const updatedArtwork = await prisma.artwork.update({
                where: { id: _id },
                data: artwork_data,
            });
            return updatedArtwork;
        } catch (error) {
            throw new Error(`Error updating artwork: ${error.message}`);
        }
    }

    async delete(_id) {
        try {
            const deletArtWork = await prisma.artwork.delete({
                where: { id: _id },
            });
            return { success: true, message: 'ArtWork supprimé avec succès.' };
        } catch (error) {
            if (error.code === 'P2025') {
                console.log("ArtWork non trouvé, rien à supprimer.");
                return { success: false, message: `L'ArtWork avec l'ID ${id} n'existe pas dans la base de données.` };
            }
    
            // Autres erreurs génériques
            console.log("Une erreur inconnue est survenue lors de la suppression.");
            return { success: false, message: `Erreur lors de la suppression de l'artwork avec l'ID ${id}: ${error.message}` };
        }
    }


    async filter(filters) {
        try {
            console.log('Filtres pour Prisma:', filters); // Log des filtres pour Prisma

            // Assurez-vous que vous ne passez que des filtres valides à Prisma
            return await prisma.artwork.findMany({
                where: {
                    type: filters.type,
                    year: filters.year,
                    artist: filters.artist
                }
            });
        } catch (error) {
            throw new Error(`Error filtering artworks: ${error.message}`);
        }
    }
}

