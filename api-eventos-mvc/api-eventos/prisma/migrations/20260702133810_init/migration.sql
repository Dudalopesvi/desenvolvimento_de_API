-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "vagas" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

);
