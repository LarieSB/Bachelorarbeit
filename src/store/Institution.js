import { defineStore } from 'pinia'

export const useInstitution = defineStore({
    id: 'institution',
    state: () => ({
        institution: [],
    }),
    getters: {
        get_institution(state) {
            let dataInstitution = localStorage.getItem('institution')
            state.institution = JSON.parse(dataInstitution);
            return state.institution;
        }
    },
    actions: {
        set_institution(institution) {
            if(localStorage.getItem('institution')){
                let dataInstitution = JSON.parse(localStorage.getItem('institution') || '[]')
                this.institution = [institution, ...dataInstitution]
                localStorage.setItem('institution', JSON.stringify( this.institution))
            }else{
                localStorage.setItem('institution', JSON.stringify([institution]))
                this.institution = [institution]
            }
            
            console.log(this.institution)
        },
        remove_institution(index){
            let dataInstitution = JSON.parse(localStorage.getItem('institution') || '[]')
            dataInstitution.splice(index, 1)
            localStorage.setItem('institution', JSON.stringify(dataInstitution))
            this.institution = dataInstitution
        }
    } 
});