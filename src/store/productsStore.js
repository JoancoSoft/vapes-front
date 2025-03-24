import { create } from 'zustand'
import axios from '@/services/axios';

const useProductsStore = create((set) => ({
    products: [],
    getProducts: async () => {
        try {
            const response = await axios.get('/vapers/api');
            set({ products: response.data });
        } catch (error) {
            throw error;
        }
    }
}));

export default useProductsStore;