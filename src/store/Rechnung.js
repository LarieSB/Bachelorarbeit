import { defineStore } from 'pinia'

export const useRechnung = defineStore({
    id: 'rechnung',
    state: () => ({
        Rechnung: {},
    }),
    getters: {
        get_rechnung(state) {
            return state.Rechnung;
        }
    },
    actions: {
        set_rechnung(rechnung) {
            this.Rechnung = rechnung;
             localStorage.setItem('rechnung', JSON.stringify(rechnung))
        
        }
    } 
});