import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useNutzenRisiko = defineStore({
    id: 'nutzenRisiko',
    state: () => ({
        NutzenRisiko: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_nutzenRisiko(state) {
            return state.NutzenRisiko;
        }
    },
    actions: {
        set_nutzenRisiko(nutzenRisiko) {
            this.status = true
            this.NutzenRisiko = nutzenRisiko;
             localStorage.setItem('nutzenRisiko', JSON.stringify(nutzenRisiko)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});