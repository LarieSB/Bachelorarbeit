import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useIDDaten = defineStore({
    id: 'iDDaten',
    state: () => ({
        IDDaten: {},
        // status: false,
        router: useRouter()
    }),
    getters: {
        get_iDDaten(state) {
            return state.IDDaten;
        }
    },
    actions: {
        set_iDDaten(iDDaten) {
            const data = JSON.parse(localStorage.getItem('IDDaten'))
            if (data) {
                this.IDDaten = [...new Set([...data, ...[iDDaten]])]
            } else {
                console.log('data is null', iDDaten)
                this.IDDaten = [iDDaten]
            }
            localStorage.setItem('IDDaten', JSON.stringify(this.IDDaten))
            console.log(this.router)
        },

        async removeIDDaten(index){
            this.IDDaten.splice(index, 1)
            localStorage.setItem('IDDaten', JSON.stringify(this.IDDaten))
        }
    } ,

    persist: {
        enabled: true,
    }
  
});