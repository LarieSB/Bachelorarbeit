<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
    <div class="shadow px-4 py-6 mt-12">
        <h2 class="text-2xl flex justify-between">
            <span>Detail complet</span>
            <button class="border border-blue-500 px-4 py-2 rounded text-sm" @click="generatePdf" >Imprimer en pdf</button>
        </h2><br />
        <div ref="pdfContent" class="allgemeine border-b border-b-zinc-300 py-2">
            <h2 class="text-xl flex justify-between">
                <span>Allgemeine Angabe</span>
                
            </h2><br>
            <ul class="grid md:grid-cols-3 xl:grid-cols-3">
                <li class="border-b p-2"><span>Ort:</span> {{jsonAllgemeine.Ort}}</li>
                <li class="border-b p-2"><span>Versionnummer:</span> {{jsonAllgemeine.Versionnummer}}</li>
                <li class="border-b p-2"><span>Datum:</span> {{jsonAllgemeine.Datum}}</li>
                <li class="border-b p-2"><span>Projekttitel:</span> {{jsonAllgemeine.Projekttitel}}</li>
                <li class="border-b p-2"><span>antragsart:</span> {{jsonAllgemeine.antragsart}}</li>
                <li class="border-b p-2"><span>Nummer_Ethikvotum:</span> {{jsonAllgemeine.Nummer_Ethikvotum}}</li>
                <li class="border-b p-2"><span>Geplanter_Studienbeginn:</span> {{jsonAllgemeine.Geplanter_Studienbeginn}}</li>
                <li class="border-b p-2"><span>voraussichtliches_Studienende:</span> {{jsonAllgemeine.voraussichtliches_Studienende}}</li>
                <li class="border-b p-2"><span>Projektlaufzeit:</span> {{jsonAllgemeine.Projektlaufzeit}}</li>
                <li class="border-b p-2"><span>Zusammenfassung_des_Projekts:</span> {{jsonAllgemeine.Zusammenfassung_des_Projekts}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default{

    data() {
        return {
            dataAllgemeine: null,
            jsonAllgemeine: null
        }
    },

    methods: {
        generatePdf(){
            const pdfContent = this.$refs.pdfContent.innerText;
            const documentDefinition = {
                content: pdfContent,
            };
            pdfMake.createPdf(documentDefinition).open();
        },
    },

    created() {
        //fetch data allgemeine
        this.dataAllgemeine = localStorage.getItem('allgemeine')
        this.jsonAllgemeine = JSON.parse(this.dataAllgemeine)
    },
}
</script>