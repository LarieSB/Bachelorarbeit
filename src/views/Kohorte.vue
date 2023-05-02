<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { ref, reactive } from 'vue'
import {useKohorte} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useKohorte()



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  betroffenen_Personen1:'',
  Sonstige_Spezifizierung: '',
  betroffenen_Personen2: '',
  Zeitraum_der_Datenerfassung: '',
  Definitionskriterien: '',
  Einschlusskriterien: '',
  Ausschlusskriterien: '',
  Rektrutierungsmaßnahmen: '',
  zeitlicher_Ablauf: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Benoetigte Daten'})
  }
  store.set_kohorte(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Kohorte</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"  
 >
 <div class="textfelddiv border p-4 rounded">
      <label for="betroffenen_Personen1">Bei den betroffenen Personen handelt es sich um<span class="text-red-300">*</span></label>
 <FormKit
type="checkbox"
name="betroffenen_Personen1"
v-model="state.betroffenen_Personen1"
:options="['Patient*innen', 'Angehörige','medizinisches Personal', 'Sonstige']"
validation="required"
/>
<FormKit
      type="text"
      name=" Sonstige_Spezifizierung"
      placeholder="Spezifizierung angeben"
      v-model="state.Sonstige_Spezifizierung"
      label="Bitte Spezifizierung angeben"
      validation="required"
      v-if="value.betroffenen_Personen1=='Sonstige'"
    />
  </div> 
  <div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Wenn Minderjährige eingeschlossen werden, beachten Sie bitte, dass es für alle Zielgruppen der Vorlage einer separaten Information bedarf.
  Wenn nicht-Einwilligungsfähige eingeschlossen werden, beachten Sie bitte, dass es für alle Zielgruppen der Vorlage einer separaten Information bedarf.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="betroffenen_Personen2">Bei den betroffenen Personen handelt es sich um<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="checkbox"
      name="betroffenen_Personen2"
      v-model="state.betroffenen_Personen2"
      :options="['Erwachsene', 'Kinder','nicht Einwilligungsfähige']"
       validation="required"
    />
    </div>
    
<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte geben Sie hier genau die Definition des Zeitraums der Datenerfassung an: z.B. 'alle Patienten von xx bis xx. Das Datum bezieht sich auf den Aufnahmezeitpunkt.'">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Zeitraum_der_Datenerfassung">Zeitraum der Datenerfassung:<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="textarea"
      name="Zeitraum_der_Datenerfassung"
      v-model="state.Zeitraum_der_Datenerfassung"
      rows="8"
      placeholder="Zeitraum der Datenerfassung:"
      validation="required"
    />
    </div>
    <br>
    <h3><strong>Kohorte und Ein- und Ausschlusskriterien</strong></h3>
    <br><br>
    <div class="grid md:grid-cols-2 gap-10">
      <div class="textfelddiv">
      <label for="Definitionskriterien">Die Kohorte ist folgendermaßen definiert<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Definitionskriterien"
      v-model="state.Definitionskriterien"
      rows="8"
      placeholder="Definitionskriterien"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Einschlusskriterien">Folgende Einschlusskriterien sind definiert<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Einschlusskriterien"
      v-model="state.Einschlusskriterien"
      rows="8"
      placeholder="Einschlusskriterien"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Ausschlusskriterien">Folgende Ausschlusskriterien sind definiert<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Ausschlusskriterien"
      v-model="state.Ausschlusskriterien"
      rows="8"
      placeholder="Ausschlusskriterien"
      validation="required"
    />
    </div>
   
<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Wo und wie werden die Teilnehmer rekrutiert? Bei retrospektiven Studien: z.B. Erstellung der Kohorte durch das Datenintegrationszentrum">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Rektrutierungsmaßnahmen">Rektrutierungsmaßnahmen<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="textarea"
      name="Rektrutierungsmaßnahmen"
      v-model="state.Rektrutierungsmaßnahmen"
      rows="8"
      placeholder="Rektrutierungsmaßnahmen"
      validation="required"
    />
    </div>
    <FormKit
      type="textarea"
      name="zeitlicher_Ablauf"
      v-model="state.zeitlicher_Ablauf"
      label="Falls zutreffend: zeitlicher Ablauf (Termine) für den einzelnen Studienteilnehmer"
      rows="8"
      placeholder="zeitlicher Ablauf"
    />
  </div>
  <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
    
</FormKit>  
  
</template>