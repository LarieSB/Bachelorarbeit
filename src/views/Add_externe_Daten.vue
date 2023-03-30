<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { FormKitIcon } from '@formkit/vue'
import { camel2title, axios } from '@/_helpers/utils.js'
import useSteps from '@/_helpers/useSteps.js'
import { ref, reactive } from 'vue'
import {useExterneDaten} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useExterneDaten()
// store.set_ExterneDaten(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Bezeichnung:'',
  Spezifizierung:'',
  Woher_stammen_die_Daten:'',
  Wer_erhebt:'',
  Bemerkung:''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Benoetigte Daten'})
  }
  store.set_externeDaten(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Add Externe Daten</h1>
  <FormKit
  type="form"
  class="btn" 
 >
 
    <div class="textfelddiv">
      <label for="Bezeichnung">Bezeichnung <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Bezeichnung"
      rows="8"
      placeholder="Enter Bezeichnung"
      validation="required"
      v-model="state.Bezeichnung"
    />
    </div>
    <div class="grid md:grid-cols-2 gap-10 mb-4">
    <div class="textfelddiv">
      <label for="Spezifizierung">Spezifizierung<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Spezifizierung"
      placeholder="z.B. Erster Wert bei Aufnahme"
      rows="8"
      validation="required"
      v-model="state.Spezifizierung"
    />
    </div>
    <div class="textfelddiv">
      <label for="Woher_stammen_die_Daten">Woher stammen die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Woher_stammen_die_Daten"
      rows="8"
      placeholder="z.B. Wetterdienst, Krankenkassen"
      validation="required"
      v-model="state.Woher_stammen_die_Daten"
    />
    </div>
    <div class="textfelddiv">
      <label for="Wer_erhebt">Wer erhebt die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name=" Wer_erhebt "
      placeholder="z.B. DIZ, Studienpersonal"
      validation="required"
      v-model="state.Wer_erhebt"
    />
    </div>
    <div class="textfelddiv">
      <label for="Bemerkung">Bemerkung<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name=" Bemerkung "
      placeholder="Enter Bemerkung"
      validation="required"
      v-model="state.Bemerkung"
    />
    </div>
        
    </div>
    <FormKit type="button" @click="store.set_externeDaten(state)" label="Submit Application" />
     
</FormKit>  
</template>