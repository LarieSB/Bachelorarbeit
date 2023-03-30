<template>
  <h1 style="font-size: 45px;">Fragestellung</h1> 
  <form>
   
      <div class="frages">
        <label> Ort :</label>
        <input type="text" placeholder="Enter Ort " v-model="form.Ort" />
        <br />
      </div>
  
      <div class="frages">
        <label> Versionnummer :</label>
        <input type="number" placeholder="Versionnummer " v-model="form.Versionnummer" />
        <br />
      </div>
  
      <div class="frages">
        <label> Datum :</label>
        <input type="date" placeholder="Enter Date " v-model="form.Datum" />
        <br />
      </div>
  
      <div class="frages">
        <label> projekttitel :</label>
        <input type="text" placeholder="Enter Projekttitel " v-model="form.projekttitel" />
        <br />
      </div>
  
      <div class="frages">
        <label> Zusammenfassung des Projekts (Abstract oder tabellarische Synopse) :</label>
        <input type="text" placeholder="Zusammenfassung des Projekts (Abstract oder tabellarische Synopse)" v-model="form.Zusammenfassung_des_Projekts"/>
        <br/>
      </div>
  
      <div class="frages">
        <label>Hintergrund :</label>
        <input type="text" placeholder="Enter Project Hintergrund " v-model="form.Hintergrund"/>
        <br/>
      </div>
  
      <div class="frages">
        <label> Wissenschaftlicher Hintergrund (Stand der Forschung (mit Literaturangaben) und Ableitung der Fragestellung (Rationale)) :</label>
        <input type="text" placeholder="Enter Project  Wissenschaftlicher Hintergrund " v-model="form.Wissenschaftlicher_Hintergrund"/>
        <br/>
      </div>
      
      <div class="frages">
        <label>Ziele und Hypothese</label>
        <label>Primäre Ziele</label>
        <input type="text" placeholder="Enter Project Primäre Ziele" v-model="form.Primäre_Ziele"/>
        <br />
      </div>
  
      <div class="frages">
        <label>Sekundäre Ziele</label>
        <input type="text" placeholder="Enter Project Sekundäre Ziele" v-model="form.Sekundäre_Ziele" />
        <br />
      </div>
  
      <div class="frages">
        <label>Zielgröße</label>
  
        <label>Primäre Zielgröße</label>
        <input type="text" placeholder="Enter Project Primäre Zielgröße" v-model="form.Primäre_Zielgröße"/>
        <br />
      </div>
  
      <div class="frages">
        <label>Sekundäre Zielgröße</label>
        <input type="text" placeholder="Enter Project Sekundäre Zielgröße" v-model="form.Sekundäre_Zielgröße" />
        <br />
      </div>
  
      <div class="frages">
        <label> Begründung der Machbarkeit</label>
        <input type="text" placeholder="Enter Begründung der Machbarkeit" v-model="form.Begründung_der_Machbarkeit"/>
        <br />
      </div>
  
      <div>
        <h2>METHODIK</h2>
      </div>
  
      <div class="frages">
        <label>Es Handelt es sich um : {{ Art_der_Einreichung }}</label>
      </div>
       <input type="radio" id="ersteinreichung" value="eine Ersteinreichung (die Studie ist bisher bei keiner anderen Ethikkommission eingereicht)" v-model="form.Art_der_Einreichung"/>        
      <label for="ersteinreichung">eine Ersteinreichung (die Studie ist bisher bei keiner anderen Ethikkommission eingereicht)</label>
      <label for="" style="margin: 5px;">  </label>
      <input type="radio" id="Zweitvotum " value="ein „Zweitvotum“ (Antrag auf Anerkennung eines Erstvotums einer anderen Ethikkommission)" v-model="form.Art_der_Einreichung"/>      
      <label for="Zweitvotum">ein „Zweitvotum“ (Antrag auf Anerkennung eines Erstvotums einer anderen Ethikkommission)</label>
      
     <br/> 
        <!-- Art der Studie -->
  
      <div class="frages">      
        <label>Es Handelt es sich um eine : {{ Art_der_Studie }}</label>  
      </div>
      <input type="radio" id="monozentrische Studie" style="margin-left: 5px;" value="monozentrische Studie" v-model="form.Art_der_Studie"/>
      <label for="monozentrische_Studie" >monozentrische Studie</label>
      <!-- trennung --> <label for="" style="margin: 5px;">  </label>
      <input type="radio" id="multizentrische_Studie "  value="multizentrische Studie" v-model="form.Art_der_Studie" />
      <label for="multizentrische_Studie" >multizentrische Studie</label>
      <br/>     
  
     <div class="frages">
       <label> Rechtfertigung des Zugriffs auf personenbezogene Daten </label><br/><br/>
       <label> Das Forschungsinteresse für die Beantwortung der{{ Fragestellung_der_Studie }} <input type="text" placeholder="Fragestellung der Studie " v-model="form.Fragestellung_der_Studie"/> überwiegt die Interessen der betroffenen Personen an einem Ausschluss der Datenverarbeitung und stellt ein öffentliches Interesse im Forschungskontext dar. Die auszuwertenden Daten sind bereits vorhanden und die ursprüngliche Erhebung erfolgte im Rahmen der medizinischen Routineversorgung am Universitätsklinikum Frankfurt. 
  Zweckgebunden nehmen nur Personen Einsicht in die personenbezogenen Daten, die bereits zuvor (etwa anlässlich der medizinischen Routineversorgung; behandelnde Ärzte/Ärzte der behandelnden Abteilung/Fachabteilung) zur Einsicht berechtigt waren. Eine Weitergabe personenbezogener Daten an externe Stellen erfolgt nicht. 
  Es wird erwartet, dass durch die Ergebnisse die Behandlungsqualität zukünftiger Patienten verbessert wird.<br/>
  Falls ein anderer Nutzen erzielt wird, bitte hier spezifizieren{{ Nutzen_erzielt }} <input type="text" placeholder="hier spezifizieren" v-model="form.Nutzen_erzielt"/>.
  </label>
       
       <br />
       </div>
  
     <div class="frages">
       <label>Es Handelt es sich um eine retrospektive Studie (Erfassungszeitraum der Daten liegt in der Vergangenheit bis zum Zeitpunkt der Einreichung)" {{ Studie_type1 }} </label>
      </div>
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type1" />
       <label for="ja">ja</label> 
        <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
       <input type="radio" id="nein" value="nein" v-model="form.Studie_type1">
       <label for="nein">nein</label>
       <br />
     
  
      <div class="frages"> 
       <div>Es Handelt es sich um eine prospektive Studie (Erfassungszeitraum der Daten liegt in der Vergangenheit bis zum Zeitpunkt der Einreichung)" {{ Studie_type2 }}</div>
      </div>
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type2" />
       <label for="ja">ja</label>
         <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
       <input type="radio" id="nein" value="nein" v-model="form.Studie_type2">
       <label for="nein">nein</label>
       <br />
  
     <div class="frages">
       <div>Es Handelt es sich um eine  rein retrospektive Datenerhebung" {{ Datenerhebungs_type2 }}</div>
      </div> 
        <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Datenerhebungs_type2" />
         <label for="ja">ja</label>
           <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Datenerhebungs_type2">
         <label for="nein">nein</label>
         <br />
       
     <div class="frages"> 
       <div>Es Handelt es sich um eine Beobachtungsstudie(Datenerhebung von ausschließlich Routinedaten für die Forschung mit begrenztem Erfassungszeitraum)" {{ Studien_type3 }}</div>
      </div>
         <input type="radio" id="ja"  style="margin-left: 5px" value="ja" v-model="form.Studie_type3" />
         <label for="ja">ja</label>
           <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type3">
         <label for="nein">nein</label>
         <br />
      
  
     <div class="frages"> 
       <div>Es Handelt es sich um eine Registerstudie(Datenerhebung von ausschließlich Routinedaten für die Forschung mit unbegrenztem Erfassungszeitraum)" {{ Studien_type4 }}</div>
      </div>
         <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type4" />
         <label for="ja">ja</label>
           <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type4">
         <label for="nein">nein</label>
         <br />
      
     <div class="frages">
       <div>Es Handelt es sich um eine Interventionsstudie (Datenerhebung mit studienbedingten Untersuchungen / Maßnahmen mit begrenztem Erfassungszeitraum)" {{ Studien_type5 }}</div>
      </div>
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type5" />
         <label for="ja">ja</label>
          <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type5">
         <label for="nein">nein</label>
         <br />
    
     <div class="frages">
       <div>Es Handelt es sich um die Etablierung einer Biobank" {{ Studien_type6 }}</div>
      </div>
         <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type6" />
         <label for="ja">ja</label>
           <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type6">
         <label for="nein">nein</label>
         <br />
     
     <div class="frages">
       <div>Es Handelt es sich um eine Anwendungsbeobachtung / NIS nach §67 AMG" {{ Studien_type7 }}</div>
      </div>
         <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type7" />
         <label for="ja">ja</label>
         <!-- Trennung --> <label for="" style="margin: 5px;">  </label>    
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type7">
         <label for="nein">nein</label>
         <br />
     
     <div class="frages">
       <div>Es Handelt es sich um eine Studie nach Art. 74 MDR (ehemals MPG §23b)" {{ Studien_type8 }}</div>
      </div>
         <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type8" />
         <label for="ja">ja</label>
         <!-- Trennung --> <label for="" style="margin: 5px;">  </label>    
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type8">
         <label for="nein">nein</label>
         <br />
    
     <div class="frages">
       <div>Es Handelt es sich um eine Studie nach Art. 74 MDR (ehemals MPG §23b)" {{ Studien_type9 }}</div>
      </div>
         <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type9" />
         <label for="ja">ja</label>
         <!-- Trennung --> <label for="" style="margin: 5px;">  </label>    
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type9">
         <label for="nein">nein</label>
         <br />
     
     <div class="frages">
       <label> Es Handelt es sich um eine andere Studientype </label>
       <input type="text" placeholder="andere Studientype " v-model="form.andere_Studientype"/>
       <br />
     </div>
  
     <div class="frages">
       <label>Verfahren zur Aufklärung und Einholung der Einwilligung</label> 
       <input type="text" placeholder="Verfahren zur Aufklärung und Einholung der Einwilligung " v-model="form.Verfahren_zur_Aufklärung_und_Einholung_der_Einwilligung"/>
       <br />
      </div>
  
     <div class="frages">
        <label >Beschreibung der Datenquellen (Krankenakten, Fragebögen etc.)</label> 
        <input type="text" placeholder="Beschreibung der Datenquellen (Krankenakten, Fragebögen etc.) " v-model="form.Beschreibung_der_Datenquellen"/>
        <br />
      </div>
  
     <div class="frages">
       <label >Auflistung/Beschreibung der zu erfassenden Daten</label> 
       <input type="text" placeholder="Auflistung/Beschreibung der zu erfassenden Daten " v-model="form.Auflistung_Beschreibung_der_zu_erfassenden_Daten"/>
       <br />
     </div>
  
     <div class="frages">
       <label >Falls zutreffend: zeitlicher Ablauf (Termine) für den einzelnen Studienteilnehmer (Flow chart)</label> 
       <input type="text" placeholder="zeitlicher Ablauf (Termine) für den einzelnen Studienteilnehmer" v-model="form.zeitlicher_Ablauf_für_den_einzelnen_Studienteilnehmer"/>
       <br />
      </div>
  
     <div class="frages">
       <label >Voraussichtliches Ende der Datenerfassung </label> 
       <input type="date" placeholder="Voraussichtliches Ende der Datenerfassung  " v-model="form.Voraussichtliches_Ende_der_Datenerfassung" />
       <br />
      </div>
  
     <div class="frages">
       <div>Es Handelt es sich um eine Studie mit studienbedingter Strahlenbelastung?(Anwendung des Strahlenschutzgesetzes StrlSchG)" {{ Studien_type10 }} </div>
      </div>  
        <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Studie_type10" />
         <label for="ja">ja</label>
         <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Studie_type10">
         <label for="nein">nein</label>
         <br />
      
     <div class="frages">
       <div>Werden Minderjährige eingeschlossen?(Wenn ja, beachten Sie bitte, dass es für alle Zielgruppen der Vorlage einer separaten Information bedarf)" {{ Teilnahme_von_minderjährige }}</div>
      </div> 
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Teilnahme_von_minderjährige" />
         <label for="ja">ja</label>
          <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
         <input type="radio" id="nein" value="nein" v-model="form.Teilnahme_von_minderjährige">
         <label for="nein">nein</label>
         <br />
     
     <div class="frages">
       <div>Werden Nicht-Einwilligungsfähige eingeschlossen?(Wenn ja, beachten Sie bitte, dass es für alle Zielgruppen der Vorlage einer separaten Information bedarf)" {{ Teilnahme_von_nicht_einwilligungsfähige }}</div>
      </div>
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Teilnahme_von_nicht_einwilligungsfähige" />
       <label for="ja">ja</label>
        <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
       <input type="radio" id="nein" value="nein" v-model="form.Teilnahme_von_nicht_einwilligungsfähige">
       <label for="nein">nein</label>
       <br />
     
     <div class="frages"> 
       <div>Besteht ein Versicherungsschutz?" {{ Versicherungsschutz }}</div>
      </div>  
       <input type="radio" id="ja" style="margin-left: 5px" value="ja" v-model="form.Versicherungsschutz" />
       <label for="ja">ja</label>
        <!-- Trennung --> <label for="" style="margin: 5px;">  </label>
       <input type="radio" id="nein" value="nein" v-model="form.Versicherungsschutz">
       <label for="nein">nein</label>
       <br />
    
     <div class="frages">
       <label >wenn ja, Versicherungsträger und Police-Nummer:{{ Versicherungsträger_und_Police_Nummer }} </label> 
       <input type="text" placeholder="Versicherungsträger und Police-Nummer  " v-model=" form.Versicherungsträger_und_Police_Nummer "/>
       <br />
      </div>
  
     <div class="frages">
       <label >Mögliche Schlussfolgerungen: {{ Mögliche_Schlussfolgerungen }} </label> 
       <input type="text" placeholder="Mögliche Schlussfolgerungen  " v-model=" form.Mögliche_Schlussfolgerungen "/>
       <br />
      </div>
  
      
  
      <button style="background-color: rgb(51, 190, 239); color:#fff" class="btn-frages" v-on:click="weiter" type="submit" href=".\components\Details.vue">Weiter</button>
      <label for="" style="margin: 5px;">  </label>
      <button style="background-color: rgb(51, 190, 239); color:#fff" class="btn-frages" v-on:click="weiter" type="submit" href="">Speichern</button>
     
    </form>
    
  </template>
  
  <script>
  export default {
    name: "NeueAntrag",
    data() {
      return {
        form: {
          Ort: "",
          Versionnummer: 0,
          Datum: Date,
          projekttitel: "",
          Zusammenfassung_des_Projekts: "",
          Hintergrung: "",
          Wissenschaftlicher_Hintergrund: "",
          Primäre_Ziele: "",
          Sekundäre_Ziele: "",
          Primäre_Zielgröße: "",
          Sekundäre_Zielgröße: "",
          Begründung_der_Machbarkeit: "",
          Art_der_Einreichung: "ersteinreichung",
          Behandlungs_und_Forschungskontext: "",
          Art_der_Studie: "monozentrische_Studie",
          Fragestellung_der_Studie: "",
          Studie_type1: "ja",
          Studie_type2: "nein",
          Datenerhebungs_type2: "ja",
          Studien_type3:"ja",
          Studien_type4:"ja",
          Studien_type5:"ja",
          Studien_type6: "ja",
          Studien_type7: "ja",
          Studien_type8:"ja",
          Studien_type9:"ja",
          andere_Studientype: "",
          Verfahren_zur_Aufklärung_und_Einholung_der_Einwilligung:"",
          Beschreibung_der_Datenquellen:"",
          Auflistung_Beschreibung_der_zu_erfassenden_Daten:"",
          zeitlicher_Ablauf_für_den_einzelnen_Studienteilnehmer:"",
          Voraussichtliches_Ende_der_Datenerfassung: Date,
          Studien_type10:"ja",
          Teilnahme_von_minderjährige:'nein',
          Teilnahme_von_nicht_einwilligungsfähige:'nein',
          Versicherungsschutz:"ja",
          Versicherungsträger_und_Police_Nummer:"",
          Mögliche_Schlussfolgerungen:"",
          Nutzen_erzielt:"",
        },
      };
    },
    methods: {
      weiter() {
        console.warn(this.form);
      },
    },
  };
  </script>
  
  <style>
  
  .frages {
    margin-top: 10px;
     float:left;
     width:100%; /* adjust */
     padding: 1px; /*adjust*/
     margin-left: 5px;
  
  }
  
  .frages input{
  display: flex;
  height: 45px;
  width: 80%; 
  border-radius: 5px;
  border: none;
  background-color: rgb(235, 231, 231);
  padding-left: 15px;
  font-size: 16px;
  margin-top: 5px;
  }
  
  /* .frages label{
    
  } */
  
  button{
  height: 45px;
  width: 15%; 
  border-radius: 5px;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  margin-right: 3;
  }
  
  </style>
  
