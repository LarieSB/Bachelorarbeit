import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useInstitution = defineStore({
    id: 'institution',
    state: () => ({
        Institution: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_institution(state) {
            return state.Institution;
        }
    },
    actions: {
        set_institution(institution) {
            this.status = true
            this.institution = institution;
             localStorage.setItem('institution', JSON.stringify(institution)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});