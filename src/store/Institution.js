import { defineStore } from 'pinia'

export const useInstitution = defineStore({
    id: 'institution',
    state: () => ({
        Institution: {},
    }),
    getters: {
        get_institution(state) {
            return state.Institution;
        }
    },
    actions: {
        set_institution(institution) {
            this.institution = institution;
             localStorage.setItem('institution', JSON.stringify(institution))
        
        }
    } 
});