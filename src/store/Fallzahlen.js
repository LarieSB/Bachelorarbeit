import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useFallzahlen = defineStore({
    id: 'fallzahlen',
    state: () => ({
        Fallzahlen: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_fallzahlen(state) {
            return state.Fallzahlen;
        }
    },
    actions: {
        
        set_fallzahlen(fallzahlen) {
            this.status = true
            this.Fallzahlen = fallzahlen;
             localStorage.setItem('fallzahlen', JSON.stringify(fallzahlen)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});