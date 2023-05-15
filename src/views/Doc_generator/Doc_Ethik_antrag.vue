<!-- eslint-disable vue/multi-word-component-names -->
<!-- doc template -->
<template lang="">
    <div class="shadow px-4 py-6 mt-12">
        <h2 class="text-2xl flex justify-between">
            <span>Antragsformular für Studien nach Berufsordnung (“Sonstige Studien“) </span>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2  rounded text-sm" @click="generatePdf" >PDF Download</button>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2 rounded text-sm" @click="downloadDoc"> Word Download</button>
        </h2><br />
        <div ref="Content" class="allgemeine border-b border-b-zinc-300 py-2">
            <h2 class="text-xl flex justify-between">
                <span>Antragsformular für Studien nach Berufsordnung (“Sonstige Studien“)</span>                
            </h2><br>
            <p>1.  Vollständiger Titel der Studie (lt. Studienprotokoll): <br>
            {{jsonAllgemeine?.Projekttitel}}</p> 
            <p>2. Es handelt sich um: <br>
             {{jsonAllgemeine.Art_der_Einreichung}} </p>
            <p>3. Es handelt sich um eine {{jsonCharakterisierung.Studientyp_örtlich}} Studie</p>
           <p> Es handelt sich um eine rein retrospektive Datenerhebung: {{jsonCharakterisierung.rein_retrospektive_Datenerhebung}} </p>
            <p>4. Beteiligte Personnen</p>
            <div v-for="(item, index) in jsonUsers" :key="index">
Funktion im Projekt:<p v-for="(items, index) in item.Funktion_im_Projekt" :key="index"> {{items}} </p>
<p>Akademischer Titel: {{item.Akademischer_Titel}}</p>
<p>Vorname: {{item.Vorname}}</p>
<p>Nachname: {{item.Nachname}}</p>
<p>E_Mail: {{item.E_Mail}}</p>
<p>Telefonnummer: {{item.Telefonnummer}}</p>
<p>Institution: {{item.Institution}}</p>
<p>Abteilung: {{item.Abteilung}}</p>
<p>Funktion in der Abteilung: {{item.Funktion_in_der_Abteilung}}</p><br>
</div> <br>
            <h3>5. Beteiligte Institutionen</h3>
            <div v-for="(item, index) in jsonInstitution" :key="index">
<p>Institut Name: {{item.Name2}}</p>
<p>Abteilung: {{item.Abteilung}}</p>
<p>Telefonnummer: {{item.Telefonnummer2}}</p>
<p>Straße: {{item.Straße2}}</p>
<p>Ort: {{item.Ort2}}</p>
<p>Postleitzahl: {{item.Postleitzahl2}}</p>
<p>Fachabteilung: {{item.Fachabteilung}}</p>
<p>Sonstige Fachabteilung: {{item.Sonstige_Fachabteilung}}</p>
<p>Schwerpunkt: {{item.Schwerpunkt}}</p>
<p>Sonstige Schwerpunkt: {{item.Sonstige_Schwerpunkt}}</p><br>
</div> <br>
            <h3>6.	Geplanter Studienbeginn und voraussichtliches Studienende, inkl. Nachbeobachtungs- und Auswertungszeitraum: </h3>
            <p>Von {{jsonAllgemeine.Geplanter_Studienbeginn}} bis {{jsonAllgemeine.voraussichtliches_Studienende}}</p>
            <h3>7.	Die erfassten Daten stammen aus dem folgenden Zeitraum (retrospektiv) bzw. werden im folgenden Zeitraum erhoben (prospektiv):  </h3>
             <p>{{jsonKohorte.Zeitraum_der_Datenerfassung}}</p>
             <h3>8.	Es handelt sich um eine   </h3>
             <p>{{jsonCharakterisierung.Studientyp_zeitlich}} Studie</p>
             <h3>9.	Es handelt sich um eine </h3>
             <p>{{jsonCharakterisierung.Studientyp_qualitativ}} Studie</p>
             <h3>10. Handelt es sich um eine Studie mit studienbedingter Strahlenbelastung? </h3>
             <p>{{jsonCharakterisierung.studienbedingter_Strahlenbelastung}}</p>
             <h3>11. Bei den betroffenen Personen handelt es sich um:</h3>
             <p v-for="(item, index) in jsonKohorte.betroffenen_Personen2" :key="index">{{item}}</p>
             <h3>12. Besteht ein Versicherungsschutz?</h3>
             <p>{{jsonCharakterisierung.Versicherungsschutz}} <br> {{jsonCharakterisierung.Versicherungsträger_Police_Nummer}}</p>
             <h3>13. Wie erfolgt die Abrechnung der anfallenden Kosten für die durch Sie angeforderte Leistung?</h3>
             <p>{{jsonRechnung.Abrechnung_des_Ethik_Antrages}}</p>
             <p>{{jsonRechnung.Rechnungsadresse}}</p>
             <h3>14. Versionsnummer Antragsformular: </h3>{{jsonAllgemeine.Versionnummer}}<br><br><br>

             ________________________________________   <br>
             Ort/Datum <br><br>
             ________________________________________<br>
             Name in Druckbuchstaben 
             
            <br><br>

             ________________________________________<br>
             Unterschrift der studienleitenden Person
            
        </div>
    </div>
    <br><br>
    <router-link exact :to="{ name: 'Impressum' }" href="#" class="weiter" >Zurück</router-link>
</template>
<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default{

    data() {
        return {
            wordRef:null,
            dataAllgemeine: null,
            jsonAllgemeine: null,
            dataBeteiligte: null,
            jsonBeteiligte: null,
            dataCharakterisierung: null,
        jsonCharakterisierung: null,
        dataDatenschutz: null,
        jsonDatenschutz: null,
        dataEinwilligung: null,
        jsonEinwilligung: null,
        dataExterneDaten: null,
        jsonExterneDaten: null,
        dataFallzahlen: null,
        jsonFallzahlen: null,
        dataHintergrund: null,
        jsonHintergrund: null,
       dataIDDaten: null,
       jsonIDDaten: null,
       dataInstitution: null,
        jsonInstitution: null,
        dataKohorte: null,
        jsonKohorte: null,
        dataNichtidDaten: null,
        jsonNichtidDaten: null,
        dataNutzenRisiko: null,
        jsonNutzenRisiko: null,
        dataNutzungsordnung: null,
        jsonNutzungsordnung: null,
       dataRechnung: null,
        jsonRechnung: null,
        dataUsers: null,
        jsonUsers: null
        }
    },

    methods: {
         // pdf generator
        generatePdf(){
            const pdfContent = this.$refs.Content.innerText;
            const documentDefinition = {
                content: pdfContent,
            };
            pdfMake.createPdf(documentDefinition).download('Ethik_Antrag.pdf');
        },
         // word generator  
     downloadDoc() {
        
      const content = this.$refs.Content.innerHTML;
      const doc = new Blob(['<html><head><meta charset="UTF-8"></head><body>' + content + '</body></html>'], {type: 'application/msword'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(doc);
      link.download = 'Ethik_Antrag.doc';
      link.click();
      URL.revokeObjectURL(link.href);
    }
    },
//fetch Data from LocalStorage
    created() {
        //fetch data allgemeine
        this.dataAllgemeine = localStorage.getItem('allgemeine')
        this.jsonAllgemeine = JSON.parse(this.dataAllgemeine)
        //fetch data Beteiligte
        this.dataBeteiligte = localStorage.getItem('beteiligte')
        this.jsonBeteiligte= JSON.parse(this.dataBeteiligte)
        //fetch data charakterisierung
        this.dataCharakterisierung = localStorage.getItem('charakterisierung')
        this.jsonCharakterisierung= JSON.parse(this.dataCharakterisierung)
        //fetch data Datenschutz
        this.dataDatenschutz = localStorage.getItem('datenschutz')
        this.jsonDatenschutz= JSON.parse(this.dataDatenschutz)
        //fetch data Einwilligung
        this.dataEinwilligung = localStorage.getItem('einwilligung')
        this.jsonEinwilligung= JSON.parse(this.dataEinwilligung)
        //fetch data ExterneDaten
        this.dataExterneDaten = localStorage.getItem('externeDaten')
        this.jsonExterneDaten= JSON.parse(this.dataExterneDaten)
        //fetch data Fallzahlen
        this.dataFallzahlen = localStorage.getItem('fallzahlen')
        this.jsonFallzahlen= JSON.parse(this.dataFallzahlen)
        //fetch data Hintergrund
        this.dataHintergrund = localStorage.getItem('hintergrund')
        this.jsonHintergrund= JSON.parse(this.dataHintergrund)
        //fetch data IDDaten
        this.dataIDDaten = localStorage.getItem('iDDaten')
        this.jsonIDDaten= JSON.parse(this.dataIDDaten)
        //fetch data Institution
        this.dataInstitution = localStorage.getItem('institution')
        this.jsonInstitution= JSON.parse(this.dataInstitution)
        //fetch data Kohorte
        this.dataKohorte = localStorage.getItem('kohorte')
        this.jsonKohorte= JSON.parse(this.dataKohorte)
        //fetch data NichtidDaten
        this.dataNichtidDaten = localStorage.getItem('nichtidDaten')
        this.jsonNichtidDaten= JSON.parse(this.dataNichtidDaten)
        //fetch data NutzenRisiko
        this.dataNutzenRisiko = localStorage.getItem('nutzenRisiko')
        this.jsonNutzenRisiko= JSON.parse(this.dataNutzenRisiko)
        //fetch data Nutzungsordnung
        this.dataNutzungsordnung = localStorage.getItem('nutzungsordnung')
        this.jsonNutzungsordnung= JSON.parse(this.dataNutzungsordnung)
        //fetch data Rechnung
        this.dataRechnung = localStorage.getItem('rechnung')
        this.jsonRechnung= JSON.parse(this.dataRechnung)
         //fetch data User
         this.dataUsers = localStorage.getItem('users')
        this.jsonUsers= JSON.parse(this.dataUsers)
    },
}
</script>