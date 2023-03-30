
<template> 
  <div class="flex">
      <Sidebar />
      <div class="dashboard"> 
        <Dashboard />
      </div>
  </div>
    <!-- <div>
      <h1 class="text1" style="font-size: 45px;">Neue Antrag</h1>
      <nav style="margin-left: 5%;">
        <div class="menu-item">
          <router-link to="/"></router-link>
          <router-link :to="{ name: 'Fragestellung' }">Fragestellung</router-link> |
          <router-link :to="{ name: 'Details' }">Details</router-link> |
          <router-link :to="{ name: 'Beantragte Daten' }">Beantragte Daten</router-link> |
          <router-link :to="{ name: 'Antragssteller' }">Antragssteller</router-link> |
          <router-link :to="{ name: 'Grundlage zum Schutz' }">Grundlage zum Schutz</router-link> |
          <router-link :to="{ name: 'Organisatorische Massnahmen' }">Organisatorische Massnahmen</router-link> |
          <router-link :to="{ name: 'Nutzungsordnung' }">Nutzungsordnung</router-link>
        </div>
      </nav>
    </div> -->
    <!-- <Handsontable/> -->
</template>


<script setup>
import Sidebar from '@/components/navigation/Sidebar.vue'
import Dashboard from '@/pages/Dashboard.vue'

</script>
