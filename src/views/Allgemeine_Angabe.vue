<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { axios } from '@/_helpers/utils.js'
import useSteps from '@/_helpers/useSteps.js'
import { ref, reactive } from 'vue'
import { useAllgemeine } from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useAllgemeine()
// store.set_allgemeine(value)


const date_rule = [['date_before', new Date(Date.now())]]

const antragsart = [
  { label: 'Neuantrag', value: 'Neuantrag' },
  { label: 'Folgeantrag', value: 'Folgeantrag' },
  { label: 'Änderungsantrag', value: 'Änderungsantrag' },
]
const art_der_Datennutzung = [
  { label: 'Datenübergabe', value: 'Datenübergabe' },
  { label: 'Verteiltes Rechnen', value: 'Verteiltes Rechnen' },
]
const Art_der_Einreichung = [
  { label: 'eine Ersteinreichung', value: 'eine Ersteinreichung' },
  { label: 'ein zweitvotum', value: 'ein Zweitvotum' },
  { label: 'ein Änderungs-/Ergänzungsantrag(Amendment)', value: 'ein Änderungs-/Ergänzungsantrag(Amendment)' }
]

const showPopper = ref(false)

const find = ref([])
const state = reactive({
  Ort: '',
  Versionnummer: '',
  Datum: '',
  Projekttitel: '',
  antragsart: '',
  Referenzantrag: '',
  art_der_Datennutzung: '',
  Art_der_Einreichung: '',
  Nummer_Ethikvotum: '',
  Geplanter_Studienbeginn: '',
  voraussichtliches_Studienende: '',
  Projektlaufzeit: '',
  Zusammenfassung_des_Projekts: ''
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'add_id_Daten'})
  }
  store.set_allgemeine(state)
}

</script>

<template>
  <h1>Allgemeine Angaben</h1>

  <FormKit type="form" class="btn" #default="{ value }" :actions="false">
    <h1 class="text-2xl text-green-700 text-center" v-if="store.status"><strong>!!!!Soumission reussie</strong></h1>
    <!-- .form-body solely for styling -->
    <div v-if="!store.status">
      <div class="grid md:grid-cols-2 gap-10 mb-4">
        <div class="textfelddiv">
          <label for="Ort">Ort <span class="text-red-300">*</span></label>
          <FormKit type="text" v-model="state.Ort" name="Ort" placeholder="Enter Ort" validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Versionnummer">Versionnummer<span class="text-red-300">*</span></label>
          <FormKit type="number" v-model="state.Versionnummer" name="Versionnummer" placeholder="Enter Versionnummer"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Datum">Datum<span class="text-red-300">*</span></label>
          <FormKit type="date" v-model="state.Datum" name="Datum" placeholder="Enter Datum" validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Projekttitel">Projekttitel<span class="text-red-300">*</span></label>
          <FormKit type="text" v-model="state.Projekttitel" name="Projekttitel" placeholder="Enter Projekttitel."
            validation="required" />
        </div>


        <div class="textfelddiv">
          <li class="list-none flex gap-1">
            <Popper arrow content="Wenn Sie erstmalig Daten für Ihr Projekt beantragen: bitte Neuantrag auswählen.
              Wenn Sie bereits ein Projekt abgeschlossen haben und jetzt auf Grundlage dieses Projektes weitere Daten für ein
              neues Projekt erhalten möchten, wählen Sie Folgeantrag.
              Wenn Sie zu einem bestehenden Projekt Änderungen oder 
              Ergänzungen haben, wählen Sie Änderungsantrag.">
          <li>
            <i class="fa-solid fa-circle-info"></i>
          </li>
          </Popper>
          <label for="antragsart">Antragsart <span class="text-red-300">*</span></label>
          </li>
          <FormKit type="select" v-model="state.antragsart" name="antragsart" placeholder="select one option"
            :options="antragsart" />
        </div>
        <div class="textfelddiv" v-if="value.antragsart == 'Folgeantrag' || value.antragsart == 'Änderungsantrag'">
          <li class="list-none flex gap-1">
            <Popper arrow content="Bei Änderungsantrag oder Folgeantrag bitte die Nummer(n) des/der Referenzantrages/-anträge
            angeben, auf den Sie sich beziehen.">
          <li>
            <i class="fa-solid fa-circle-info"></i>
          </li>
          </Popper>
          <label for="Referenzantrag">Referenzantrag<span class="text-red-300">*</span></label>
          </li>
          <FormKit type="text" v-model="state.Referenzantrag" name="Referenzantrag" placeholder="Enter Referenzantrag"
            validation="required" />
        </div>
        <!-- Hilfetext -->


        <div class="textfelddiv">
          <li class="list-none flex gap-1">
            <Popper arrow content="Möchten Sie Rohdaten für Ihr Projekt erhalten, geben Sie bitte Datenübergabe an. Haben Sie ein
              Programm, dass im Datenintegrationszentrum ausgeführt werden soll, und möchten Sie nur die Ergebnisse erhalten,
              wählen Sie Verteiltes Rechnen.">
          <li>
            <i class="fa-solid fa-circle-info"></i>
          </li>
          </Popper>
          <label for="antragsart">Art der Datennutzung <span class="text-red-300">*</span></label>
          </li>
          <FormKit type="select" name="art_der_Datennutzung" placeholder="select one option"
            :options="art_der_Datennutzung" v-model="state.art_der_Datennutzung" />
        </div>

        <div class="textfelddiv">
          <li class="list-none flex gap-1">
            <Popper arrow content="Ersteinreichung = die Studie ist bisher bei keiner anderen Ethikkommission eingereicht. 
            „Zweitvotum“ = Antrag auf Anerkennung eines Erstvotums einer anderen Ethikkommission. 
            Änderungs-/Ergänzungsantrag = Amendement = Zusatzantrag zu einem bestehenden Ethik-Antrag">
          <li>
            <i class="fa-solid fa-circle-info"></i>
          </li>
          </Popper>
          <label for="Art_der_Einreichung">Art der Einreichung(Ethikantrag) <span class="text-red-300">*</span></label>
          </li>
          <FormKit type="select" v-model="state.art_der_Datennutzung" name="art_der_Datennutzung"
            placeholder="select one option" :options="Art_der_Einreichung" />
        </div>

        <div class="textfelddiv">
          <li class="list-none flex gap-1">
            <Popper arrow content="Wenn bereits ein Ethik-Votum vorliegt, bitte die Nummer angeben.">
          <li>
            <i class="fa-solid fa-circle-info"></i>
          </li>
          </Popper>
          <label for="Nummer_Ethikvotum">Nummer des Ethikvotum</label>
          </li>
          <FormKit type="text" v-model="state.Nummer_Ethikvotum" name="Nummer_Ethikvotum"
            placeholder="Enter Nummer des Ethikvotum" />
        </div>

        <div class="textfelddiv">
          <label for="Geplanter_Studienbeginn">Geplanter Studienbeginn<span class="text-red-300">*</span></label>
          <FormKit type="month" v-model="state.Geplanter_Studienbeginn" name="Geplanter_Studienbeginn"
            placeholder="Enter Geplanter Studienbeginn" validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Geplanter_Studienbeginn">voraussichtliches Studienende(inkl. Nachbeobachtungs- und
            Auswertungszeitraum)<span class="text-red-300">*</span></label>
          <FormKit type="month" v-model="state.voraussichtliches_Studienende" name="voraussichtliches_Studienende"
            placeholder="Enter voraussichtliches Studienende inkl. Nachbeobachtungs- und Auswertungszeitraum:(mm/jjjj)"
            validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Projektlaufzeit">Projektlaufzeit im Monat<span class="text-red-300">*</span></label>
          <FormKit type="number" v-model="state.Projektlaufzeit" name="Projektlaufzeit"
            placeholder="Enter Projektlaufzeit im Monate" validation="required" />
        </div>
        <div class="textfelddiv">
          <label for="Zusammenfassung_des_Projekts">Zusammenfassung des Projekts<span
              class="text-red-300">*</span></label>
          <FormKit type="textarea" v-model="state.Zusammenfassung_des_Projekts" name="Zusammenfassung_des_Projekts"
            rows="8" placeholder="Zusammenfassung des Projekts (Abstract oder tabellarische Synopse)."
            validation="required" />
        </div>
      </div>
      <!-- NEW: Adds Next / Previous navigation buttons. -->


      <FormKit type="button" @click="SubmitForm" label="Speichern und weiter" />
    </div>
</FormKit></template>
<style></style>

