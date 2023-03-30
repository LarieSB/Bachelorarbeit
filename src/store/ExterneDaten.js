import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useExterneDaten = defineStore({
    id: 'externeDaten',
    state: () => ({
        ExterneDaten: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_externeDaten(state) {
            return state.ExterneDaten;
        }
    },
    actions: {
        set_externeDaten(externeDaten) {
            this.status = true
            this.externeDaten = externeDaten;
             localStorage.setItem('externeDaten', JSON.stringify(externeDaten)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});