import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useDatenschutz = defineStore({
    id: 'datenschutz',
    state: () => ({
        Datenschutz: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_datenschutz(state) {
            return state.Datenschutz;
        }
    },
    actions: {
        set_datenschutz(datenschutz) {
            this.status = true
            this.Datenschutz = datenschutz;
             localStorage.setItem('datenschutz', JSON.stringify(datenschutz)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});