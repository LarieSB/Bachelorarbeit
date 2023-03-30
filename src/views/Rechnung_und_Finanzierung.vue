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
import {useRechnung} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useRechnung()
// store.set_Rechnung(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Abrechnung_des_Ethik_Antrages:'',
  Rechnungsadresse: '',
  Abrechnung_des_Datenantrages: '',
  Angaben_zur_externen_Finanzierung: '',
  Finanzierung_der_Studie: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Nutzen_Risiko_abwägung'})
  }
  store.set_rechnung(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Rechnung und Finanzierung</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"      
 >
 <h2><strong>Abrechnung des Ethik-Antrages</strong></h2>
 
<div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Ethik: Bitte beachten Sie hierzu auch die Gebührenordnung auf der Homepage der Ethik-Kommission. Bei Abrechnung über die Kostenstelle bzw. Drittmittelauftragsnummer wird eine interne Gebührenrechnung erstellt. Die Mitteilung der Kostenstelle erfolgt durch Sie an die Hauptbuchhaltung. (per E-Mail unter Angabe der Rechnungsnummer)">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Abrechnung_des_Ethik-Antrages">Abrechnung des Ethik-Antrages:<span class="text-red-300">*</span></label>
      </li>
 <FormKit
  type="radio"
  name="Abrechnung_des_Ethik_Antrages"
  v-model="state.Abrechnung_des_Ethik_Antrages"
  :options="['Abrechnung über eine Kostenstellen- bzw. eine Drittmittelauftragsnummer des Klinikums der Universität Frankfurt', 'Die Gebühr wird per Rechnung von einem Dritten durch Banküberweisung beglichen']"
  validation="required"
/>
</div>
<div class="textfelddiv" v-if="value.Abrechnung_des_Ethik_Antrages== 'Die Gebühr wird per Rechnung von einem Dritten durch Banküberweisung beglichen'" >
  <label for="Rechnungsadresse">Bitte geben Sie eine Rechnungsadresse an<span class="text-red-300">*</span></label>
<FormKit
      type="textarea"
      name="Rechnungsadresse"
      v-model="state.Rechnungsadresse"
      rows="8"
      placeholder="Enter Rechnungsadresse"
      validation="required"
          />
  </div>
<br/>
    <h2><strong>Abrechnung des Datenantrages</strong></h2>
    <br/>
       
      <div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Für eventuell anfallende Gebühren beachten Sie bitte die Gebührenordnung des Datenintegrationszentrums.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Abrechnung_des_Datenantrages">Abrechnung des Datenantrages<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="textarea"
      name="Abrechnung_des_Datenantrages"
      v-model="state.Abrechnung_des_Datenantrages"
      rows="8"
      placeholder="Enter Rechnungsadresse"
      validation="required"
    />
    </div>
    <div class="textfelddiv border p-4 rounded">
      <label for="Finanzierung_der_Studie">Finanzierung der Studie durch:<span class="text-red-300">*</span></label>
    <FormKit
type="radio"
name="Finanzierung_der_Studie"
v-model="state.Finanzierung_der_Studie"
:options="['Eigenmittel der Abteilung', 'Externe Finanzierung']"
validation="required"
/>
  </div>
<br>
<div class="textfelddiv" v-if="value.Finanzierung_der_Studie == 'Externe Finanzierung' ">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte geben Sie an, wer die Studie fördert. (ggf. auch das Förderkennzeichen)">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Angaben_zur_externen_Finanzierung">Angaben zur externen Finanzierung<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="textarea"
      name="Angaben_zur_externen_Finanzierung"
      v-model="state.Angaben_zur_externen_Finanzierung"
      rows="8"
      placeholder="Enter Angaben zur externen Finanzierung"
      validation="required"
    />
  </div>
  
  
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
   
</FormKit> 
</template>