const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedSegments() {
  try {
    const segmentsToCreate = [
      { name: "Salão de Beleza" },
      { name: "Barbearia" },
      { name: "Infantil" },
      { name: "Pedicure" },
      { name: "Estética" },
      { name: "SPA" },
      { name: "Massagem" },
      { name: "Sobrancelha" },
      { name: "Cílios" },
      { name: "Podologia" },
      { name: "Fisioterapia" },
    ];

    await prisma.segment.createMany({
      data: segmentsToCreate,
    });

    console.log("Valores inseridos com sucesso na tabela Segments.");
  } catch (error) {
    console.error("Erro ao inserir valores na tabela Segments:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedSegments();
