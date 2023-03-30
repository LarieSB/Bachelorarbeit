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
import add_id_Daten from './add_id_Daten.vue';
import add_nicht_id_Daten from './add_nicht_id_Daten.vue';
import Add_externe_Daten from './Add_externe_Daten.vue';
import { ref, reactive } from 'vue'
import {useIDDaten} from '@/store';
import {useNichtidDaten} from '@/store';
import {useExterneDaten} from '@/store';
import Modal from './Modal.vue';

const date_rule = [['date_before', new Date(Date.now())]]
// NEW: submit handler, which posts to our fake backend.
const submitted = ref(false)
const viewModal1 =ref(false)
const viewModal2 =ref(false)
const viewModal3 =ref(false)

const store = useIDDaten()
// store.set_Einwilligung(value)
console.log("ici", store)

const store1 = useNichtidDaten()
// store.set_Einwilligung(value)
console.log("ici", store1)

const store2 = useExterneDaten()
// store.set_Einwilligung(value)
console.log("ici", store2)

</script>

<template>
  <h1 style="font-size: 29px;">Benötigte Daten</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"    
 >
 
<label for="betroffenen_Personen1">Personenbezogene identifizierende Daten<span class="text-red-300">*</span></label>
 <br>
 <button class="foo bar" type="button" @click="viewModal1 = true">add new identifizierende Daten</button>
<table>
        <tr>
          <th>#</th>
          <th>Bezeichnung</th>
          <th>Begründung</th>
          <th>Woher stammen die Daten</th>
          <th>Woher stammen die Daten</th>
          <th>Remove</th>
        </tr>
        <tr v-for="(item, index) in storeIDDaten.get_iDDaten" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.Bezeichnung }}</td>
          <td>{{ item.Begründung }}</td>
          <td>{{ item.Woher_stammen_die_Daten }}</td>
          <td>{{ item.Wer_erhebt}}</td>
          
          <td>
            <button type="button" @click="storeIDDaten.remove_iDDaten(index)">X</button>
          </td>
        </tr>

      </table> 
<Modal :show="viewModal1" @close="viewModal1 = false">
 <add_id_Daten/>
</Modal>
 <br>  
 
<br>
<br>
<label for="betroffenen_Personen1">Nicht-Identifizierende Daten<span class="text-red-300">*</span></label>
<br>
<button class="foo bar" type="button" @click="viewModal2 = true">add new Nicht-Identifizierende Daten</button>

<Modal :show="viewModal2" @close="viewModal2 = false">
 <add_nicht_id_Daten/>
</Modal>
<br>

<br>
<br>
<label for="betroffenen_Personen1">Externe Daten<span class="text-red-300">*</span></label>
<br>

<button class="foo bar" type="button" @click="viewModal3 = true">add new externe Daten</button>

<Modal :show="viewModal3" @close="viewModal3 = false">
 <Add_externe_Daten/>
</Modal>
<br> 

<br>  
<FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
   
</FormKit>  

</template>
