import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useExterneDaten = defineStore({
    id: 'externeDaten',
    state: () => ({
        ExterneDaten: {},
        // status: false,
        router: useRouter()
    }),
    getters: {
        get_externeDaten(state) {
            return state.ExterneDaten;
        }
    },
    actions: {
        set_externeDaten(externeDaten) {
            const data = JSON.parse(localStorage.getItem('externeDaten'))
            if (data) {
                this.ExterneDaten = [...new Set([...data, ...[externeDaten]])]
            } else {
                this.ExterneDaten = [externeDaten]
            }
            localStorage.setItem('externeDaten', JSON.stringify(this.ExterneDaten))
            console.log(this.router)
        },

        async removeExterneDaten(index){
            this.ExterneDaten.splice(index, 1)
            localStorage.setItem('externeDaten', JSON.stringify(this.ExterneDaten))
        }
    },

    persist: {
        enabled: true,
    }
           
             
           
});