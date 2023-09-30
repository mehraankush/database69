/*
  Warnings:

  - You are about to drop the `credential` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "credential";

-- CreateTable
CREATE TABLE "Credential" (
    "id" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);
