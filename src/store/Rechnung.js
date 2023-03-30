import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useRechnung = defineStore({
    id: 'rechnung',
    state: () => ({
        Rechnung: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_rechnung(state) {
            return state.Rechnung;
        }
    },
    actions: {
        set_rechnung(rechnung) {
            this.status = true
            this.Rechnung = rechnung;
             localStorage.setItem('rechnung', JSON.stringify(rechnung)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});