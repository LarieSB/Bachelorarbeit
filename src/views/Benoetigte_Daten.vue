<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import add_id_Daten from './add_id_Daten.vue';
import add_nicht_id_Daten from './add_nicht_id_Daten.vue';
import Add_externe_Daten from './Add_externe_Daten.vue';
import { ref, reactive } from 'vue'
import {useBenötigte} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()

const date_rule = [['date_before', new Date(Date.now())]]


const state = reactive({
  idDaten: JSON.parse(localStorage.getItem('IDDaten')),
  nichtidDaten: JSON.parse(localStorage.getItem('nichtidDaten')),
  externeDaten: JSON.parse(localStorage.getItem('externeDaten'))
})

const store= useBenötigte()
const SubmitForm = () => {
 store.set_benötigte(state)
 if(store.status==true){
      router.push({name: 'Einwilligung'})
 }}


</script>

<template>
  <h1 style="font-size: 29px;">Benötigte Daten</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"    
 >
 
<label for="betroffenen_Personen1">Personenbezogene identifizierende Daten<span class="text-red-300">*</span></label>
 <br>
 <add_id_Daten/>
 <br>   
<br>
<br>
<label for="betroffenen_Personen1">Nicht-Identifizierende Daten<span class="text-red-300">*</span></label>
<br>
<add_nicht_id_Daten/>
<br>
<br>
<br>
<label for="betroffenen_Personen1">Externe Daten<span class="text-red-300">*</span></label>
<br>
<Add_externe_Daten/>

<br>  
<br>  
<FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
   
</FormKit>  

</template>