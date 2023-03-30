import { defineStore } from 'pinia'

export const useNutzenRisiko = defineStore({
    id: 'nutzenRisiko',
    state: () => ({
        NutzenRisiko: {},
    }),
    getters: {
        get_nutzenRisiko(state) {
            return state.NutzenRisiko;
        }
    },
    actions: {
        set_nutzenRisiko(nutzenRisiko) {
            this.NutzenRisiko = nutzenRisiko;
             localStorage.setItem('nutzenRisiko', JSON.stringify(nutzenRisiko))
        
        }
    } 
});