<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { ref, reactive } from 'vue'
import {useNichtidDaten} from '@/store';
import Modal from './Modal.vue';


const store = useNichtidDaten()





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
const open = ref(false)

const SubmitForm = () => {
  store.set_nichtidDaten(state)
  open.value = false;
  
}


</script>

<template>
  <div>
  <button class="foo bar mb-3" type="button" @click="open = true">add new Nicht-Identifizierende Daten</button>

  <Modal :show="open" @close="open = false">
    <div>
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
    
</FormKit>  
</div>
  </Modal>
  <table v-if="store.NichtidDaten">
    <tr>
      <th>#</th>
      <th>Bezeichnung</th>
      <th>Spezifizierung</th>
      <th>Woher_stammen_die_Daten</th>      
      <th>Wo genau</th>
      <th>Wer_erhebt</th>
      <th>Remove</th>
    </tr>
    <tr v-for="(item, index) in store.NichtidDaten" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ item.Bezeichnung }}</td>
      <td>{{ item.Spezifizierung }}</td>
      <td>{{ item.Woher_stammen_die_Daten }}</td>
      <td>{{ item.Wo_genau }}</td>
      <td>{{ item.Wer_erhebt }}</td>
      <td>
        <button type="button" @click="store.removeNichtidDaten(index)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
      </td>
    </tr>

  </table>
</div>
</template>