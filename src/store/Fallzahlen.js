import { defineStore } from 'pinia'

export const useFallzahlen = defineStore({
    id: 'fallzahlen',
    state: () => ({
        Fallzahlen: {},
    }),
    getters: {
        get_fallzahlen(state) {
            return state.Fallzahlen;
        }
    },
    actions: {
        set_fallzahlen(fallzahlen) {
            this.Fallzahlen = fallzahlen;
             localStorage.setItem('fallzahlen', JSON.stringify(fallzahlen))
        
        }
    } 
});