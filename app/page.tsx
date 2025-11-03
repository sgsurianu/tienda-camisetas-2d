"use client";
import { useMemo, useState } from "react";
import { CartItem, PlacementKey } from "@/lib/types";
import { PRODUCTS, DESIGNS, PLACEMENTS, SIZES } from "@/lib/data";
import TShirtViewer from "@/components/TShirtViewer";
import DesignGrid from "@/components/DesignGrid";
import { moneyCOP } from "@/lib/utils";

export default function Home() {
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [design, setDesign] = useState(DESIGNS[0]);
  const [placement, setPlacement] = useState<PlacementKey>("center");
  const [size, setSize] = useState<typeof SIZES[number]>("M");
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const subtotal = useMemo(() => cart.reduce((a,c)=> a + c.unitPrice*c.qty, 0), [cart]);

  const addToCart = () => {
    const item: CartItem = {
      productId: product.id,
      productName: product.name,
      designId: design.id,
      designName: design.name,
      color: product.baseColor,
      size,
      placement,
      qty,
      unitPrice: product.price,
    };
    setCart(prev => [...prev, item]);
    setCartOpen(true);
  };

  const checkout = async () => {
    alert("Demo: conecta Wompi/MercadoPago en /app/api/checkout");
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold">Lienzos Arts – Tienda 2D</h1>
          <button onClick={() => setCartOpen(true)} className="relative inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-slate-100">
            <span>Carrito</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">
              {cart.length}
            </span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel izquierdo: opciones */}
        <section className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Selector de producto */}
            <div className="md:col-span-1 space-y-2">
              <h2 className="font-medium">Camiseta</h2>
              <div className="grid grid-cols-3 gap-2">
                {PRODUCTS.map(p => (
                  <button key={p.id} onClick={() => setProduct(p)}
                          className={`border rounded-xl p-2 hover:bg-slate-50 ${product.id===p.id ? "ring-2 ring-slate-900" : ""}`}>
                    <div className="w-full aspect-square rounded-lg border" style={{ backgroundColor: p.baseColor }} />
                    <p className="text-xs mt-2 line-clamp-2">{p.name}</p>
                  </button>
                ))}
              </div>

              <h2 className="font-medium mt-4">Ubicación</h2>
              <div className="grid grid-cols-1 gap-2">
                {(Object.keys(PLACEMENTS) as PlacementKey[]).map(k => (
                  <label key={k} className={`flex items-center gap-2 text-sm border rounded-xl p-2 hover:bg-slate-50 ${placement===k ? "ring-2 ring-slate-900" : ""}`}>
                    <input type="radio" name="placement" className="accent-slate-900" checked={placement===k} onChange={()=>setPlacement(k)} />
                    {PLACEMENTS[k].label}
                  </label>
                ))}
              </div>

              <h2 className="font-medium mt-4">Talla</h2>
              <div className="flex flex-wrap gap-2">
                {SIZES.map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 rounded-xl border text-sm ${size===s ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"}`}>
                    {s}
                  </button>
                ))}
              </div>

              <h2 className="font-medium mt-4">Cantidad</h2>
              <div className="inline-flex items-center border rounded-xl overflow-hidden">
                <button className="px-3 py-2" onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
                <span className="px-4">{qty}</span>
                <button className="px-3 py-2" onClick={() => setQty(q => q+1)}>+</button>
              </div>

              <button onClick={addToCart} className="mt-4 w-full rounded-2xl bg-slate-900 text-white py-2 hover:opacity-90">
                Agregar al carrito – {moneyCOP(product.price)}
              </button>
            </div>

            {/* Visor */}
            <div className="md:col-span-2">
              <TShirtViewer product={product} design={design} placement={placement} />
            </div>
          </div>
        </section>

        {/* Catálogo de diseños */}
        <section className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Diseños ({DESIGNS.length})</h2>
            <p className="text-sm text-slate-500">Haz clic para aplicar</p>
          </div>
          <DesignGrid designs={DESIGNS} currentId={design.id} onPick={setDesign} />
        </section>
      </main>

      {/* Carrito lateral */}
      {cartOpen && (
        <div className="fixed inset-0 z-20">
          <div className="absolute inset-0 bg-black/30" onClick={() => setCartOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Carrito</h3>
              <button onClick={() => setCartOpen(false)} className="rounded-full border px-3 py-1">Cerrar</button>
            </div>

            <div className="mt-4 space-y-3 flex-1 overflow-auto">
              {cart.length===0 && <p className="text-sm text-slate-500">Tu carrito está vacío.</p>}
              {cart.map((it, idx) => (
                <div key={idx} className="border rounded-2xl p-3">
                  <p className="text-sm font-medium">{it.productName}</p>
                  <p className="text-xs text-slate-600">{it.designName} • {PLACEMENTS[it.placement].label} • Talla {it.size} • x{it.qty}</p>
                  <p className="text-sm mt-1 font-semibold">{moneyCOP(it.unitPrice * it.qty)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">{moneyCOP(subtotal)}</span>
              </div>
              <button onClick={checkout} className="mt-3 w-full rounded-2xl bg-slate-900 text-white py-2 hover:opacity-90">
                Pagar (conectar pasarela)
              </button>
              <p className="text-[11px] text-slate-500 mt-2">* Demo: conecta Wompi, MercadoPago o PayU en producción.</p>
            </div>
          </aside>
        </div>
      )}

      <footer className="max-w-6xl mx-auto px-4 py-10 text-center text-xs text-slate-500">
        Lienzos Arts — Demo 2D con ubicaciones fijas para control de impresión.
      </footer>
    </div>
  );
}
