import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useKohorte = defineStore({
    id: 'kohorte',
    state: () => ({
        Kohorte: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_kohorte(state) {
            return state.Kohorte;
        }
    },
    actions: {
        set_kohorte(kohorte) {
            this.status = true
            this.Kohorte = kohorte;
             localStorage.setItem('kohorte', JSON.stringify(kohorte)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});