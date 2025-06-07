-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "startYear" TEXT NOT NULL,
    "endYear" TEXT NOT NULL,
    "schoolYear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alternativeName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "levelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "otherNames" TEXT[],
    "levelId" INTEGER NOT NULL,
    "founded" INTEGER NOT NULL,
    "closed" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "levelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGroupType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubGroupType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "secondaryKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSet" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGroupToDataSet" (
    "id" SERIAL NOT NULL,
    "subGroupId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubGroupToDataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LevelToDataSet" (
    "id" SERIAL NOT NULL,
    "levelId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LevelToDataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectToDataSet" (
    "id" SERIAL NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubjectToDataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GradeToDataSet" (
    "id" SERIAL NOT NULL,
    "gradeId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GradeToDataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineToDataSet" (
    "id" SERIAL NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DisciplineToDataSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSourceType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataSourceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSource" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "localPath" TEXT,
    "title" TEXT,
    "yearId" INTEGER,
    "published" TEXT,
    "notes" TEXT,
    "dataTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSourceToDataSet" (
    "id" SERIAL NOT NULL,
    "dataSourceId" INTEGER NOT NULL,
    "dataSetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataSourceToDataSet_pkey" PRIMARY KEY ("id")
);

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
    "subgroupId" INTEGER NOT NULL,
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
CREATE UNIQUE INDEX "Year_startYear_key" ON "Year"("startYear");

-- CreateIndex
CREATE UNIQUE INDEX "Year_endYear_key" ON "Year"("endYear");

-- CreateIndex
CREATE UNIQUE INDEX "Year_schoolYear_key" ON "Year"("schoolYear");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_name_key" ON "Grade"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_alternativeName_key" ON "Grade"("alternativeName");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_abbreviation_key" ON "Grade"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "Level_name_key" ON "Level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "School_name_key" ON "School"("name");

-- CreateIndex
CREATE UNIQUE INDEX "School_code_key" ON "School"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Discipline_name_key" ON "Discipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroupType_name_key" ON "SubGroupType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroup_name_key" ON "SubGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroup_abbreviation_key" ON "SubGroup"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroup_key_key" ON "SubGroup"("key");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroup_secondaryKey_key" ON "SubGroup"("secondaryKey");

-- CreateIndex
CREATE UNIQUE INDEX "DataSet_key_key" ON "DataSet"("key");

-- CreateIndex
CREATE UNIQUE INDEX "SubGroupToDataSet_subGroupId_dataSetId_key" ON "SubGroupToDataSet"("subGroupId", "dataSetId");

-- CreateIndex
CREATE UNIQUE INDEX "LevelToDataSet_levelId_dataSetId_key" ON "LevelToDataSet"("levelId", "dataSetId");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectToDataSet_subjectId_dataSetId_key" ON "SubjectToDataSet"("subjectId", "dataSetId");

-- CreateIndex
CREATE UNIQUE INDEX "GradeToDataSet_gradeId_dataSetId_key" ON "GradeToDataSet"("gradeId", "dataSetId");

-- CreateIndex
CREATE UNIQUE INDEX "DisciplineToDataSet_disciplineId_dataSetId_key" ON "DisciplineToDataSet"("disciplineId", "dataSetId");

-- CreateIndex
CREATE UNIQUE INDEX "DataSource_url_key" ON "DataSource"("url");

-- CreateIndex
CREATE UNIQUE INDEX "DataSourceToDataSet_dataSetId_dataSourceId_key" ON "DataSourceToDataSet"("dataSetId", "dataSourceId");

-- CreateIndex
CREATE UNIQUE INDEX "GradePopulation_schoolId_yearId_gradeId_key" ON "GradePopulation"("schoolId", "yearId", "gradeId");

-- CreateIndex
CREATE UNIQUE INDEX "SubgroupPopulation_schoolId_yearId_subgroupId_key" ON "SubgroupPopulation"("schoolId", "yearId", "subgroupId");

-- CreateIndex
CREATE UNIQUE INDEX "PopulationSnapshot_schoolId_yearId_key" ON "PopulationSnapshot"("schoolId", "yearId");

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroup" ADD CONSTRAINT "SubGroup_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "SubGroupType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroupToDataSet" ADD CONSTRAINT "SubGroupToDataSet_subGroupId_fkey" FOREIGN KEY ("subGroupId") REFERENCES "SubGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGroupToDataSet" ADD CONSTRAINT "SubGroupToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelToDataSet" ADD CONSTRAINT "LevelToDataSet_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelToDataSet" ADD CONSTRAINT "LevelToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectToDataSet" ADD CONSTRAINT "SubjectToDataSet_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectToDataSet" ADD CONSTRAINT "SubjectToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeToDataSet" ADD CONSTRAINT "GradeToDataSet_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeToDataSet" ADD CONSTRAINT "GradeToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineToDataSet" ADD CONSTRAINT "DisciplineToDataSet_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineToDataSet" ADD CONSTRAINT "DisciplineToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSource" ADD CONSTRAINT "DataSource_dataTypeId_fkey" FOREIGN KEY ("dataTypeId") REFERENCES "DataSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSource" ADD CONSTRAINT "DataSource_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSourceToDataSet" ADD CONSTRAINT "DataSourceToDataSet_dataSourceId_fkey" FOREIGN KEY ("dataSourceId") REFERENCES "DataSource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSourceToDataSet" ADD CONSTRAINT "DataSourceToDataSet_dataSetId_fkey" FOREIGN KEY ("dataSetId") REFERENCES "DataSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_subgroupId_fkey" FOREIGN KEY ("subgroupId") REFERENCES "SubGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubgroupPopulation" ADD CONSTRAINT "SubgroupPopulation_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSnapshot" ADD CONSTRAINT "PopulationSnapshot_pdfSourceId_fkey" FOREIGN KEY ("pdfSourceId") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
