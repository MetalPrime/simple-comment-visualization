import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
  console.error("Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const sampleComments = [
  {
    autor: "Juan García",
    email: "juan@example.com",
    comment:
      "Excelente proyecto, muy bien estructurado y fácil de entender.",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    autor: "María López",
    email: "maria@example.com",
    comment:
      "Me encantó la arquitectura de componentes. Muy clara la separación de responsabilidades.",
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    autor: "Carlos Rodríguez",
    email: "carlos@example.com",
    comment:
      "¿Hay planes para añadir autenticación de usuarios en el futuro?",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    autor: "Ana Martínez",
    email: "ana@example.com",
    comment:
      "El uso de Supabase es perfecto para este tipo de aplicación. Muy escalable.",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    autor: "Pedro Sánchez",
    email: "pedro@example.com",
    comment:
      "Me gustaría ver paginación implementada cuando hay muchos comentarios.",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    autor: "Laura González",
    email: "laura@example.com",
    comment: "El diseño con Tailwind CSS se ve muy moderno y limpio.",
    created_at: new Date().toISOString(),
  },
];

async function seed() {
  try {
    console.log("🌱 Starting database seed...");

    // Insert sample comments
    const { data, error } = await supabase
      .from("comments")
      .insert(sampleComments);

    if (error) {
      console.error("❌ Error inserting comments:", error);
      process.exit(1);
    }

    console.log("✅ Successfully inserted", sampleComments.length, "comments");
    console.log("🎉 Database seed completed!");
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
}

seed();
