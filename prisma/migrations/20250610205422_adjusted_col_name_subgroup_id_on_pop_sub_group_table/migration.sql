/*
  Warnings:

  - You are about to drop the `SubgroupPopulation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubgroupPopulation" DROP CONSTRAINT "SubgroupPopulation_pdfSourceId_fkey";

-- DropForeignKey
ALTER TABLE "SubgroupPopulation" DROP CONSTRAINT "SubgroupPopulation_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "SubgroupPopulation" DROP CONSTRAINT "SubgroupPopulation_subgroupId_fkey";

-- DropForeignKey
ALTER TABLE "SubgroupPopulation" DROP CONSTRAINT "SubgroupPopulation_yearId_fkey";

-- DropTable
DROP TABLE "SubgroupPopulation";

-- CreateTable
CREATE TABLE "SubGroupPopulation" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "yearId" INTEGER NOT NULL,
    "subGroupId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "pdfSourceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubGroupPopulation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubGroupPopulation_schoolId_yearId_subGroupId_key" ON "SubGroupPopulation"("schoolId", "yearId", "subGroupId");

-- AddForeignKey
ALTER TABLE "SubGroupPopulation" ADD CONSTRAINT "SubGroupPopulation_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroupPopulation" ADD CONSTRAINT "SubGroupPopulation_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroupPopulation" ADD CONSTRAINT "SubGroupPopulation_subGroupId_fkey" FOREIGN KEY ("subGroupId") REFERENCES "SubGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroupPopulation" ADD CONSTRAINT "SubGroupPopulation_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
