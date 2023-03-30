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
import {useDatenschutz} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useDatenschutz()
// store.set_Datenschutz(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  anonymisierten_oder_pseudonymisierten:'',
  Verzeichnisse_Datenspeicherung: '',
  Daten_erfassten: '',
  Daten_extern: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Nutzungsordnung'})
  }
  store.set_datenschutz(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Datenschutz Maßnahmen</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"    
 >
 <div class="textfelddiv">
      <label for="anonymisierten_oder_pseudonymisierten">Wie weit kann mit anonymisierten oder pseudonymisierten Daten gearbeitet werden bzw. bei welchen Verarbeitungsprozessen ist ein expliziter Personenbezug unvermeidbar ?<span class="text-red-300">*</span></label>
 <FormKit
      type="textarea"
      name="anonymisierten_oder_pseudonymisierten"
      v-model="state.anonymisierten_oder_pseudonymisierten"
      rows="8"
      placeholder="Wie weit kann mit anonymisierten oder pseudonymisierten Daten gearbeitet werden bzw. bei welchen Verarbeitungsprozessen ist ein expliziter Personenbezug unvermeidbar ?"
      validation="required"
    /> 
    </div>
    <div class="textfelddiv">
      <label for="Verzeichnisse_Datenspeicherung">Welche Verzeichnisse werden für die Datenspeicherung genutzt<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Verzeichnisse_Datenspeicherung"
      v-model="state.Verzeichnisse_Datenspeicherung"
      rows="8"
      placeholder="Welche Verzeichnisse werden für die Datenspeicherung genutzt"
      validation="required"
    /> 
    </div>
    <div class="textfelddiv">
      <label for="Daten_erfassten">Wie werden die Daten erfasst?<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Daten_erfassten"
      v-model="state.Daten_erfassten"
      rows="8"
      placeholder="Erfassung, Speicherung (Art, Ort, Dauer) und Weitergabe von Daten, 
Gewährleistung der Datensicherheit?"
      validation="required"
    /> 
    </div>
    <div class="textfelddiv">
      <label for="Daten_extern">Welche Daten werden nach extern weitergebeben?<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Daten_extern"
      v-model="state.Daten_extern"
      rows="8"
      placeholder="Externe Daten Daten"
      validation="required"
    /> 
    </div>
    <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
    
</FormKit>
</template>
