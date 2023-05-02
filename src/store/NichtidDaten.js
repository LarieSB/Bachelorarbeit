import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useNichtidDaten = defineStore({
    id: 'nichtidDaten',
    state: () => ({
        NichtidDaten: {},
        // status: false,
        router: useRouter()
    }),
    getters: {
        get_nichtidDaten(state) {
            return state.NichtidDaten;
        }
    },
    actions: {
        set_nichtidDaten(nichtidDaten) {
            const data = JSON.parse(localStorage.getItem('nichtidDaten'))
                if (data) {
                    this.NichtidDaten = [...new Set([...data, ...[nichtidDaten]])]
                } else {
                    console.log('data is null', nichtidDaten)
                    this.NichtidDaten = [nichtidDaten]
                }
                console.log(this.NichtidDaten)
                localStorage.setItem('nichtidDaten', JSON.stringify(this.NichtidDaten))
            },
    
            async removeNichtidDaten(index){
                this.NichtidDaten.splice(index, 1)
                localStorage.setItem('nichtidDaten', JSON.stringify(this.NichtidDaten))
                console.log(this.router)
            }
        },
    
        persist: {
            enabled: true,
        }
                
});