<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { FormKitIcon } from '@formkit/vue'
import { camel2title, axios } from '@/_helpers/utils.js'
import useSteps from '@/_helpers/useSteps.js'
import { ref, reactive } from 'vue'
import {useNutzenRisiko} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useNutzenRisiko()
// store.set_NutzenRisiko(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Fragestellung_der_Studie:'',
  anderer_Nutzer: '',
  Studienteilnahme_verbundener_individueller_Nutzer: '',
  Studienteilnahme_verbundene_Belastungen_und_Risiken: '',
  Statement_zur_ärztlichen_Vertretbarkeit: '',
  Forschungdaten_in_den_Behandlungskontext: '',
  Erläuterung:''
})
const Forschungdaten_in_den_Behandlungskontext = [
  { label: 'Ja', value: 'folgende' },
  { label: 'Nein', value: 'Keine' }
]
const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Datenschutz_massnahmen'})
  }
  store.set_nutzenRisiko(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Nutzen-Risiko-Abwägung</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"      
 >
 <h2><strong>Rechtfertigung des Zugriffs auf personenbezogene Daten</strong></h2>
 <br>
 <div class="textfelddiv">
      <label for="Fragestellung_der_Studie">Fragestellung der Studie:<span class="text-red-300">*</span></label>
 <FormKit
      type="textarea"
      name="Fragestellung_der_Studie"
      v-model="state.Fragestellung_der_Studie"
      rows="8"
      placeholder="Fragestellung der Studie"
      validation="required"
    />
 </div>
  <FormKit 
     type="textarea" 
     placeholder="anderer Nutzer"
     name="anderer_Nutzer"
     v-model="state.anderer_Nutzer"
     label="Falls ein anderer Nutzer erzielt wird, bitte hier spezifizieren: "
     rows="8"
     />
     <br>
 <h2><strong>Nutzen-Risiko-Abwägung</strong></h2>
 <br>
 <div class="textfelddiv">
      <label for="Studienteilnahme_verbundener_individueller_Nutzen">Ethische Nutzen-Risiko-Abwägung das mit der Studienteilnahme verbundenen individuellen Nutzens<span class="text-red-300">*</span></label>
               <FormKit 
                  type="textarea" 
                  name="Studienteilnahme_verbundener_individueller_Nutzer" 
                  v-model="state.Studienteilnahme_verbundener_individueller_Nutzer"
                  rows="8" 
                  placeholder="mit der Studienteilnahme verbundener individueller Nutzen "
                  validation=" required" 
                /> 
                </div>
                <div class="textfelddiv">
      <label for="Studienteilnahme_verbundene_Belastungen_und_Risiken ">Ethische Nutzen-Risiko-Abwägung der mit der Studienteilnahme verbundenen Belastungen und Risiken<span class="text-red-300">*</span></label>
               <FormKit 
                  type="textarea" 
                  name="Studienteilnahme_verbundene_Belastungen_und_Risiken " 
                  v-model="state.Studienteilnahme_verbundene_Belastungen_und_Risiken"
                  placeholder="mit der Studienteilnahme verbundene Belastungen und Risiken " 
                  rows="8"
                  validation=" required" 
                  />
                  </div>
                  <div class="textfelddiv">
      <label for="Statement_zur_ärztlichen_Vertretbarkeit">Ethische Nutzen-Risiko-Abwägung. Statement zur ärztlichen Vertretbarkeit<span class="text-red-300">*</span></label>
                  <FormKit 
                  type="textarea" 
                  name="Statement_zur_ärztlichen_Vertretbarkeit" 
                  v-model="state.Statement_zur_ärztlichen_Vertretbarkeit"
                  placeholder="Statement zur ärztlichen Vertretbarkeit" 
                  rows="8"
                  validation=" required" 
                  />
                  </div>
                  <div class="textfelddiv border p-4 rounded">
      <label for="Forschungdaten_in_den_Behandlungskontext">Werden Forschungdaten in den Behandlungskontext zurückgegeben?<span class="text-red-300">*</span></label>
                  <FormKit
                    type="radio"
                    name="Forschungdaten_in_den_Behandlungskontext"
                    v-model="state.Forschungdaten_in_den_Behandlungskontext"
                    :options="Forschungdaten_in_den_Behandlungskontext"
                   />
                   </div>
                   <FormKit 
                  type="textarea" 
                  name="Erläuterung" 
                  placeholder="Erläuterung" 
                  v-model="state.Erläuterung"
                  label="wenn ja, Erläuterung eingeben"
                  rows="8"
                  validation="required"
                  v-if="value.Forschungdaten_in_den_Behandlungskontext == 'ja'"
                  />
         
                  <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
    
</FormKit> 
</template>