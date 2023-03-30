<!-- eslint-disable no-unused-vars -->

<script setup>
import { FormKit } from '@formkit/vue';
import { FormKitIcon } from '@formkit/vue'
import { camel2title, axios } from '@/_helpers/utils.js'
import useSteps from '@/_helpers/useSteps.js'
import { ref, reactive } from 'vue'
import {useCharakterisierung} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useCharakterisierung()
// store.set_Charakterisierung(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Studientyp_örtlich:'',
  Studientyp_zeitlich: '',
  Studientyp_qualitativ: '',
  studienbedingter_Strahlenbelastung: '',
  Versicherungsschutz: '',
  Studienregister: '',
  rein_retrospektive_Datenerhebung: '',
  Art_der_Einreichung: '',
  Versicherungsträger_Police_Nummer:''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Beteiligte Personen Institutionen'})
  }
  store.set_charakterisierung(state)
}

console.log("state", state)

</script>

<template>
  <h1 style="font-size: 29px;">Charakterisierung der Studie</h1>
  <FormKit  
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"  
 >
<!-- Hilfetext -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Monozentrisch = die Studie wird nur an einem Zentrum (z.B. hier an der Universitätsklinik) ausgeführt.   
Multizentrisch = es sind mehr Zentren (=Standorte) als lediglich die Universitätsklinik Frankfurt beteiligt.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Studientyp_örtlich">Studientyp (örtlich)<span class="text-red-300">*</span></label>
      </li>
<FormKit 
type="radio"
name="Studientyp_örtlich"
:options="['monozentrische','multizentrische']"
validation="required"
v-model="state.Studientyp_örtlich"
/>
</div>

<div class="textfelddiv border p-4 rounded" >
      <li class="list-none flex gap-1">
        <Popper arrow content="retrospektive Studie = Erfassungszeitraum der Daten liegt in der Vergangenheit bis zum Zeitpunkt der Einreichung.  
Prospektive Studie = Erfassungszeitraum der Daten liegt in der Zukunft ab Zeitpunkt der Einreichung">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Studientyp_zeitlich">Studientyp (zeitlich)<span class="text-red-300">*</span></label>
      </li>
<FormKit
type="radio"
name="Studientyp_zeitlich"
:options="['retrospektiv', 'prospektiv' , 'retrospektiv und prospektiv']"
validation="required"
v-model="state.Studientyp_zeitlich"
/>
<div class="textfelddiv" v-if="value.Studientyp_zeitlich=='prospektiv'">
      <li class="list-none flex gap-1">
        <Popper arrow content="Prospektive Studien müssen ein einem öffentlich zugänglichen Studienregister dokumentiert werden. Bitte wenden Sie sich hierfür auch an das Studienzentrum am UKF.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Studienregister">Name des Studienregister:(nur beim Prospektiv Studien)</label>
      </li>
<FormKit 
      type="text"
      name=" Studienregister"
      placeholder="Enter die Registrierung in einem öffentlich zugänglichen Studienregister"
      v-model="state.Studienregister"/>
</div>
</div>

  <div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Beobachtungsstudie = Datenerhebung von ausschließlich Routinedaten für die Forschung mit begrenztem Erfassungszeitraum.  
  Registerstudie = Datenerhebung von ausschließlich Routinedaten für die Forschung mit unbegrenztem Erfassungszeitraum.   
  Interventionsstudie = Datenerhebung mit studienbedingten Untersuchungen / Maßnahmen mit begrenztem Erfassungszeitraum.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Studientyp_qualitativ">Studientyp (qualitativ)<span class="text-red-300">*</span></label>
      </li>
    <FormKit
type="radio"
name="Studientyp_qualitativ"
:options="['Beobachtungsstudie', 'Registerstudie' , ' Interventionsstudie','anderer Studientyp']"
validation="required"
v-model="state.Studientyp_qualitativ"
/>
<FormKit
      type="text"
      name=" anderer_Studientyp"
      label="Anderer Studientyp eingeben"
      placeholder="Enter anderer Studientyp"
      v-if="value.Studientyp_qualitativ=='anderer Studientyp'"
      v-model="state.anderer_Studientyp"
    />
  </div>
  
<div class="textfelddiv border p-4 rounded" v-if="value.Studientyp_zeitlich=='retrospektiv' && value.Studientyp_qualitativ=='Beobachtungsstudie'">
      <li class="list-none flex gap-1">
        <Popper arrow content="Wird angekreuzt, wenn bei Studientyp (zeitlich) nur 'retrospektiv' und bei Studientyp (qualitativ) 'Beobachtungsstudie' angekreuzt wird.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="rein_retrospektive_Datenerhebung">Es handelt sich um eine rein retrospektive Datenerhebung<span class="text-red-300">*</span></label>
      </li>
      <div class="textfel flex items-center gap-2">
<FormKit
  type="radio"
  :options="['ja']"
    :value="['ja']"
      name="rein_retrospektive_Datenerhebung"
      validation="accepted"
      validation-visibility="dirty"
      v-model="state.rein_retrospektive_Datenerhebung"
/>
      </div>
</div>  
  
<div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Anwendung des Strahlenschutzgesetzes StrlSchG">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="studienbedingter_Strahlenbelastung">Handelt es sich um eine Studie mit studienbedingter Strahlenbelastung? <span class="text-red-300">*</span></label>
      </li>
    <FormKit
type="radio"
name="studienbedingter_Strahlenbelastung"
:options="['ja', 'nein']"
validation="required"
v-model="state.studienbedingter_Strahlenbelastung"
/>
</div>
<div class="textfelddiv border p-4 rounded">
      <label for="Versicherungsschutz">Besteht es ein Versicherungsschutz? <span class="text-red-300">*</span></label>
<FormKit
type="radio"
name="Versicherungsschutz"
:options="['ja', 'nein']"
validation="required"
v-model="state.Versicherungsschutz"
/>
<FormKit
      type="text"
      name="Versicherungsträger_Police_Nummer"
      label="wenn ja, Versicherungsträger und Police-Nummer:"
      placeholder="Enter Versicherungsträger und Police-Nummer"
      v-if="value.Versicherungsschutz=='ja'"
      v-model="state.Versicherungsträger_Police_Nummer"
    />
</div>
</div>
<FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
     
  </FormKit>
</template>