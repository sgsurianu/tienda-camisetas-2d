"use client";
import { Design } from "@/lib/types";
import { svgToDataUrl } from "@/lib/utils";

export default function DesignGrid({
  designs, currentId, onPick,
}: { designs: Design[]; currentId: string; onPick: (d: Design) => void; }) {
  return (
    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {designs.map(d => (
        <button key={d.id}
          onClick={() => onPick(d)}
          className={`group border rounded-2xl overflow-hidden hover:shadow ${currentId===d.id ? "ring-2 ring-slate-900" : ""}`}>
          <div className="w-full aspect-square bg-white grid place-items-center">
            <img src={svgToDataUrl(d.svg)} alt={d.name} className="w-4/5 h-4/5 object-contain"/>
          </div>
          <div className="p-2 text-left">
            <p className="text-sm font-medium">{d.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
