<template>
    <h1 class="text-2xl flex justify-between">DOKUMENTE HERUNTERLADEN</h1><br><br>
    <div class="allgemeine border-b  py-2">
        <div class="grid md:grid-cols-2 xl:grid-cols-2 ">
        <h2 class="text-xl flex justify-between">DIZ-Antrag </h2><br><br>
       
        <button class="border border-blue-500 px-4 py-2  rounded text-sm" @click="emitCustomEvent">DIZ-antrag.pdf</button>
        <button class="border border-blue-500 px-4 py-2  rounded text-sm">DIZ-Antrag.docx</button>
    </div><br><br>
    <div class="grid md:grid-cols-2 xl:grid-cols-2 ">
        <h2 class="text-xl flex justify-between">Datenschutzkonzept </h2><br><br>
        <button class="border border-blue-500 px-4 py-2  rounded text-sm" >Datenschutzkonzept.pdf</button>
        <button class="border border-blue-500 px-4 py-2  rounded text-sm">Datenschutzkonzept.docx</button>
    </div><br><br>
    <div class="grid md:grid-cols-2 xl:grid-cols-2 ">
        <h2 class="text-xl flex justify-between">Ethik Antrag </h2><br><br>
        <button class="border border-blue-500 px-4 py-2  rounded text-sm">Ethik Antrag.pdf</button>
        <button class="border border-blue-500 px-4 py-2 rounded text-sm">Ethik Antrag.docx</button>
    </div>
    </div>
</template>
<script>
export default {
    methods: {
        emitCustomEvent() {
      this.$emit('custom-event');
    },
    runMethod() {
      // Exécute la méthode dans le composant parent
      this.$Doc_Dizantrag.generatePdf();
    }
  }
  
}
</script>