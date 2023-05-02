<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import add_institution from './add_institution.vue';
import Modal from './Modal.vue';
import { ref, reactive,  computed } from 'vue'
import {useBeteiligte} from '@/store';
import { useRouter } from 'vue-router';
import { useInstitution } from '@/store';

const router = useRouter()

const store = useBeteiligte()
const storeInstitution = useInstitution()


const viewModal =ref(false)


const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive ({
  Funktion_im_Projekt:'',
  Akademischer_Titel: '',
  Vorname: '',
  Nachname: '',
  E_Mail: '',
  Telefonnummer: '',
  Institution: '',
  Abteilung: '',
  Funktion_in_der_Abteilung: '',
})
const usersStorage = JSON.parse(localStorage.getItem('users'))
const institutionStorage = JSON.parse(localStorage.getItem('institution'))
console.log(institutionStorage)

const saveState = reactive({
  user: computed(() => usersStorage),
  institutions: computed(() => institutionStorage),
})
const dataPerson = ref([])
const dataValue2 = ref([])

const verifierSiEmailExist = () => {
  dataPerson.value.some((item) => item.E_Mail === state.E_Mail)
}
const add_person = () => {
  localStorage.setItem('users', JSON.stringify(state))
  const dataValue = JSON.parse(localStorage.getItem('users'))
  dataPerson.value.push(dataValue)
  localStorage.setItem('users', JSON.stringify(dataPerson.value))
  dataValue2.value = JSON.parse(localStorage.getItem('users'))
  console.log(dataValue2.value)
  return dataValue2.value
}

const remove_person = (index) => {
  dataPerson.value.splice(index, 1)
  // localStorage.removeItem()
}

const SubmitForm = () => {
  
  if(store.status === false){
    router.push({name: 'Wissenschaftlicher_Hintergrund_und_Ziele'})
  }
  store.set_beteiligte(saveState)
}



const position_in_der_Studie = [
  { label: 'Antragssteller*in', value: 'Antragssteller*in' },
  { label: 'Studienleiter*in', value: 'Studienleiter*in' },
  { label: 'Stellv. Studienleiter*in', value: 'Stellv. Studienleiter*in' },
  { label: 'Dienstvorgesetzte*r von Antragssteller*in', value: 'Dienstvorgesetzte*r von Antragssteller*in' },
  { label: 'Zuständig für Rückfragen von Seiten der Ethikkommission', value: 'Zuständig für Rückfragen von Seiten der Ethikkommission' },
  { label: 'Studienleitende Person für Deutschland (für Ethik-Zweitantrag)', value: 'Studienleitende Person für Deutschland (für Ethik-Zweitantrag)' },
  { label: 'Beteiligte*r Wissenschaftler*in', value: 'Beteiligte*r Wissenschaftler*in' },
  { label: 'Statistiker*in', value: 'Statistiker*in' },
  { label: 'Doktorand*in', value: 'Doktorand*in' }
]
</script>

<template>
  <h1 style="font-size: 29px;">Beteiligte Personen und Institutionen</h1>
  <FormKit
  type="form"
  class="btn"
  #default="{ value }"
  :actions="false"    
 >
 <h1 class="text-2xl text-green-700 text-center" v-if="store.status"><strong>!!!!Soumission reussie</strong></h1>
    <div v-if="!store.status">
      <h1 style="font-size: 20px;"><strong>Beteiligte Person</strong></h1>
      <br>
      <br>
  <div class="textfelddiv border p-4 rounded">
      <label for="Funktion_im_Projekt">Funktion im Projekt<span class="text-red-300">*</span></label>
  <FormKit type="checkbox" name="Funktion_im_Projekt" v-model="state.Funktion_im_Projekt" placeholder="select Funktion"
        :options="position_in_der_Studie" />
 </div>
 <div class="grid md:grid-cols-2 gap-10 mb-4">
  <div class="textfelddiv">
      <label for="Akademischer_Titel">Akademischer Titel <span class="text-red-300">*</span></label>
 <FormKit
      type="text"
      name=" Akademischer_Titel "
      v-model="state.Akademischer_Titel"
      placeholder="Enter Akademischer Titel"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Vorname">Vorname <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name=" Vorname "
      v-model="state.Vorname"
      placeholder="Enter Vorname"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Nachname">Nachname <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Nachname"
      v-model="state.Nachname"
      placeholder="Enter Nachname"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="E-Mail">E-Mail <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="E_Mail"
      v-model="state.E_Mail"
      placeholder="Enter E-Mail"
      validation="required|E-mail"
    />
    </div>
    <div class="textfelddiv">
      <label for="Telefonnummer">Telefonnummer <span class="text-red-300">*</span></label>
    <FormKit
      type="number"
      name="Telefonnummer"
      v-model="state.Telefonnummer"
      placeholder="Enter Telefonnummer"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Institution">Zugehörige Institution <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name="Institution"
      v-model="state.Institution"
      placeholder="select Institution"
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Abteilung">Abteilung <span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name=" Abteilung "
      v-model="state.Abteilung"
      placeholder="Enter Abteilung "
      validation="required"
    />
    </div>
    <div class="textfelddiv">
      <label for="Funktion_in_der_Abteilung">Funktion in der Abteilung<span class="text-red-300">*</span></label>
    <FormKit
      type="text"
      name=" Funktion_in_der_Abteilung "
      v-model="state.Funktion_in_der_Abteilung"
      placeholder="Enter Funktion in der Abteilung"
      validation="required"
    />
    </div>
    
    <button id="myButton" @click="add_person()" type="button" class="foo bar">add new Person</button>
      </div>
      <div v-if="dataPerson.length > 0">
        <table>
          <tr>
            <th>#</th>
            <th>Funktion im Projekt</th>
            <th>Akademischer Titel</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>E_Mail</th>
            <th>Telefonnummer</th>
            <th>Zugehörige Institution</th>
            <th>Abteilung</th>
            <th>Funktion in der Abteilung</th>
            <th>Remove</th>
          </tr>
          <tr v-for="(item, index) in dataValue2" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.Funktion_im_Projekt }}</td>
            <td>{{ item.Akademischer_Titel }}</td>
            <td>{{ item.Vorname }}</td>
            <td>{{ item.Nachname }}</td>
            <td>{{ item.E_Mail }}</td>
            <td>{{ item.Telefonnummer }}</td>
            <td>{{ item.Institution }}</td>
            <td>{{ item.Abteilung }}</td>
            <td>{{ item.Funktion_in_der_Abteilung }}</td>
            <td>
              <button @click="remove_person(index)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </td>
          </tr>

        </table>
      </div>
      <br>
      <h1 style="font-size: 20px;"><strong>Beteiligte Institutionen</strong></h1>
      <br>
      <br>
     <button class="foo bar" type="button" @click="viewModal = true">add new Institution</button>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Abteilung</th>
          <th>Telefonnummer</th>
          <th>Adresse</th>
          <th>Fachabteilung</th>
          <th>Sonstige Fachabteilung</th>
          <th>Schwerpunkt</th>
          <th>Sonstige Schwerpunkt</th>
          <th>Remove</th>
        </tr>
        <tr v-for="(item, index) in storeInstitution.get_institution" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.Name2 }}</td>
          <td>{{ item.Abteilung }}</td>
          <td>{{ item.Telefonnummer2 }}</td>
          <td>{{ item.Straße2 }},
            {{ item.Postleitzahl2 }} {{ item.Ort2 }}</td>
          <td>{{ item.Fachabteilung }}</td>
          <td>{{ item.Sonstige_Fachabteilung }}</td>
          <td>{{ item.Schwerpunkt }}</td>
          <td>{{ item.Sonstige_Schwerpunkt }}</td>
         
          <td>
            <button type="button" @click="storeInstitution.remove_institution(index)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
          </td>
        </tr>

      </table>
      <!-- {{ storeInstitution.get_institution }} -->
      <Modal :show="viewModal" @close="viewModal = false">
        <add_institution />
      </Modal>
      <br>
      <br>
      <FormKit v-if="dataPerson.length > 0" type="button" @click="SubmitForm"
        label="Speichern und weiter" />
    </div>
  </FormKit>
</template>