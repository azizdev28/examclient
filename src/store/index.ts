import { create } from "zustand";

// Create a Zustand store
const useProductStore = create((set) => ({
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
