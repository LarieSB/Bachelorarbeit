import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useHintergrund = defineStore({
    id: 'hintergrund',
    state: () => ({
        Hintergrund: {},
        status: false,
        router: useRouter()
    }),
    getters: {
        get_hintergrund(state) {
            return state.Hintergrund;
        }
    },
    actions: {
        set_hintergrund(hintergrund) {
            this.status = true
            this.Hintergrund = hintergrund;
             localStorage.setItem('hintergrund', JSON.stringify(hintergrund)).then(()=>{
                this.status = false
            console.log(this.router)
             
             })
        }
    } 
});