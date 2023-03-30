import { defineStore } from 'pinia'

export const useNichtidDaten = defineStore({
    id: 'nichtidDaten',
    state: () => ({
        NichtidDaten: {},
    }),
    getters: {
        get_nichtidDaten(state) {
            return state.NichtidDaten;
        }
    },
    actions: {
        set_nichtidDaten(nichtidDaten) {
            this.nichtidDaten = nichtidDaten;
             localStorage.setItem('nichtidDaten', JSON.stringify(nichtidDaten))
        
        }
    } 
});