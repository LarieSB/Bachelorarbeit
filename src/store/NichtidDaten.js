import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useNichtidDaten = defineStore({
    id: 'nichtidDaten',
    state: () => ({
        NichtidDaten: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_nichtidDaten(state) {
            return state.NichtidDaten;
        }
    },
    actions: {
        set_nichtidDaten(nichtidDaten) {
            this.status = true
            this.nichtidDaten = nichtidDaten;
             localStorage.setItem('nichtidDaten', JSON.stringify(nichtidDaten)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});