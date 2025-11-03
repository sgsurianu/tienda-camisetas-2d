// lib/types.ts
export type PlacementKey = "center" | "leftChest" | "fullFront";

export type CategoryKey =
  | "gotica"
  | "musica"
  | "infantil"
  | "animal"
  | "manchas"
  | "surrealista"
  | "rosa";

export type Design = {
  id: string;
  name: string;
  svg: string;
  category: CategoryKey;      // ← necesario para filtrar por línea
  categoryLabel: string;      // ← texto legible para la UI
};

export type Product = {
  id: string;
  name: string;
  baseColor: string;
  imageUrl: string;
  price: number;
};
