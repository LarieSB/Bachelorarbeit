import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useCharakterisierung = defineStore({
    id: 'charakterisierung',
    state: () => ({
        Charakterisierung: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_charakterisierung(state) {
            return state.Charakterisierung;
        }
    },
    actions: {
        set_charakterisierung(charakterisierung) {
            this.status = true
            this.Charakterisierung = charakterisierung;
             localStorage.setItem('charakterisierung', JSON.stringify(charakterisierung)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});