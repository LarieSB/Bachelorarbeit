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
import {useFallzahlen} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useFallzahlen()
// store.set_Fallzahlen(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Daten_Format3:'',
  Statistische_auswertung: '',
  Mittel: '',
  Person: '',
  ort2: '',
  statistische_auswertung2: '',
  Fallzahlen: '',
  Angaben_zur_Biometrie: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Kohorte'})
  }
  store.set_fallzahlen(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Fallzahlen und Biometrie</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"    
 >
 
    <div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Erläuterung zur statistischen Methodik">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Mögliche_Schlussfolgerungen"><h3><strong>Statistische Auswertung</strong></h3></label>
      </li>
      </div>
      <br>
      <div class="textfelddiv">
      <label for="Daten_Format3">Die Daten werden vor der Weitergabe an den Statistiker für die Auswertung in folgendes Format
        transformiert:<span class="text-red-300">*</span></label>  
    <FormKit
      type="text"
      name=" Daten_Format3 "
      v-model="state.Daten_Format3"
      placeholder="zum Beispiel SPSS,R , …"
      validation="required"
    />
    </div><br>
    <div class="textfelddiv">
      <label for="Statistische_auswertung">Die statistische Auswertung der Daten erfolgt im:<span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Statistische_auswertung"
      v-model="state.Statistische_auswertung"
      placeholder="WiNet oder auf dem Server von …"
      validation="required"
    />
    </div><br>
    <div class="textfelddiv">
      <label for="Mittel">Hierfür werden die pseudonymisierten medizinischen Daten mittels:<span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Mittel"
      v-model="state.Mittel"
      placeholder="zum Beispiel ZIVVER, UKF-Cloud, … "
      validation="required"
    />
    </div><br>
    <div class="textfelddiv">
      <label for="Person">an<span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Person"
      v-model="state.Person"
      placeholder="Wer erhält die Daten (Name, ggf. Firma des Statistikers),Wo liegen diese Daten"
      validation="required"
    />
    <label>übertragen.Die Pseudonymtabelle darf keinesfalls mit übertragen werden.</label>
    </div><br>
    
    <div class="textfelddiv">
      <label for="ort2">Die Daten werden unmittelbar nach Übertragung aus der<span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="ort2"
      v-model="state.ort2"
      placeholder="Zum Beispiel UKF Cloud , ZIVVER ,… "
      validation="required"
    />
    <label>in dem Übertragungsmedium gelöscht.</label>
    </div><br>
    
    <div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte Verzeichnis oder Server oder etc. beschreiben, die für die Speicherung der Daten relevant sind">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="statistische_auswertung2">Die Daten werden für die statistische Auswertung folgendermaßen gespeichert<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="textarea"
      name=" statistische_auswertung2 "
      v-model="state.statistische_auswertung2"
      rows="8"
      placeholder="massnahmen zur Speicherung "
      validation="required"
    />
    </div><br>
 
<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bei retrospektiven Studien: Wenn Sie die Anzahl der Patienten nicht selbst abschätzen können, können Sie diese vom Datenintegrationszentrum in einem Machbarkeitsantrag ermitteln lassen.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Fallzahlen">Anzahl der Studienteilnehmer*innen bzw. erwartete Anzahl der Patient*innen(Fallzahlen)<span class="text-red-300">*</span></label>
      </li>
    <FormKit
      type="number"
      name="Fallzahlen"
      v-model="state.Fallzahlen"
      rows="8"
      placeholder="Fallzahlen"
      validation="required"
      />
    </div><br>
     
<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="1. konfirmatorische Studie: Fallzahlschätzung anhand der primären Zielgröße und der relevanten Effektstärke, geplante statistische Testverfahren.
2. explorative Studie: Erläuterung zur statistischen Methodik">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Angaben_zur_Biometrie">Angaben zur Biometrie<span class="text-red-300">*</span></label>
      </li>
      <FormKit
      type="textarea"
      name="Angaben_zur_Biometrie"
      v-model="state.Angaben_zur_Biometrie"
      rows="8"
      placeholder="Angaben zur Biometrie"
      validation="required"
      />
      </div>
      <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
   
</FormKit> 
</template>