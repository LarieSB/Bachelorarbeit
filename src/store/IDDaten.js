import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useIDDaten = defineStore({
    id: 'iDDaten',
    state: () => ({
        IDDaten: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_iDDaten(state) {
            return state.IDDaten;
        }
    },
    actions: {
        set_iDDaten(iDDaten) {
            this.status = true
            this.iDDaten = iDDaten;
             localStorage.setItem('iDDaten', JSON.stringify(iDDaten)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});