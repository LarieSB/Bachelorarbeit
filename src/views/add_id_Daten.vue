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
import {useIDDaten} from '@/store';

const store = useIDDaten()
// store.set_ExterneDaten(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Bezeichnung:'',
  Begründung1:'',
  Woher_stammen_die_Daten:'',
  Wer_erhebt:''
})

const SubmitForm = () => {
  store.set_iDDaten(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Add Identifizierende Daten</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"   
 >
 
    <div class="textfelddiv">
      <label for="Bezeichnung">Bezeichnung <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Bezeichnung"
      placeholder="Enter Bezeichnung"
      validation="required"
      v-model="state.Bezeichnung"
    />
    </div>
    <div class="grid md:grid-cols-2 gap-10 mb-4">
    <div class="textfelddiv">
      <label for="Begründung1">Begründung, wofür die identifizierenden Daten benötigt werden<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Begründung1"
      placeholder="Enter Begründung, wofür die identifizierenden Daten benötigt werden"
      rows="8"
      validation="required"
      v-model="state.Begründung1"
    />
    </div>
    <div class="textfelddiv">
      <label for="Woher_stammen_die_Daten">Woher stammen die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Woher_stammen_die_Daten"
      rows="8"
      placeholder="z.B. ORBIS, Metavision"
      validation="required"
      v-model="state.Woher_stammen_die_Daten"
    />
    </div>
    
    <div class="textfelddiv">
      <label for="Wer_erhebt">Wer erhebt die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name=" Wer_erhebt "
      placeholder="z.B. DIZ, Studienpersonal"
      validation="required"
      v-model="state.Wer_erhebt"
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