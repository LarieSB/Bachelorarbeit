import { defineStore } from 'pinia'

export const useKohorte = defineStore({
    id: 'kohorte',
    state: () => ({
        Kohorte: {},
    }),
    getters: {
        get_kohorte(state) {
            return state.Kohorte;
        }
    },
    actions: {
        set_kohorte(kohorte) {
            this.Kohorte = kohorte;
             localStorage.setItem('kohorte', JSON.stringify(kohorte))
        
        }
    } 
});