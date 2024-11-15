-- CreateEnum
CREATE TYPE "TypeArt" AS ENUM ('PEINTURE', 'SCULPTURE', 'DESSIN', 'ACII_ART');

-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "type" "TypeArt" NOT NULL,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);
