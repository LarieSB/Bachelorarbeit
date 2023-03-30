import { defineStore } from 'pinia'

export const useIDDaten = defineStore({
    id: 'iDDaten',
    state: () => ({
        IDDaten: {},
    }),
    getters: {
        get_iDDaten(state) {
            return state.IDDaten;
        }
    },
    actions: {
        set_iDDaten(iDDaten) {
            this.iDDaten = iDDaten;
             localStorage.setItem('iDDaten', JSON.stringify(iDDaten))
        
        }
    } 
});