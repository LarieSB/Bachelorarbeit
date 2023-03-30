import { defineStore } from 'pinia'

export const useBeteiligte = defineStore({
    id: 'beteiligte',
    state: () => ({
        Beteiligte: {},
    }),
    getters: {
        get_beteiligte(state) {
            return state.Beteiligte;
        }
    },
    actions: {
        set_beteiligte(beteiligte) {
            this.Beteiligte = beteiligte;
             localStorage.setItem('beteiligte', JSON.stringify(beteiligte))
        
        }
    } 
});