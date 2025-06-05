/*
  Warnings:

  - Added the required column `founded` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Level" ADD COLUMN     "availableForDataTypes" "DataType"[];

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "founded" INTEGER NOT NULL;
