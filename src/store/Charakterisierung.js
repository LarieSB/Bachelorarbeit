import { defineStore } from 'pinia'

export const useCharakterisierung = defineStore({
    id: 'charakterisierung',
    state: () => ({
        Charakterisierung: {},
    }),
    getters: {
        get_charakterisierung(state) {
            return state.Charakterisierung;
        }
    },
    actions: {
        set_charakterisierung(charakterisierung) {
            this.Charakterisierung = charakterisierung;
             localStorage.setItem('charakterisierung', JSON.stringify(charakterisierung))
        
        }
    } 
});