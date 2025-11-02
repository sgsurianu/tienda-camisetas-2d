# 🛍️ Tienda de Camisetas 2D

Proyecto web interactivo desarrollado con **Next.js** y **Tailwind CSS** que permite visualizar diseños gráficos sobre camisetas en 2D.  
El usuario puede elegir color, talla y ubicación del diseño (pecho centro, izquierdo o frontal completo), agregarlos al carrito y proceder al pago.

---

## 🚀 Objetivo del proyecto
Este proyecto tiene fines **pedagógicos y de portafolio**, con el propósito de aprender y demostrar las bases del desarrollo web profesional con React / Next.js, incluyendo:

- Arquitectura moderna **App Router** de Next.js.  
- Integración de **Tailwind CSS** para estilos rápidos y consistentes.  
- Manejo de **estado y componentes** para un flujo completo (selección, visualización, carrito).  
- Preparación para integrar pasarelas de pago (Wompi, MercadoPago o PayU).  

---

## 🧠 Características principales
- Visualizador 2D de camisetas (sin IA ni 3D).  
- Diseños fijos para control de impresión.  
- Selector de color, talla y cantidad.  
- Carrito lateral con cálculo de subtotal.  
- Estructura escalable lista para integración con API de pagos.  

---

## ⚙️ Tecnologías utilizadas
| Tecnología | Uso principal |
|-------------|----------------|
| [Next.js 15](https://nextjs.org/) | Framework React moderno con App Router |
| [React](https://react.dev/) | Librería de componentes interactivos |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitario |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático y escalabilidad |
| [Git + GitHub](https://github.com/sgsurianu/tienda-camisetas-2d) | Control de versiones y publicación |
| [Vercel](https://vercel.com/) *(futuro)* | Despliegue gratuito y continuo |

---

## 🧩 Estructura del proyecto
```
tienda-camisetas-2d/
├─ app/
│  ├─ page.tsx              → Página principal (viewer + catálogo)
│  ├─ api/checkout/route.ts → Endpoint de prueba para pagos
│  └─ globals.css           → Estilos globales (Tailwind)
├─ components/
│  ├─ TShirtViewer.tsx      → Render de camiseta + overlay del diseño
│  └─ DesignGrid.tsx        → Cuadrícula de diseños
├─ lib/
│  ├─ data.ts               → Catálogo inicial de productos y diseños
│  ├─ types.ts              → Tipos TypeScript (Product, Design, etc.)
│  └─ utils.ts              → Funciones auxiliares (formato SVG/COP)
├─ public/                  → Archivos estáticos (ej. base-tee.svg)
└─ package.json             → Dependencias y scripts
```

---

## 💻 Cómo ejecutar en local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/sgsurianu/tienda-camisetas-2d.git
   cd tienda-camisetas-2d
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta en modo desarrollo**
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000)

---

## 📦 Próximas mejoras
- [ ] Conexión con **pasarela de pago Wompi/MercadoPago**  
- [ ] Panel **/admin** para subir nuevos diseños  
- [ ] Base de datos para catálogo dinámico (PostgreSQL o MongoDB)  
- [ ] Despliegue en **Vercel**  
- [ ] Optimización SEO y responsive avanzado  

---

## 👤 Autor

**Sebastián García Surianu**  
👨‍💻 Compositor, docente universitario e ingeniero informático  
🌐 [GitHub](https://github.com/sgsurianu) · [LinkedIn](https://linkedin.com/in/sgsurianu)  

---

## 🪄 Licencia
Este proyecto tiene fines educativos y de portafolio.  
Puedes usarlo como base para aprender, mejorar o extender con nuevas funciones.
