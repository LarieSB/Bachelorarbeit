import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useNutzungsordnung = defineStore({
    id: 'nutzungsordnung',
    state: () => ({
        Nutzungsordnung: false,
        status: false,
        router: useRouter()
    }),
    getters: {
        get_nutzungsordnung(state) {
            return state.Nutzungsordnung;
        }
    },
    actions: {
        set_nutzungsordnung(nutzungsordnung) {
            this.status = true
            this.nutzungsordnung = nutzungsordnung;
             localStorage.setItem('nutzungsordnung', JSON.stringify(nutzungsordnung)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});