/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'


import Nutzungsordnung from '@/views/Nutzungs_ordnung.vue'
import Allgemeine_Angabe from '@/views/Allgemeine_Angabe.vue'
import Benoetigte_Daten from '@/views/Benoetigte_Daten.vue'
import Beteiligte_Personen_Institutionen from '@/views/Beteiligte_Personen_Institutionen.vue'
import Charakterisierung_der_Studie from '@/views/Charakterisierung_der_Studie.vue'
import Einwilligung from '@/views/Einwilligung.vue'
import Fallzahlen_und_Biometrie from '@/views/Fallzahlen_und_Biometrie.vue'
import Kohorte from '@/views/Kohorte.vue'
import Nutzen_Risiko_abwägung from '@/views/Nutzen_Risiko_abwägung.vue'
import Rechnung_und_Finanzierung from '@/views/Rechnung_und_Finanzierung.vue'
import Wissenschaftlicher_Hintergrund_und_Ziele from '@/views/Wissenschaftlicher_Hintergrund_und_Ziele.vue'
import Datenschutz_massnahmen from '@/views/Datenschutz_massnahmen.vue'
import add_institution from '@/views/add_institution.vue'
import add_nicht_id_Daten from '@/views/add_nicht_id_Daten.vue'
import add_id_Daten from '@/views/add_id_Daten.vue'
import Add_externe_Daten from '@/views/Add_externe_Daten.vue'
import Doc_Ethik_antrag from '@/views/Doc_generator/Doc_Ethik_antrag.vue'
import Doc_Datenschutzkonzept from '@/views/Doc_generator/Doc_Datenschutzkonzept.vue'
import Doc_Dizantrag from '@/views/Doc_generator/Doc_Dizantrag.vue'
import DocLayout from '@/views/Doc_generator/DocLayout.vue'


const routes = [
  {
    path: '/',
    name: 'Allgemeine Angabe',
    component: Allgemeine_Angabe
  },
  // {
  //   path: '/Allgemeine_Angabe',
  //   name: 'Allgemeine Angabe',
  //   component: Allgemeine_Angabe
  // },
  {
    path: '/Benoetigte_Daten',
    name: 'Benoetigte Daten',
    component: Benoetigte_Daten
  },
  {
    path: '/Beteiligte_Personen_Institutionen',
    name: 'Beteiligte Personen Institutionen',
    component: Beteiligte_Personen_Institutionen
  },
  {
    path: '/Charakterisierung_der_Studie',
    name: 'Charakterisierung_der_Studie',
    component: Charakterisierung_der_Studie
  },
  {
    path: '/Einwilligung',
    name: 'Einwilligung',
    component: Einwilligung
  },
  {
    path: '/Fallzahlen_und_Biometrie',
    name: 'Fallzahlen_und_Biometrie',
    component: Fallzahlen_und_Biometrie
  },
  {
    path: '/Kohorte',
    name: 'Kohorte',
    component: Kohorte
  },
  {
    path: '/Nutzen_Risiko_abwägung',
    name: 'Nutzen_Risiko_abwägung',
    component: Nutzen_Risiko_abwägung
  },
  {
    path: '/Rechnung_und_Finanzierung',
    name: 'Rechnung_und_Finanzierung',
    component: Rechnung_und_Finanzierung
  },
  {
    path: '/Wissenschaftlicher_Hintergrund_und_Ziele',
    name: 'Wissenschaftlicher_Hintergrund_und_Ziele',
    component: Wissenschaftlicher_Hintergrund_und_Ziele
  },
  {
    path: '/Datenschutz_massnahmen',
    name: 'Datenschutz_massnahmen',
    component: Datenschutz_massnahmen
  },
  {
    path: '/Nutzungsordnung',
    name: 'Nutzungsordnung',
    component: Nutzungsordnung
  },
  {
    path: '/add_institution',
    name: 'add_institution',
    component: add_institution
  },
  {
    path: '/add_id_Daten',
    name: 'add_id_Daten',
    component: add_id_Daten
  },
  {
    path: '/add_nicht_id_Daten',
    name: 'add_nicht_id_Daten',
    component: add_nicht_id_Daten
  },
  {
    path: '/Add_externe_Daten',
    name: 'Add_externe_Daten',
    component: Add_externe_Daten
  },
  {
    path: '/Doc_Ethik_antrag',
    name: 'Doc_Ethik_antrag',
    component: Doc_Ethik_antrag
  },
  {
    path: '/Doc_Datenschutzkonzept',
    name: 'Doc_Datenschutzkonzept',
    component: Doc_Datenschutzkonzept
  },
  {
    path: '/Doc_Dizantrag',
    name: 'Doc_Dizantrag',
    component: Doc_Dizantrag
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: DocLayout
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
