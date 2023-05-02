
<template> 
  <div class="flex">
      <Sidebar />
      <div class="dashboard"> 
        <Dashboard />
      </div>
  </div>
   
</template>


<script setup>
import Sidebar from '@/components/navigation/Sidebar.vue'
import Dashboard from '@/pages/Dashboard.vue'

</script>
