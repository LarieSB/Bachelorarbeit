<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable no-unused-vars -->
<script setup>
import { FormKit } from '@formkit/vue';
import { ref, reactive } from 'vue'
import {useNutzungsordnung} from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useNutzungsordnung()

const date_rule = [['date_before', new Date(Date.now())]]
const showPopper = ref(false)

const state = reactive ({
  Nutzungsordnung: false
})

const SubmitForm = () => {
  console.log(router)
  if(store.status === false){
    router.push({name: 'Impressum'})
  }
  store.set_nutzungsordnung(state)
  
}
console.log("state", state)

const dataNutzungsordnung = localStorage.getItem('nutzungsordnung')
const jsonO = JSON.parse(dataNutzungsordnung)
</script>
<template>
<h1 style="font-size: 29px;">Nutzungsordnung</h1>
<FormKit type="form" :actions="false" #default="{ value }">
  <label>Mit Einreichung meines Projektantrags verpflichte ich mich zur Einhaltung der <strong><a
                href="https://intranet.kgu.de/fileadmin/redakteure/klinikum/dezernat7/informationen/allg_it-no_stand10_2010.pdf"
                rel="noopener noreferrer nofollow">lokalen Nutzungsordung</a></strong></label>.
          <br />
          <div class="textfelddiv flex items-center gap-2">      
    <FormKit
      type="checkbox"
      name="Nutzungsordnung"
      v-model="state.Nutzungsordnung"
      :value="true"
      validation="accepted"
      validation-visibility="dirty"
    />
    <label for="Nutzungsordnung" class="border p-4 rounded">Ich stimme der lokalen Nutzungsordnung zu<span class="text-red-300">*</span></label>
  </div>
  <br>
    <FormKit type="button" @click="SubmitForm" label="Submit Application"/>

  </FormKit>
</template>