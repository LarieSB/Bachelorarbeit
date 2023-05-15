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
            const data = JSON.parse(localStorage.getItem('iDDaten'))
            if (data) {
                this.IDDaten = [...new Set([...data, ...[iDDaten]])]
            } else {
                console.log('data is null', iDDaten)
                this.IDDaten = [iDDaten]
            }
            console.log(this.IDDaten)
            localStorage.setItem('iDDaten', JSON.stringify(this.IDDaten))
        },

        async removeIDDaten(index){
            this.IDDaten.splice(index, 1)
            localStorage.setItem('iDDaten', JSON.stringify(this.IDDaten))
            console.log(this.router)
        }
    } ,

    persist: {
        enabled: true,
    }
  
});