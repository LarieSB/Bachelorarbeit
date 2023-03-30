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
import {useInstitution} from '@/store';

const store = useInstitution()
// store.set_NichtidDaten(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Name2:'',
  Abteilung:'',
  Telefonnummer2:'',
  Straße2:'',
  Ort2:'',
  Postleitzahl2:'',
  Fachabteilung:'',
  Sonstige_Fachabteilung:'',
  Schwerpunkt:'',
  Sonstige_Schwerpunkt:''
})

const SubmitForm = () => {
  store.set_institution(state)
}

console.log("state", state)

const Fachabteilung = [
  { label: 'Herzchirurgie', value: 'Herzchirurgie' },
  { label: 'Kardiologie', value: 'Kardiologie' },
  { label: 'Kinder- und Jugendpsychiatrie', value: 'Kinder- und Jugendpsychiatrie' },
  { label: 'Zahn- und Kieferheilkunde, Mund- und Kieferchirurgie', value: 'Zahn- und Kieferheilkunde, Mund- und Kieferchirurgie' },
  { label: 'Dermatologie', value: 'Dermatologie' },
  { label: 'Endokrinologie', value: 'Endokrinologie' },
  { label: 'Gastroenterologie', value: 'Gastroenterologie' },
  { label: 'Allgemeine Psychiatrie', value: 'Allgemeine Psychiatrie' },
  { label: 'Allgemeine Chirurgie', value: 'Allgemeine Chirurgie' },
  { label: 'Geriatrie', value: 'Geriatrie' },
  { label: ' Frauenheilkunde und Geburtshilfe', value: ' Frauenheilkunde und Geburtshilfe' },
  { label: 'Hämatologie und internistische Onkologie ', value: 'Hämatologie und internistische Onkologie ' },
  { label: 'Intensivmedizin', value: 'Intensivmedizin' },
  { label: 'Innere Medizin', value: 'Innere Medizin' },
  { label: 'Neonatologie', value: 'Neonatologie' },
  { label: 'Nephrologie', value: 'Nephrologie' },
  { label: 'Neurologie', value: 'Neurologie' },
  { label: 'Nuklearmedizin', value: 'Nuklearmedizin' },
  { label: 'Geburtshilfe', value: 'Geburtshilfe' },
  { label: 'Augenheilkunde', value: 'Augenheilkunde' },
  { label: 'Orthopädie', value: 'Orthopädie' },
  { label: 'Sonstige Fachabteilung', value: 'Sonstige Fachabteilung' },
  { label: ' Hals-, Nasen-, Ohrenheilkunde', value: ' Hals-, Nasen-, Ohrenheilkunde' },
  { label: 'Kinderkardiologie', value: 'Kinderkardiologie' },
  { label: 'Kinderchirurgie', value: 'Kinderchirurgie' },
  { label: 'Pädiatrie', value: 'Pädiatrie' },
  { label: 'Plastische Chirurgie', value: 'Plastische Chirurgie' },
  { label: 'Pneumologie', value: 'Pneumologie' },
  { label: 'Psychosomatik/Psychotherapie', value: 'Psychosomatik/Psychotherapie' },
  { label: 'Lungen- und Bronchialheilkunde', value: 'Lungen- und Bronchialheilkunde' },
  { label: 'Strahlenheilkunde', value: 'Strahlenheilkunde' },
  { label: 'Rheumatologie', value: 'Rheumatologie' },
  { label: 'Thoraxchirurgie', value: 'Thoraxchirurgie' },
  { label: 'Unfallchirurgie', value: 'Unfallchirurgie' },
  { label: ' Urologie', value: ' Urologie' },
  { label: 'Gefäßchirurgie', value: 'Gefäßchirurgie' },
]   
const Schwerpunkt = [
  { label: 'Suchtbehandlung', value: 'Suchtbehandlung' },
  { label: 'Angiologie', value: 'Angiologie' },
  { label: 'Coloproktologie', value: 'Coloproktologie' },
  { label: 'Diabetes', value: 'Diabetes' },
  { label: 'Geriatrie', value: 'Geriatrie' },
  { label: 'Handchirurgie', value: 'Handchirurgie' },
  { label: 'Infektionskrankheiten', value: 'Infektionskrankheiten' },
  { label: 'Naturheilkunde', value: 'Naturheilkunde' },
  { label: 'Nephrologie', value: 'Nephrologie' },
  { label: 'Schmerztherapie', value: 'Schmerztherapie' },
  { label: 'Palliativmedizin', value: 'Palliativmedizin' },
  { label: 'Kinderneurologie', value: 'Kinderneurologie' },
  { label: 'Perinatalmedizin', value: 'Perinatalmedizin' },
  { label: 'Wirbelsäulenchirurgie', value: 'Wirbelsäulenchirurgie' },
  { label: 'Schlaganfallpatienten', value: 'Schlaganfallpatienten' },
  { label: 'Tumorforschung', value: 'Tumorforschung' },
  { label: 'Sonstige_Schwerpunkt', value: 'Sonstige Schwerpunkt' },
]         
</script>

<template>
  <h1 style="font-size: 29px;">Add Beteiligte Institution</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false" 
 >
 <div class="grid md:grid-cols-2 gap-10 mb-4">
    <div class="textfelddiv">
      <label for="Name2">Name <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Name2"
      v-model="state.Name2"
      placeholder="Enter Name"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Abteilung">Abteilung <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Abteilung"
      v-model="state.Abteilung"
      placeholder="Enter Abteilung"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Telefonnummer2">Telefonnummer <span class="text-red-300">*</span></label>
    <FormKit
      type="number"
      name="Telefonnummer2"
      v-model="state.Telefonnummer2"
      placeholder="Enter Telefonnummer"
      validation="required"
    />
    </div>
    
    <div class="textfelddiv">
      <label for="Straße2">Straße & Hausnummer <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Straße2"
      v-model="state.Straße2"
      placeholder="Enter Straße"
      validation="required"
    />
    </div>
    
    <div class="textfelddiv">
      <label for="Ort2">Ort <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Ort2"
      v-model="state.Ort2"
      placeholder="Enter Ort"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Postleitzahl2">Postleitzahl <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Postleitzahl2"
      v-model="state.Postleitzahl2"
      placeholder="Enter Postleitzahl"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Fachabteilung">Fachabteilung <span class="text-red-300">*</span></label>
    <FormKit
    type="select"
    name="Fachabteilung"
    v-model="state.Fachabteilung"
    placeholder="Enter Fachabteilung"
    :options="Fachabteilung"
  />
  </div>
  <div>
  <div class="textfelddiv" >
      <label for="Sonstige_Fachabteilung">Sonstige Fachabteilung <span class="text-red-300">*</span></label>
      <FormKit
      type="text"
      name="Sonstige_Fachabteilung"
      v-model="state.Sonstige_Fachabteilung"
      placeholder="Enter Sonstige Fachabteilung"
      visibitity="false"
    />
  </div>
</div>
  <div class="textfelddiv">
      <label for="Schwerpunkt">Schwerpunkt <span class="text-red-300">*</span></label> 
  <FormKit
      type="select"
      name="Schwerpunkt"
      v-model="state.Schwerpunkt"
      placeholder="Enter Schwerpunkt"
      :options="Schwerpunkt"
    />
  </div>
    <div class="textfelddiv">
      <label for="Sonstige_Schwerpunkt">Sonstige Schwerpunkt <span class="text-red-300">*</span></label>
  <FormKit
      type="text"
      name="Sonstige_Schwerpunkt"
      v-model="state.Sonstige_Schwerpunkt"
      placeholder="Enter Sonstige Schwerpunkt"
    />
  </div>
    </div>
    <br>
    <FormKit type="button" @click="SubmitForm" label="Submit Application" />
    <div>
    <h2>Erfolgreich übermittelt</h2>
    <button type="button" >Weiter</button>
    <!-- {{ store. }} -->
    </div> 
    
</FormKit>  
</template>