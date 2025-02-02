-- CreateTable
CREATE TABLE "MoodBoard" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MoodBoard_pkey" PRIMARY KEY ("id")
);
