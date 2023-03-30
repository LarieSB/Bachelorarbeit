<!-- eslint-disable vue/no-unused-vars -->
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
import add_institution from './add_institution.vue';
import Modal from './Modal.vue';
import { ref, reactive, computed } from 'vue'
import { useBeteiligte } from '@/store';
import { useInstitution } from '@/store';

const store = useBeteiligte()
// store.set_Beteiligte(value)

const storeInstitution = useInstitution()

const viewModal = ref(false)


const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const find = ref([])

const state = reactive({
  Funktion_im_Projekt: '',
  Akademischer_Titel: '',
  Vorname: '',
  Nachname: '',
  E_Mail: '',
  Telefonnummer: '',
  Institution: '',
  Abteilung: '',
  Funktion_in_der_Abteilung: '',
  // Beteiligte_Institution: ''
})

const usersStorage = JSON.parse(localStorage.getItem('users'))
const institutionStorage = JSON.parse(localStorage.getItem('institution'))
console.log(institutionStorage)

const saveState = reactive({
  user: computed(() => usersStorage),
  institutions: computed(() => institutionStorage),
})

const dataPerson = ref([])

const verifierSiEmailExist = () => {
  dataPerson.value.some((item) => item.E_Mail === state.E_Mail)
}

const add_person = () => {
  localStorage.setItem('users', JSON.stringify(state))
  const dataValue = JSON.parse(localStorage.getItem('users'))
  dataPerson.value.push(dataValue)
}

const remove_person = (index) => {
  dataPerson.value.splice(index, 1)
  // localStorage.removeItem()
}

const SubmitForm = () => {
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
  <FormKit type="form" class="btn" #default="{ value }" :actions="false">
    <h1 class="text-2xl text-green-700 text-center" v-if="store.status"><strong>!!!!Soumission reussie</strong></h1>
    <div v-if="!store.status">
      <h1 style="font-size: 20px;"><strong>Beteiligte Person</strong></h1>
      <br>
      <br>

      <div class="textfelddiv border p-4 rounded">
        <label for="Funktion_im_Projekt">Funktion im Projekt<span class="text-red-300">*</span></label>
        <FormKit type="checkbox" name="Funktion_im_Projekt" v-model="state.Funktion_im_Projekt"
          placeholder="select Funktion" :options="position_in_der_Studie" />
      </div>
      <div class="grid md:grid-cols-2 gap-10 mb-4">
        <div class="textfelddiv">
          <label for="Akademischer_Titel">Akademischer Titel <span class="text-red-300">*</span></label>
          <FormKit type="text" name=" Akademischer_Titel " v-model="state.Akademischer_Titel"
            placeholder="Enter Akademischer Titel" validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Vorname">Vorname <span class="text-red-300">*</span></label>
          <FormKit type="text" name=" Vorname " v-model="state.Vorname" placeholder="Enter Vorname"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Nachname">Nachname <span class="text-red-300">*</span></label>
          <FormKit type="text" name="Nachname" v-model="state.Nachname" placeholder="Enter Nachname"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="E-Mail">E-Mail <span class="text-red-300">*</span></label>
          <FormKit type="text" name="E_Mail" v-model="state.E_Mail" placeholder="Enter E-Mail"
            validation="required|E-mail" />
        </div>
        <div class="textfelddiv">
          <label for="Telefonnummer">Telefonnummer <span class="text-red-300">*</span></label>
          <FormKit type="number" name="Telefonnummer" v-model="state.Telefonnummer" placeholder="Enter Telefonnummer"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Institution">Zugehörige Institution <span class="text-red-300">*</span></label>
          <FormKit type="text" name="Institution" v-model="state.Institution" placeholder="select Institution"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Abteilung">Abteilung <span class="text-red-300">*</span></label>
          <FormKit type="text" name=" Abteilung " v-model="state.Abteilung" placeholder="Enter Abteilung "
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Funktion_in_der_Abteilung">Funktion in der Abteilung<span class="text-red-300">*</span></label>
          <FormKit type="text" name=" Funktion_in_der_Abteilung " v-model="state.Funktion_in_der_Abteilung"
            placeholder="Enter Funktion in der Abteilung" validation="required" />
        </div>

        <button id="myButton" @click="add_person()" type="button" class="foo bar">add new Person</button>
      </div>
      <div v-if="dataPerson.length > 0">
        <table>
          <tr>
            <th>#</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>E_Mail</th>
            <th>Remove</th>
          </tr>
          <tr v-for="(item, index) in dataPerson" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.Vorname }}</td>
            <td>{{ item.Nachname }}</td>
            <td>{{ item.E_Mail }}</td>
            <td>
              <button @click="remove_person(index)">X</button>
            </td>
          </tr>

        </table>
      </div>
      <br>
      <br>
      <h1 style="font-size: 20px;"><strong>Beteiligte Institutionen</strong></h1>
      <br>
      <br>
      <div class="textfelddiv">
        <label for="Beteiligte_Institution">Beteiligte Institutionen <span class="text-red-300">*</span></label>
        <FormKit type="select" name="Beteiligte_Institution" v-model="state.Beteiligte_Institution" options=""
          placeholder="select Institution" validation="required" />
      </div>
      <br>

      <button class="foo bar" type="button" @click="viewModal = true">add new Institution</button>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Abteilung</th>
          <th>Telefonnummer</th>
          <th>Remove</th>
        </tr>
        <tr v-for="(item, index) in storeInstitution.get_institution" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.Name2 }}</td>
          <td>{{ item.Abteilung }}</td>
          <td>{{ item.Telefonnummer2 }}</td>
          <td>
            <button type="button" @click="storeInstitution.remove_institution(index)">X</button>
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