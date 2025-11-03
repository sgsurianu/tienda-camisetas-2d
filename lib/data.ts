// lib/data.ts
import { CategoryKey, Design, PlacementKey, Product } from "./types";

export const CATEGORIES: Record<CategoryKey, { label: string }> = {
  gotica: { label: "Línea Gótica" },
  musica: { label: "Línea Música" },
  infantil: { label: "Línea Infantil" },
  animal: { label: "Línea Animal" },
  manchas: { label: "Línea Manchas" },
  surrealista: { label: "Línea Surrealista" },
  rosa: { label: "Línea Rosa" },
};

export const PLACEMENTS: Record<
  PlacementKey,
  { label: string; box: { x: number; y: number; w: number; h: number } }
> = {
  center: { label: "Pecho centro", box: { x: 170, y: 220, w: 260, h: 260 } },
  leftChest: {
    label: "Pecho izquierdo (bolsillo)",
    box: { x: 210, y: 220, w: 120, h: 120 },
  },
  fullFront: {
    label: "Frente completo",
    box: { x: 140, y: 190, w: 320, h: 380 },
  },
};

export const SIZES = ["S", "M", "L", "XL", "2XL"] as const;

export const PRODUCTS: Product[] = [
  {
    id: "tee-wht",
    name: "Camiseta Blanca Unisex",
    baseColor: "#ffffff",
    imageUrl: "/base-tee.svg",
    price: 49000, // ← precio actualizado
  },
];

export const DESIGNS: Design[] = [
  {
    id: "g1",
    name: "Gárgola",
    category: "gotica",
    categoryLabel: CATEGORIES.gotica.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='white'/><path d='M120 300 L256 120 L392 300 L256 260 Z' fill='#111827'/></svg>`,
  },
  {
    id: "m1",
    name: "Vinilo",
    category: "musica",
    categoryLabel: CATEGORIES.musica.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><circle cx='256' cy='256' r='200' fill='black'/><circle cx='256' cy='256' r='30' fill='white'/></svg>`,
  },
  {
    id: "i1",
    name: "Cohete",
    category: "infantil",
    categoryLabel: CATEGORIES.infantil.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='white'/><path d='M256 80 L300 200 L256 340 L212 200 Z' fill='#F59E0B'/></svg>`,
  },
  {
    id: "a1",
    name: "Lobo",
    category: "animal",
    categoryLabel: CATEGORIES.animal.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='white'/><path d='M120 360 Q256 220 392 360' stroke='#111827' stroke-width='16' fill='none'/></svg>`,
  },
  {
    id: "ma1",
    name: "Salpicadura",
    category: "manchas",
    categoryLabel: CATEGORIES.manchas.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g fill='#2563EB'><circle cx='120' cy='160' r='40'/><circle cx='220' cy='220' r='20'/><circle cx='360' cy='260' r='60'/></g></svg>`,
  },
  {
    id: "s1",
    name: "Reloj derretido",
    category: "surrealista",
    categoryLabel: CATEGORIES.surrealista.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M160 160 Q220 120 300 160 T380 220 T300 300 T200 260 Z' fill='#10B981'/></svg>`,
  },
  {
    id: "r1",
    name: "Rosa tipográfica",
    category: "rosa",
    categoryLabel: CATEGORIES.rosa.label,
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='white'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-size='120' font-family='monospace' fill='#BE185D'>LA</text></svg>`,
  },
];
