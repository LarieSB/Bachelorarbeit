import { defineStore } from 'pinia'

export const useNutzungsordnung = defineStore({
    id: 'nutzungsordnung',
    state: () => ({
        Nutzungsordnung: false,
    }),
    getters: {
        get_nutzungsordnung(state) {
            return state.Nutzungsordnung;
        }
    },
    actions: {
        set_nutzungsordnung(nutzungsordnung) {
            this.nutzungsordnung = nutzungsordnung;
             localStorage.setItem('nutzungsordnung', JSON.stringify(nutzungsordnung))
        
        }
    } 
});