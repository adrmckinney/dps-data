-- CreateTable
CREATE TABLE "GradePopulation" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "yearId" INTEGER NOT NULL,
    "gradeId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "pdfSourceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GradePopulation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubgroupPopulation" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "yearId" INTEGER NOT NULL,
    "subGroupId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "pdfSourceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubgroupPopulation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopulationSnapshot" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "yearId" INTEGER NOT NULL,
    "preKindergarten" INTEGER,
    "kindergarten" INTEGER,
    "firstGrade" INTEGER,
    "secondGrade" INTEGER,
    "thirdGrade" INTEGER,
    "fourthGrade" INTEGER,
    "fifthGrade" INTEGER,
    "sixthGrade" INTEGER,
    "seventhGrade" INTEGER,
    "eighthGrade" INTEGER,
    "ninthGrade" INTEGER,
    "tenthGrade" INTEGER,
    "eleventhGrade" INTEGER,
    "twelfthGrade" INTEGER,
    "ungraded" INTEGER,
    "studentTotal" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "pdfSourceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PopulationSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GradePopulation_schoolId_yearId_gradeId_key" ON "GradePopulation"("schoolId", "yearId", "gradeId");

-- CreateIndex
CREATE UNIQUE INDEX "SubgroupPopulation_schoolId_yearId_subgroupId_key" ON "SubgroupPopulation"("schoolId", "yearId", "subGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "PopulationSnapshot_schoolId_yearId_key" ON "PopulationSnapshot"("schoolId", "yearId");

-- AddForeignKey
ALTER TABLE "GradePopulation" ADD CONSTRAINT "GradePopulation_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradePopulation" ADD CONSTRAINT "GradePopulation_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradePopulation" ADD CONSTRAINT "GradePopulation_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradePopulation" ADD CONSTRAINT "GradePopulation_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_subgroupId_fkey" FOREIGN KEY ("subGroupId") REFERENCES "SubGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
