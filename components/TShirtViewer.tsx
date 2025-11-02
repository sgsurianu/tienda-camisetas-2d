"use client";
import Image from "next/image";
import { useMemo } from "react";
import { Design, Product, PlacementKey } from "@/lib/types";
import { PLACEMENTS } from "@/lib/data";
import { svgToDataUrl } from "@/lib/utils";

export default function TShirtViewer({
  product, design, placement,
}: { product: Product; design: Design; placement: PlacementKey; }) {
  const designUrl = useMemo(() => svgToDataUrl(design.svg), [design.svg]);
  const box = PLACEMENTS[placement].box;

  return (
    <div className="relative w-full aspect-[6/7] bg-slate-100 rounded-2xl overflow-hidden">
      <Image src={product.imageUrl} alt="camiseta" fill className="object-contain" />
      <div className="absolute" style={{ left: box.x, top: box.y, width: box.w, height: box.h }}>
        <img src={designUrl} alt="diseño" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
