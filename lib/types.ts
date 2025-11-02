export type PlacementKey = "center" | "leftChest" | "fullFront";

export type Design = {
  id: string;
  name: string;
  svg: string; // inline SVG (o URL si luego usas Cloudinary)
};

export type Product = {
  id: string;
  name: string;
  baseColor: string; // hex
  imageUrl: string;  // /base-tee.svg u otra silueta
  price: number;     // COP
};

export type CartItem = {
  productId: string;
  productName: string;
  designId: string;
  designName: string;
  color: string;
  size: "S" | "M" | "L" | "XL" | "2XL";
  placement: PlacementKey;
  qty: number;
  unitPrice: number;
};
