<!-- eslint-disable vue/multi-word-component-names -->
<!-- doc template -->
<template lang="">
    <div class="shadow px-4 py-6 mt-12">
        <h2 class="text-2xl flex justify-between">
            <span>DIZ-antrag</span>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2 rounded text-sm" @click="generatePdf" >PDF Download</button>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2 rounded text-sm" @click="downloadDoc"> Word Download</button>
        </h2><br />
        <div ref="Content" class="allgemeine border-b border-b-zinc-300 py-2">
            <h2 class="text-xl flex justify-between">
                <span>DIZ-antrag für {{jsonAllgemeine.Projekttitel}}</span>                
            </h2><br>
             
MIRACUM Projektantrag<br>
________________________________________<br><br>
<h2>Allgemeine</h2>  <br>
Angelegt am: {{jsonAllgemeine.Datum}}<br><br>

<h2>I- Fragestellung</h2> <br>
Projekttitel: {{jsonAllgemeine.Projekttitel}}<br>
Hintergrund:<br>
{{jsonHintergrund.Hintergrund}}<br><br>
Begründung der Machbarkeit:<br>
{{jsonHintergrund.Begründung_der_Machbarkeit}}<br><br>

Ziele oder Hypothese:<br>
{{jsonHintergrund.Primäre_Ziele}}<br>
{{jsonHintergrund.Sekundäre_Ziele}}<br>
{{jsonHintergrund.primäre_Zielgröße}}<br>
{{jsonHintergrund.sekundäre_Zielgröße}}<br><br>

Methodik:<br>
Es handelt sich um eine {{jsonCharakterisierung.Studientyp_qualitativ}} Studie. <br>
Es handelt sich um eine {{jsonCharakterisierung.Studientyp_zeitlich}} Studie. <br>
Es handelt sich um eine {{jsonCharakterisierung.Studientyp_örtlich}} Studie. <br><br>

Mögliche Schlußfolgerungen:<br>
{{jsonHintergrund.Mögliche_Schlussfolgerungen}}<br><br>

<h2>II- Projektdetails</h2> <br>

Antragsart:	{{jsonAllgemeine.antragsart}}<br><br>
Referenzantrag:	{{jsonAllgemeine.Referenzantrag}}<br><br>

Beteiligte Institutionen<br>
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
</div> <br><br>


Beteiligte Personen<br><br>
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
Projektlaufzeit: {{jsonAllgemeine.Projektlaufzeit}} Monat(e)<br><br>

<h2>III- Beantragte Daten</h2><br><br>

Art der Datennutzung: {{jsonAllgemeine.art_der_Datennutzung}}<br>

Kohorte Beschreibung:<br>
Bei den betroffenen Personen handelt es sich um: <p v-for="(item, index) in jsonKohorte.betroffenen_Personen2" :key="index">  {{item}}</p>
{{jsonKohorte.Sonstige_Spezifizierung}} <br>
Bei den betroffenen Personen handelt es sich um:<p v-for="(item, index) in jsonKohorte.betroffenen_Personen2" :key="index"> {{item}}<br></p>
Zeitraum der Datenerfassung: {{jsonKohorte.Zeitraum_der_Datenerfassung}}<br>
Die Kohorte ist folgendermaßen definiert: {{jsonKohorte.Definitionskriterien}}<br>
Folgende Einschlusskriterien sind definiert: {{jsonKohorte.Einschlusskriterien}}<br>
Folgende Ausschlusskriterien sind definiert: {{jsonKohorte.Ausschlusskriterien}}<br>
Rektrutierungsmaßnahmen: {{jsonKohorte.Rektrutierungsmaßnahmen}}<br>
{{jsonKohorte.zeitlicher_Ablauf}}<br><br>

<h2>IV- Rechnung</h2><br>

Rechnungsadresse:<br><br>
{{jsonRechnung.Abrechnung_des_Datenantrages}}<br><br>

<h2>V- Nutzungsordnung</h2><br>

Nutzungsordnung:	{{jsonNutzungsordnung.Nutzungsordnung}}
            
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
            pdfMake.createPdf(documentDefinition).download('Dizantrag.pdf');
        },
         // word generator
        downloadDoc() {
      const content = this.$refs.Content.innerHTML;
      const doc = new Blob(['<html><head><meta charset="UTF-8"></head><body>' + content + '</body></html>'], {type: 'application/msword'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(doc);
      link.download = 'Dizantrag.doc';
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