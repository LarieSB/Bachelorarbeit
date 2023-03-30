import { defineStore } from 'pinia'

export const useIDDaten = defineStore({
    id: 'iDDaten',
    state: () => ({
        IDDaten: {},
        
    }),
    getters: {
        get_iDDaten(state) {
            let dataIDDaten = localStorage.getItem('iDDaten')
            state.iDDaten = JSON.parse(dataIDDaten);
            return state.iDDaten;
        }
    },
    actions: {
        set_iDDaten(iDDaten) {
                if(localStorage.getItem('iDDaten')){
                    let dataIDDaten = JSON.parse(localStorage.getItem('iDDaten') || '[]')
                    console.log(dataIDDaten)
                    this.iDDaten = [iDDaten, ...dataIDDaten]
                    localStorage.setItem('iDDaten', JSON.stringify( this.iDDaten))
                }else{
                    localStorage.setItem('iDDaten', JSON.stringify([iDDaten]))
                    this.iDDaten = [iDDaten]
                }
                
                console.log(this.iDDaten)
            },
            remove_iDDaten(index){
                let dataIDDaten = JSON.parse(localStorage.getItem('iDDaten') || '[]')
                dataIDDaten.splice(index, 1)
                localStorage.setItem('iDDaten', JSON.stringify(dataIDDaten))
                this.iDDaten = dataIDDaten
            }
    } 
});