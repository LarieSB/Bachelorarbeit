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
import {useEinwilligung} from '@/store';

const store = useEinwilligung()
// store.set_Einwilligung(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Einwilligung:'',
  Verfahrens_zur_Einholung: '',
})

const SubmitForm = () => {
  store.set_einwilligung(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Einwilligung</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"
 >

<div class="textfelddiv border p-4 rounded">
      <li class="list-none flex gap-1">
        <Popper arrow content="Erkundigen Sie sich ggf. bei der Ethik-Kommission, für welche Studien Sie eine Einwilligung benögtigen.">
      <li>
        <i class="fa-solid fa-circle-info"></i>
      </li>
      </Popper>
      <label for="Einwilligung">Wird für die Studie eine Einwilligung der Betroffenen eingeholt?<span class="text-red-300">*</span></label>
      </li>
 <FormKit
  type="radio"
  name="Einwilligung"
  v-model="state.Einwilligung"
  :options="['ja', 'nein']"
  validation="required"
  />
  <FormKit 
    type="textarea" 
    name="Verfahrens_zur_Einholung" 
    placeholder="Beschreibung des Verfahrens zur Einholung der Einwilligung" 
    v-model="state.Verfahrens_zur_Einholung"
    label="Beschreibung des Verfahrens zur Einholung der Einwilligung"
    rows="8" 
    v-if="value.Einwilligung == 'ja'"
    />
  </div>
  
  <br>
    <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
    
</FormKit>  
</template>