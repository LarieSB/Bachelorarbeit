import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useAllgemeine = defineStore({
    id: 'allgemeine',
    state: () => ({
        Allgemeine: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_allgemeine(state) {
            return state.Allgemeine;
        }
    },
    actions: {
        set_allgemeine(allgemeine) {
            this.status = true
            this.Allgemeine = allgemeine;
             localStorage.setItem('allgemeine', JSON.stringify(allgemeine)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});