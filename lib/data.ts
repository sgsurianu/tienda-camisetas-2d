import { Design, Product, PlacementKey } from "./types";

export const SIZES = ["S","M","L","XL","2XL"] as const;

export const PLACEMENTS: Record<PlacementKey, { label:string; box:{x:number;y:number;w:number;h:number} }> = {
  center:    { label: "Pecho centro",               box: { x:170, y:220, w:260, h:260 } },
  leftChest: { label: "Pecho izquierdo (bolsillo)", box: { x:210, y:220, w:120, h:120 } },
  fullFront: { label: "Frente completo",            box: { x:140, y:190, w:320, h:380 } },
};

export const PRODUCTS: Product[] = [
  { id: "tee-wht", name: "Camiseta Blanca Unisex", baseColor: "#ffffff", imageUrl: "/base-tee.svg", price: 52000 },
  { id: "tee-blk", name: "Camiseta Negra Unisex",  baseColor: "#111827", imageUrl: "/base-tee.svg", price: 52000 },
  { id: "tee-ash", name: "Camiseta Gris Jaspe",    baseColor: "#e5e7eb", imageUrl: "/base-tee.svg", price: 52000 },
];

export const DESIGNS: Design[] = [
  {
    id: "d1",
    name: "Sol Geométrico",
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <rect width='100%' height='100%' fill='none'/>
      <circle cx='256' cy='256' r='120' fill='#F59E0B'/>
      <g stroke='#111827' stroke-width='8'>
        <line x1='256' y1='40'  x2='256' y2='120'/>
        <line x1='256' y1='392' x2='256' y2='472'/>
        <line x1='40'  y1='256' x2='120' y2='256'/>
        <line x1='392' y1='256' x2='472' y2='256'/>
      </g>
    </svg>`
  },
  {
    id: "d2",
    name: "Ondas",
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M0 20 Q10 0 20 20 T40 20' fill='none' stroke='#2563EB' stroke-width='4'/>
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#p)'/>
    </svg>`
  },
  {
    id: "d3",
    name: "Tipografía",
    svg: `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <rect width='100%' height='100%' fill='white'/>
      <text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-size='120' font-family='monospace' fill='#111827'>LA</text>
    </svg>`
  },
];
