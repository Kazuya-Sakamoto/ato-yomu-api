-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "status" INTEGER NOT NULL DEFAULT 1,
    "url" VARCHAR(512) NOT NULL,
    "iconUrl" VARCHAR(512),
    "ogImageUrl" VARCHAR(512),
    "siteName" VARCHAR(512),
    "domainUrl" VARCHAR(512),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "deletedAt" TIMESTAMP(0),

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
