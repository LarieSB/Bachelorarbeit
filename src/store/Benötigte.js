import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useBenötigte = defineStore({
    id: 'benötigte',
    state: () => ({
        Benötigte: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_benötigte(state) {
            return state.Benötigte;
        }
    },
    actions: {
        set_benötigte(benötigte) {
            this.status = true
            this.Benötigte = benötigte;
            //  localStorage.setItem('benötigte', JSON.stringify(benötigte)).then(()=>{
            //     this.status = false
            console.log(this.router)
             
            //  })
        }
    } 
});