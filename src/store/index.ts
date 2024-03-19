import { create } from "zustand";

// Define product type
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ququantity: number;
};

// Define store type
type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
};

// Create a Zustand store
const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch(
        "https://65f3d0ff105614e654a13150.mockapi.io/products"
      );
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;
