import { defineStore } from 'pinia'

export const useDatenschutz = defineStore({
    id: 'datenschutz',
    state: () => ({
        Datenschutz: {},
    }),
    getters: {
        get_datenschutz(state) {
            return state.Datenschutz;
        }
    },
    actions: {
        set_datenschutz(datenschutz) {
            this.Datenschutz = datenschutz;
             localStorage.setItem('datenschutz', JSON.stringify(datenschutz))
        
        }
    } 
});