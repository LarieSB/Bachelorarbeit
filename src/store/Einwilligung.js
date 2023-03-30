import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useEinwilligung = defineStore({
    id: 'einwilligung',
    state: () => ({
        Einwilligung: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_einwilligung(state) {
            return state.Einwilligung;
        }
    },
    actions: {
        set_einwilligung(einwilligung) {
            this.status = true
            this.Einwilligung = einwilligung;
             localStorage.setItem('einwilligung', JSON.stringify(einwilligung)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});