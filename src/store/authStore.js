import { create } from 'zustand'

const useAuthStore = create((set) => ({
    token: null,
    auth: async () => {
        try {
            const response = await fetch('/api/auth', { method: 'POST' });
            console.log(response);
            set({ token: response.data.token });
        } catch (error) {
            throw error;
        }
    }
}));

export default useAuthStore;