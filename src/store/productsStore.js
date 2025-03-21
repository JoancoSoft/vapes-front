import axios from "@/services/axios";
import { create } from 'zustand'

const useProductsStore = create((set) => ({
    products: [],
    getProducts: async () => {
        try {
            const response = await axios.get('/products');
            set({ products: response.data });
        } catch (error) {
            throw error;
        }
    }
}));

export default useProductsStore;