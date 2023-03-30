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
import {useHintergrund} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useHintergrund()
// store.set_Charakterisierung(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Hintergrund:'',
  Fragestellung_der_Studie: '',
  Primäre_Ziele: '',
  Sekundäre_Ziele: '',
  primäre_Zielgröße: '',
  sekundäre_Zielgröße: '',
  Begründung_der_Machbarkeit: '',
  Mögliche_Schlussfolgerungen: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Fallzahlen_und_Biometrie'})
  }
  store.set_hintergrund(state)
}

console.log("state", state)

</script>

<template>
  <h1 style="font-size: 29px;">Wissenschaftlicher Hintergrund und Ziele</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"     
 >
 

 <div class="grid md:grid-cols-2 gap-10">
  <div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte geben Sie maximal xx Literaturstellen an.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Hintergrund">Wissenschaftlicher Hintergrund <span class="text-red-300">*</span></label>
      </li>
 <FormKit
     type="textarea"
     name="Hintergrund"
     v-model="state.Hintergrund"
     rows="8"
     placeholder="Enter Project Hintergrund(Stand der Forschung (mit Literaturangaben) und Ableitung der Fragestellung (Rationale))"
     validation="required"
 />
 </div>
 <div class="textfelddiv">
      <label for="Fragestellung_der_Studie">Fragestellung der Studie<span class="text-red-300">*</span></label>
 <FormKit
     type="textarea"
     name="Fragestellung_der_Studie"
     v-model="state.Fragestellung_der_Studie"
     rows="8"
     placeholder="Enter Fragestellung der Studie"
     validation="required"
 />
 </div>
 <div class="textfelddiv">
      <label for="Primäre_Ziele">Primäre Ziele<span class="text-red-300">*</span></label>
 <FormKit
            type="textarea"
            name="Primäre_Ziele"
            v-model="state.Primäre_Ziele"
            rows="8"
            placeholder="Enter Project Primäre Ziele"
            validation="required"
          />
          </div>
          <div class="textfelddiv">
      <label for="Sekundäre_Ziele">Sekundäre Ziele<span class="text-red-300">*</span></label>
          <FormKit
            type="textarea"
            name="Sekundäre_Ziele"
            v-model="state.Sekundäre_Ziele"
            rows="8"
            placeholder="Enter Project Sekundäre Ziele"
            validation="required"
          />
</div>
<div class="textfelddiv">
      <label for="primäre_Zielgröße">Primäre Zielgröße<span class="text-red-300">*</span></label>
          <FormKit
            type="textarea"
            name="primäre_Zielgröße"
            v-model="state.primäre_Zielgröße"
            rows="8"
            placeholder="Enter Project Primäre Zielgröße"
            validation="required"
          />
          </div>
          <div class="textfelddiv">
      <label for="sekundäre_Zielgröße">Sekundäre Zielgröße<span class="text-red-300">*</span></label>
          <FormKit
            type="textarea"
            name="sekundäre_Zielgröße"
            v-model="state.sekundäre_Zielgröße"
            rows="8"
            placeholder="Enter Project Sekundäre Zielgröße"
            validation="required"
          />
          </div>
    
<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte geben Sie an, warum die Studie mit den geplanten Daten machbar ist. (z.B. Es werden für die Studie lediglich Daten genutzt, die bereits im Behandlungskontext erhoben wurden. oder Die zusätzlich benötigten Daten für die Studie werden vom Studienpersonal erhoben).">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Begründung_der_Machbarkeit">Begründung der Machbarkeit: <span class="text-red-300">*</span></label>
      </li>
          <FormKit
            type="textarea"
            name="Begründung_der_Machbarkeit"
            v-model="state.Begründung_der_Machbarkeit"
            rows="8"
            placeholder="Enter Begründung der Machbarkeit"
            validation="required"
          />
    </div>

<div class="textfelddiv">
      <li class="list-none flex gap-1">
        <Popper arrow content="Bitte geben Sie an, was Sie bei der Studie als Schlussfolgerung erwarten.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Mögliche_Schlussfolgerungen">Mögliche Schlussfolgerungen: <span class="text-red-300">*</span></label>
      </li>
          <FormKit
            type="textarea"
            name="Mögliche_Schlussfolgerungen"
            v-model="state.Mögliche_Schlussfolgerungen"
            rows="8"
            placeholder="Enter Mögliche Schlussfolgerungen"
            validation="required"
          />
        </div>
        </div>
        <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
   
</FormKit>  
</template>