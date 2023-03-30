import { defineStore } from 'pinia'

export const useExterneDaten = defineStore({
    id: 'externeDaten',
    state: () => ({
        ExterneDaten: {},
    }),
    getters: {
        get_externeDaten(state) {
            return state.ExterneDaten;
        }
    },
    actions: {
        set_externeDaten(externeDaten) {
            this.externeDaten = externeDaten;
             localStorage.setItem('externeDaten', JSON.stringify(externeDaten))
        
        }
    } 
});