import { defineStore } from 'pinia'

export const useEinwilligung = defineStore({
    id: 'einwilligung',
    state: () => ({
        Einwilligung: {},
    }),
    getters: {
        get_einwilligung(state) {
            return state.Einwilligung;
        }
    },
    actions: {
        set_einwilligung(einwilligung) {
            this.Einwilligung = einwilligung;
             localStorage.setItem('einwilligung', JSON.stringify(einwilligung))
        
        }
    } 
});