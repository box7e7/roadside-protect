-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "post" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
