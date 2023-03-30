import { defineStore } from 'pinia'

export const useBeteiligte = defineStore({
    id: 'beteiligte',
    state: () => ({
        Beteiligte: {},
        status: false
    }),
    getters: {
        get_beteiligte(state) {
            return state.Beteiligte;
        }
    },
    actions: {
        set_beteiligte(beteiligte) {
            this.status = true
            this.Beteiligte = beteiligte;
            localStorage.setItem('beteiligte', JSON.stringify(beteiligte)).then(() => {
                this.status = false
            })
        
        }
    } 
});