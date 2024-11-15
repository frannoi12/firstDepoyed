-- CreateTable
CREATE TABLE "Artwork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "type" TEXT NOT NULL
);
