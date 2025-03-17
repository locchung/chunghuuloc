-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "category" VARCHAR(64) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
