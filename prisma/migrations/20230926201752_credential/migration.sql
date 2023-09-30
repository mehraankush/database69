-- CreateTable
CREATE TABLE "credential" (
    "id" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "channelid" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "credential_pkey" PRIMARY KEY ("id")
);
