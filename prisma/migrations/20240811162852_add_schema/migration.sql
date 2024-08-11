-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "timer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
