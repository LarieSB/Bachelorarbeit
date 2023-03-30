import { defineStore } from 'pinia'

export const useHintergrund = defineStore({
    id: 'hintergrund',
    state: () => ({
        Hintergrund: {},
    }),
    getters: {
        get_hintergrund(state) {
            return state.Hintergrund;
        }
    },
    actions: {
        set_hintergrund(hintergrund) {
            this.Hintergrund = hintergrund;
             localStorage.setItem('hintergrund', JSON.stringify(hintergrund))
        
        }
    } 
});