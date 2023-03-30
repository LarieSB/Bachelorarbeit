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
import {useNichtidDaten} from '@/store';

const store = useNichtidDaten()
// store.set_NichtidDaten(value)
console.log("ici", store)



const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Bezeichnung:'',
  Spezifizierung:'',
  Woher_stammen_die_Daten:'',
  Wo_genau:'',
  Wer_erhebt:''
})

const SubmitForm = () => {
  store.set_nichtidDaten(state)
}

console.log("state", state)
</script>

<template>
  <h1 style="font-size: 29px;">Add Nicht-Identifizierende Daten</h1>
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
      v-model="state.Bezeichnung"
      placeholder="Enter Bezeichnung"
      validation="required"
    />
    </div>
    <div class="grid md:grid-cols-2 gap-10 mb-4">
    <div class="textfelddiv">
      <label for="Spezifizierung">Spezifizierung<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Spezifizierung"
      v-model="state.Spezifizierung"
      placeholder="z.B. Erster Wert bei Aufnahme"
      rows="8"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Woher_stammen_die_Daten">Woher stammen die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name="Woher_stammen_die_Daten"
      v-model="state.Woher_stammen_die_Daten"
      rows="8"
      placeholder="z.B. ORBIS, Metavision"
      validation="required"
    />
    </div>
    
    <div class="textfelddiv">
      <label for="Wo_genau">Wo genau finden sich die Daten?<span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name=" Wo_genau "
      v-model="state.Wo_genau"
      placeholder="z.B. Arztbrief, OP-Bericht, Laborwert"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Wer_erhebt">Wer erhebt die Daten? <span class="text-red-300">*</span></label>
    <FormKit
      type="textarea"
      name=" Wer_erhebt "
      v-model="state.Wer_erhebt"
      placeholder="z.B. DIZ, Studienpersonal"
      validation="required"
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