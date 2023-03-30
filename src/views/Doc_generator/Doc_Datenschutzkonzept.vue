<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- doc template -->
<template lang="">
    <div class="shadow px-4 py-6 mt-12">
        <h2 class="text-2xl flex justify-between">
            <span>Datenschutzkonzept</span>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2 rounded text-sm" @click="generatePdf" >PDF Download</button>
            <button class="border border-blue-500 bg-sky-500 text-white px-4 py-2 rounded text-sm" @click="downloadDoc"> Word Download</button>
        </h2><br />
        <div ref="Content" class="allgemeine border-b border-b-zinc-300 ">
            <h2 class="text-xl flex justify-between">
                <span><h1> Datenschutzkonzept für {{jsonAllgemeine.Projekttitel}}</h1></span>
                
            </h2><br>
            <p>Ethik-Votum:  {{jsonAllgemeine.Nummer_Ethikvotum}} </p> 
                <p>Studientyp: {{jsonCharakterisierung.Studientyp_zeitlich }}</p>
            <p>Erhebungszeitraum: {{jsonKohorte.Zeitraum_der_Datenerfassung}}</p>
<p> Projektlaufzeit: Die vorgesehene Projektlaufzeit beträgt {{jsonAllgemeine.Projektlaufzeit}} Monate.</p>
<p> Version: {{jsonAllgemeine.Versionnummer}}-{{jsonAllgemeine.Datum}} </p>

    <h2>1.	Darstellung des Forschungsvorhabens</h2><br>

    <h3> 1.1 Ziel des Forschungsvorhabens</h3> <br>
    {{jsonHintergrund.Primäre_Ziele}}<br>
    {{jsonHintergrund.Sekundäre_Ziele}}<br>
    {{jsonHintergrund.primäre_Zielgröße}}<br>
    {{jsonHintergrund.sekundäre_Zielgröße}}<br><br>

    <h3>1.2 Behandlungs- und Forschungskontext</h3>
    <p>Diese Studie ist {{jsonCharakterisierung.Studientyp_örtlich }} und retrospektiv. 

Sie umfasst ausschließlich die Analyse von im Behandlungskontext erhobenen Daten.<br>
Es werden {{jsonNutzenRisiko.Forschungdaten_in_den_Behandlungskontext}} Daten oder Ergebnisse in den Behandlungskontext zurückgegeben. <br>
{{jsonNutzenRisiko.Erläuterung}}</p> 

<h3>1.3 Rechtfertigung des Zugriffs auf personenbezogene Daten</h3>

<p>Das Forschungsinteresse für die Beantwortung der {{jsonHintergrund.Fragestellung_der_Studie}} überwiegt die Interessen der betroffenen Personen an einem Ausschluss der Datenverarbeitung und stellt ein öffentliches Interesse im Forschungskontext dar. Die auszuwertenden Daten sind bereits vorhanden und die ursprüngliche Erhebung erfolgte im Rahmen der medizinischen Routineversorgung am Universitätsklinikum Frankfurt. <br>
Zweckgebunden nehmen nur Personen Einsicht in die personenbezogenen Daten, die bereits zuvor (etwa anlässlich der medizinischen Routineversorgung; behandelnde Ärzte/Ärzte der behandelnden Abteilung/Fachabteilung) zur Einsicht berechtigt waren. Eine Weitergabe personenbezogener Daten an externe Stellen erfolgt nicht. <br>Es wird erwartet, dass durch die Ergebnisse die Behandlungsqualität zukünftiger Patienten verbessert wird.
</p>

<h3>1.4 Studienaufbau und -design</h3>
<p> Die Studie ist eine nicht-interventionelle retrospektive {{jsonCharakterisierung.Studientyp_örtlich }}{{jsonCharakterisierung.Studientyp_qualitativ }}.</p> 
<p>{{jsonKohorte.Rektrutierungsmaßnahmen }}</p>
{{jsonKohorte.zeitlicher_Ablauf }}<br>

<h3>1.5 Methodik</h3><br>

{{jsonDatenschutz.anonymisierten_oder_pseudonymisierten}}
<br>
<h2>2.	Organisatorische Struktur</h2><br>
<h3>2.1 Verantwortlicher </h3>
<p>Das Forschungsvorhaben ist ein wissenschaftliches Projekt der <br><br>
<strong>Johann-Wolfgang-Goethe-Universität Frankfurt (GU)</strong><br>
Anstalt des öffentlichen Rechts<br>
Theodor-W.-Adorno-Platz 1<br>
60323 Frankfurt am Main<br>
Tel.: 069 798 0 <br>
Internet: <strong><a href="www.uni-frankfurt.de">www.uni-frankfurt.de</a></strong><br>
und wird gemeinsam mit dem gemeinsamen Verantwortlichen im Sinne des Art. 26 DSGVO<br>

<strong>Universitätsklinikum Frankfurt (UKF)</strong><br>
Anstalt des öffentlichen Rechts<br>
Theodor-Stern-Kai 7<br>
60590 Frankfurt am Main<br>
Telefon: 069 6301 0<br>
Internet:<strong><a href=" www.kgu.de">www.kgu.de</a></strong><br>
durchgeführt. 
</p>

<h3>2.2 Datenschutzbeauftragte und zuständige Aufsichtsbehörde</h3> <br>
<strong>Herr Gerhard Leuck (GU)</strong><br>
Robert-Mayer-Straße 11 – 15<br>
60325 Frankfurt am Main<br>
Telefon: 069 798 28351<br>
E-Mail: <strong><a href="dsb@uni-frankfurt.de">dsb@uni-frankfurt.de</a></strong><br>
Internet: <strong><a href="www.uni-frankfurt.de/datenschutzbeauftragter">www.uni-frankfurt.de/datenschutzbeauftragter</a></strong><br><br>

<strong>Herr Dr. Ralf W. Schadowski (UKF)</strong><br>
Theodor-Stern-Kai 7<br>
60590 Frankfurt am Main<br>
Telefon: 069 6301 7235<br>
E-Mail: <strong><a href="datenschutz@kgu.de">datenschutz@kgu.de</a></strong><br>
Internet: <strong><a href="www.kgu.de/ueber-uns/datenschutzbeauftragter">www.kgu.de/ueber-uns/datenschutzbeauftragter</a></strong><br><br>

<strong>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</strong><br>
Postfach 3163<br>
65021 Wiesbaden<br>
Telefon: 0611 1408 0
<br>
<h3>2.3 Beteiligte Institutionen</h3> 
<p><strong> Datenintegrationszentrum (DIZ)</strong><br>
Dezernat 7 <br>
Universitätsklinikum Frankfurt <br>
Theodor-Stern-Kai 7 <br>
60590 Frankfurt <br><br>
{{jsonBeteiligte.Beteiligte_Institution}} 
</p>
<h2>2.4 Organisatorische Abhängigkeiten</h2><br>
<h3>2.4.1 Forschungsteam</h3><br>

<table>
  <tr>
    <tr>
    <th>Name</th>

    <th>Position in der Klinik/Fachbereich/Institut</th>

    <th>Rolle im Forschungsteam</th>
  </tr>
  
  <tr>
    <td>{{jsonBeteiligte.Akademischer_Titel}} <br> {{jsonBeteiligte.Vorname}}{{jsonBeteiligte.Nachname}} <br>{{jsonBeteiligte.E_Mail}} <br>{{jsonBeteiligte.Telefonnummer}}</td>
    <td>{{jsonBeteiligte.Funktion_in_der_Abteilung}} <br>{{jsonBeteiligte.Abteilung}} <br>{{jsonBeteiligte.Institution}}</td>
    <td>{{jsonBeteiligte.Funktion_im_Projekt}}</td>
   </tr>
  </tr>
</table>
<br>
<h3>2.4.2 Datenintegrationszentrum</h3>
<p>Das Datenintegrationszentrum ist eine Abteilung des Dezernat 7 (Informations- und Kommunikations¬technologie). Es recherchiert die Daten aus den Patienteninformationssystemen, die strukturiert erhoben werden können und für die Studie benötigt werden. Es organisiert die Erstellung und Übermittlung der Pseudonymisierungsliste für die hier beschriebene retrospektive Studie.
Die Rahmenbedingungen sind im <strong><a href="Datenschutzkonzept des Datenintegrationszentrums">Datenschutzkonzept des Datenintegrationszentrums</a></strong> dargestellt.
</p> 
<h3>2.4.2 Treuhanddienst</h3>
<p>Die Erstellung und Verwaltung der Pseudonyme erfolgt durch die Treuhandstelle. Bis zur Einrichtung der unabhängigen Organisationseinheit Treuhandstelle übernimmt das DIZ diese Tätigkeit kommissarisch. 
Die Aufgabe und damit einhergehenden Verpflichtungen der Treuhandstelle sind im Dokument  <strong><a href="Treuhandstelle">Treuhandstelle</a></strong>beschrieben.
</p> 

<h3>2.5 Finanzierung der Studie</h3><br>
Es erfolgt eine finanzierung der Studie durch {{Finanzierung_der_Studie}} <br>
{{jsonRechnung.Angaben_zur_externen_Finanzierung}} <br><br>

<h2>3.	Datenschutzrelevante Rahmenbedingungen</h2><br>
<h3> 3.1 Grundlegende Rahmenbedingungen</h3>
<p>Die Verarbeitung der Daten erfolgt auf der Grundlage der geltenden Datenschutzgesetze und zu wissenschaftlichen Zwecken.
<strong><a href="§ 24 Abs. 1 HDSIG">§ 24 Abs. 1 HDSIG</a></strong> i.V.m. <strong><a href="§ 12 HKHG">§ 12 HKHG</a></strong> gestattet die Verarbeitung von Patientendaten für Forschungszwecke ohne Einwilligung, wenn die Verarbeitung zu diesen Zwecken erforderlich ist und die Interessen des Verantwortlichen an der Verarbeitung die Interessen der betroffenen Person an einem Ausschluss der Verarbeitung überwiegen.
Für die Studie werden ausschließlich Routinedaten aus dem Behandlungskontext im Universitätsklinikum Frankfurt am Main verarbeitet. 
</p>
<p>Es werden keine zusätzlichen Daten erhoben, die der Behandlungsdokumentation zugeführt werden.  Die Studie hat keine direkte Rückwirkung auf die Behandlung einzelner Patient*innen. 
Das Forschungsinteresse für die Beantwortung der {{jsonHintergrund.Fragestellung_der_Studie}} überwiegt dabei das Interesse der Person zum Ausschluss ihrer Daten, zumal diese ausschließlich pseudonymisiert in die Auswertung eingehen und anonymisiert veröffentlicht werden.
</p>

<h3>3.2 Umfang der Verarbeitung von Daten für die Studie</h3><br>

<h4>3.2.1 Betroffene Personen</h4>
<p>Für die Studie werden Daten folgender Personengruppen erhoben:
{{jsonIDDaten}} <br>
<br>
{{jsonNichtidDaten}} <br>
<br>
{{jsonExterneDaten}}</p> <br>
Bei den Personen handelt es sich um {{jsonKohorte.betroffenen_Personen2}} im Sinne der EU-DSGVO. 
<br>
<h4>3.2.2 Kohorte und Ein- und Ausschlusskriterien</h4>
<p>Die Kohorte ist folgendermaßen definiert: <br>
{{jsonKohorte.Definitionskriterien}} 
<p>Folgende Einschlusskriterien sind definiert:</p>
{{jsonKohorte.Einschlusskriterien}} <br>
<p>Folgende Ausschlusskriterien sind definiert:</p>
{{jsonKohorte.Ausschlusskriterien}}
</p>

<h4> 3.2.3 Personenbezogene identifizierende Daten</h4>
<p> Für die Studie werden teilweise / ausschließlich pseudonymisierte Daten verwendet, die vom Datenintegrationszentrum zur Verfügung gestellt werden.<br>
Für die manuelle Recherche medizinischer Daten aus {{jsonIDDaten.Woher_stammen_die_Daten}} werden folgende personenbezogenen identifizierenden Daten benötigt: {{jsonIDDaten.Bezeichnung}}
</p>

<h4> 3.2.4 Personenbezogene medizinische Daten</h4><br>
Für die Studie werden folgende medizinische Daten erhoben: <br>
Liste der Parameter Tabelle <br>

<h4> 3.2.5 Fallzahlen</h4><br>
Es wird erwarte, {{jsonFallzahlen.Fallzahlen}} Fälle in die Studie einschließen zu können. <br>

<h3>3.3 Erhebung von personenbezogenen Daten</h3><br>
<h4>3.3.1 Datenantrag</h4>

<p>Über das <strong><a href="Antrags-Portal">Antrags-Portal</a></strong> wird ein Antrag zur Datenrecherche und Anlage des Forschungsdatenverzeichnisses an das Datenintegrationszentrum gestellt. </p> 

<h4>3.3.2 Datenrecherche über das Datenintegrationszentrum</h4> 

<p>Das Datenintegrationszentrum recherchiert alle benötigten Daten aus den klinischen Systemen / die Daten aus den klinischen Systemen, soweit dies von Seiten der Software möglich ist. 
Die pseudonymisierten Daten werden im {{jsonFallzahlen.Daten_Format3}} den Forscher*innen über das Laufwerk U:\KliFo\...\{{jsonAllgemeine.Nummer_Ethikvotum}} zur Verfügung gestellt. Es gelten die Vorgaben der funktionellen Einheit „Datenrecherche“ des Datenintegrationszentrum.
</p> 
<h4>3.3.3 Manuelle Datenrecherche</h4> 
<p>Zur Erhebung weiterer Parameter, die manuell aus den klinischen Systemen {{jsonNichtidDaten.Woher_stammen_die_Daten}}erhoben werden müssen, stellt das Datenintegrationszentrum über das Laufwerk U:\KliFo\...\{{jsonAllgemeine.Nummer_Ethikvotum}}\PS eine passwortgeschützte Pseudonymisierungsliste zur Verfügung. 
Mit dieser Liste können die Patient*innen in den klinischen Systemen identifiziert werden. Die Daten werden manuell aus folgenden Dokumenten erhoben:{{jsonNichtidDaten.Wo_genau}}
</p> 
<p>Die Erhebung erfolgt durch  {{jsonNichtidDaten.Wer_erhebt}}. <br>
Die Studie wird im Studienkatalog in Orbis registriert. Alle Patienten, die in die Studie eingeschlossen werden, werden der Studie {{jsonAllgemeine.Projekttitel}} im Orbis-Formular “Studienteilnahme” zugeordnet.
</p> 

<h3>3.4 Speicherung personenbezogener Daten</h3> <br>
<h4>3.4.1 Verzeichnisse</h4>
<p>Die Datenspeicherung der pseudonymisierten Daten erfolgt im Verzeichnis U:\KliFo\...\{{jsonAllgemeine.Nummer_Ethikvotum}}. 
Die Speicherung der Pseudonymisierungsliste erfolgt im Verzeichnis U:\KliFo\...\{{jsonAllgemeine.Nummer_Ethikvotum}}\PS </p> 

<h4>3.4.2 Datenformat</h4>
<p>Die medizinischen Daten werden während der Erhebung in folgendem Format gespeichert:{{jsonDatenschutz.Daten_erfassten}}</p>

<h4>3.4.3 Statistische Auswertung</h4> 
<p>Die Daten werden vor der Weitergabe an den Statistiker für die Auswertung in folgendes Format transformiert: {{jsonFallzahlen.Daten_Format3}}
Die statistische Auswertung der Daten erfolgt im {{jsonFallzahlen.Statistische_auswertung}}. Hierfür werden die pseudonymisierten medizinischen Daten mittels {{jsonFallzahlen.Mittel}} an {{jsonFallzahlen.Person}} übertragen. Die Pseudonymtabelle darf keinesfalls mit übertragen werden. <br>
Die Daten werden unmittelbar nach Übertragung aus der {{jsonFallzahlen.ort2}} in dem Übertragungsmedium gelöscht.<br>
Die Daten werden für die statistische Auswertung folgendermaßen gespeichert: {{jsonFallzahlen.statistische_auswertung2}}.
</p> 
<h4>3.4.4 Archivierung</h4>
<p>Nach der Verarbeitung werden die Daten in das Forschungsdatenlaufwerk für die Archivierung mit {{jsonFallzahlen.ort2}} zurück transferiert. Lokale Kopien und Kopien im Übertragungsmedium werden gelöscht. 
<br> Die Archivierung der Daten im Datenintegrationszentrum ist im Datenschutzkonzept des Datenintegrationszentrums beschrieben.
</p>
<h3>3.5 Nutzung der personenbezogenen Daten</h3>
<p>Die personenbezogenen Daten werden ausschließlich für die oben beschriebene Studie durch die beteiligten Personen gemäß den festgelegten Rollen und Berechtigungen verarbeitet. </p> 
<h3>3.6 Anonymisierung und Löschung von personenbezogenen Daten</h3>
<p>Die personenbezogenen Daten werden vor der Publikation auf Seiten der Forscher*innen anonymisiert. Dies geschieht nachweislich durch Löschen der Pseudonymisierungstabellen. Die Löschung wird mit dem Datenintegrationszentrum koordiniert. <br>
Die Daten werden zur Archivierung an das DIZ übergeben. <br>
Alle für die Auswertung angefertigten Kopien und Kopien der Daten in den Übertragungsmedien werden unmittelbar nach Erfüllung des Zweckes gelöscht. <br>
Die Archivierung der Daten im Datenintegrationszentrum ist im Datenschutzkonzept des Datenintegrationszentrums beschrieben.
</p>

<h2>4.	Grundlagen zum Schutz der Rechte und Freiheiten der betroffenen Personen</h2><br>
<h3>4.1 Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</h3>
<p>Die Verarbeitung der personenbezogenen Daten ist rechtmäßig und erfolgt nach Treu und Glauben. Der Grundsatz der Transparenz ist gewahrt, alle Informationen und Mitteilungen zur Verarbeitung der Daten ist leicht zugänglich und verständlich und in klarer und einfacher Sprache abgefasst.</p>
<h3>4.2 Zweckbindung</h3>
<p>Die Datenverarbeitung erfolgt ausschließlich für den genannten Studienzweck. Eine Weitergabe der Daten an andere Forschungsprojekte erfolgt nicht.</p>
<h3>4.3 Datenminimierung</h3>
<p>Es werden ausschließlich die o.a. Daten verarbeitet, die für die Beantwortung der Forschungsfragen notwendig sind.</p> 
<h3>4.4 Richtigkeit</h3>
<p>Die Daten werden bei der Erhebung auf Richtigkeit geprüft.</p>
<h3>4.5 Speicherbegrenzung</h3>
<p>Die Daten werden entsprechend Kapitel 3.6 anonymisiert und gelöscht, wenn Sie für die Verarbeitung nicht mehr erforderlich sind.</p>
<h3>4.6 Integrität und Vertraulichkeit</h3>
<p>Die Speicherung der personenbezogenen Daten erfolgt ausschließlich auf dem Laufwerk U:\KliFo\...\{{jsonAllgemeine.Nummer_Ethikvotum}}. Durch die <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=303835">Zugriffsregelungen</a></strong> ist sichergestellt, dass nur befugte Personen Zugriff auf die Daten erhalten. Es gelten die TOMs des DICT.</p>
<h3>4.7 Abschätzung der Risiken für die Rechte und Freiheiten natürlicher Personen</h3>
<p>Das vorliegende Datenschutzkonzept und die zugrundeliegenden Konzepte (Datenschutzkonzept des Datenintegrationszentrums, IT-Sicherheitskonzept des Datenintegrationszentrums, Zugriffs-regelungen für das Forschungslaufwerk, generelle Regelungen für Datenschutz und IT-Sicherheit) wurden vom zuständigen Datenschutzbeauftragten geprüft.</p>

<h2>5.	Rechte der betroffenen Personen</h2><br>
<h3>5.1 Transparenz </h3>
<p>Die Studie wurde durch die Ethik-Kommission der Universitätsklinik Frankfurt begutachtet. Das Ethik-Votum liegt vor: {{jsonAllgemeine.Nummer_Ethikvotum}} und ist im Anhang beigefügt.
Die Verarbeitung der personenbezogenen Daten im Rahmen dieses Forschungsprojektes ist in diesem Datenschutzkonzept entsprechend den Anforderungen gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/12.html">Art. 12 DSGVO</a></strong> dargestellt.</p>
<h3>5.2 Informationspflicht </h3>
<p>Die Daten wurden im Behandlungskontext der Klinik {{jsonBeteiligte.Beteiligte_Institution}} erhoben. Die Klinik ist Teil der Universitätsklinik Frankfurt, deren Aufgabe unter anderem die klinische Forschung umfasst. 
Alle Informationen zur Verarbeitung personenbezogenen Daten sind am UKF leicht zugänglich, verständlich sowie in klarer und einfacher Sprache abgefasst. Die Datenverarbeitung ist für die betroffene Person gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/13.html">Art. 13 DSGVO</a></strong> nachvollziehbar sein. Über diesen Tatbestand informiert die <strong><a href="https://www.kgu.de/">Homepage der Universitätsklinik</a></strong>. </p>
<h3>5.3 Auskunft </h3>
<p>Patient*innen können beim Verantwortlichen Auskunft gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/15.html">Art. 15 DSGVO</a></strong> über die verarbeiteten personenbezogenen Daten beantragen. Die Studienleitung stellt die gewünschten Daten ggf. unter Einbeziehung des Datenintegrationszentrums zusammen. Der Datenschutzbeauftragte wird über das Ersuchen informiert und kontrolliert den Vorgang im Rahmen seiner Aufgaben und Pflichten.  </p>
<h3>5.4 Löschung und Recht auf Vergessen werden </h3>
<p>Die Löschung der personenbezogenen Daten gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/17.html">Art. 17 DSGVO</a></strong> kann von den Betroffenen bei der Studienleitung beantragt werden. 
Unmittelbar vor Publikation werden die Daten in der Studieninstitution anonymisiert, ein Personenbezug ist nicht mehr herstellbar. </p>
<h3>5.5 Einschränkung der Verarbeitung</h3>
<p>Eine Einschränkung der Verarbeitung ihrer personenbezogenen Daten kann die betroffene Person gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/18.html">Art. 18 DSGVO</a></strong> beim Verantwortlichen beantragen. Die Studienleitung entfernt daraufhin die entsprechenden Daten aus dem Forschungsdatensatz oder anonymisiert entsprechend den Vorgaben.</p>
<h3>5.6 Recht auf Datenübertragbarkeit </h3>
<p>Das Recht auf Datenübertragbarkeit kann bei dem Verantwortlichen gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/20.html">Art. 20 DSGVO</a></strong> geltend gemacht werden. Die Studienleitung sorgt daraufhin für die Bereitstellung der Daten in einem geeigneten Format.</p>
<h3>5.7 Widerspruchsrecht</h3>
<p>Betroffene Personen können bei dem Verantwortlichen ihr Recht auf Widerspruch gegen die Verarbeitung gemäß <strong><a href="https://dejure.org/gesetze/DSGVO/21.html">Art. 21 DSGVO</a></strong> erklären. Die Studienleitung sorgt in dem Fall für die Löschung der Daten aus dem Forschungslaufwerk.</p>
<h3>5.8 Einschränkungen der Rechte betroffener Personen</h3>
<p>Die in den <strong><a href="https://dejure.org/gesetze/DSGVO/15.html">Art. 15,</a></strong><strong><a href="https://dejure.org/gesetze/DSGVO/16.html">16,</a></strong><strong><a href="https://dejure.org/gesetze/DSGVO/18.html">18 und </a></strong><strong><a href="https://dejure.org/gesetze/DSGVO/21.html">Art. 21 DSGVO</a></strong> vorgesehenen Rechte der betroffenen Person sind gemäß <strong><a href="https://www.rv.hessenrecht.hessen.de/bshe/document/jlr-DSIFGHEpP24">Art. 24 Abs. 2 HDSIG</a></strong> insoweit beschränkt, als diese Rechte voraussichtlich die Verwirklichung des Forschungszweckes unmöglich machen oder ernsthaft beinträchtigen und die Beschränkung für die Erfüllung des Forschungszweckes notwendig ist. 
Das Recht auf Auskunft nach <strong><a href="https://dejure.org/gesetze/DSGVO/15.html">Art. 15 DSGVO</a></strong> besteht darüber hinaus nicht, wenn die Daten für Zwecke der wissenschaftlichen Forschung erforderlich sind und die Auskunftserteilung einen unverhältnismäßigen Aufwand erfordern würde.</p> 

<h2>6.	Organisatorische Maßnahmen</h2>
<p>Für die organisatorischen Maßnahmen gelten die Regelungen des Universitätsklinikums Frankfurt.</p> 
<h3>6.1 Gremien und Funktionen</h3><br>
Die Gremien und Funktion sind in der <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=288619">Zugriffs- und Nutzungsordnung zur Nutzung von Daten und Bioproben am Universitätsklinikum Frankfurt</a></strong> beschrieben. Die Funktion innerhalb des DIZ sind in den Dokumenten <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=300224">Transferstelle</a></strong> und <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=303875">Datenrecherche</a></strong> beschrieben.
<br>
<h3>6.2 Interne Regelungen</h3><br>
Es gelten folgende Richtlinien (Policies) und Dienstanweisungen (SOPs) für Beschäftigte am Forschungsvorhaben: <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=288619">SOP Forschung mit klinischen Daten</a></strong>
<br>
<h3>6.3 Zugriffregelungen</h3><br>
Für den Zugriff auf die Daten werden folgende Berechtigungen benötigt:<br>
•	Zugriff auf das KliNet<br>
o	Es gilt das <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=299854">INF-Konzept Benutzeraccounts</a></strong>.<br>
o	Die ärztlichen Forscher*innen der Forschenden Einrichtung haben zur Erfüllung ihrer klinischen Tätigkeiten einen Zugriff auf das KliNet.<br>
o	Der / die Doktorand*in erhält einen Zugriff auf das KliNet auf Antrag beim Dezernat 7. <br>
•	Zugriff auf das Forschungslaufwerk <br>
o	Der Zugriff auf das Forschungslaufwerk wird über Antragsportal ProSkive beantragt. <br>
o	Es gelten die Regelungen aus dem <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=303835">Berechtigungskonzept Forschungslaufwerk</a></strong><br><br>

•	Zugriff auf die Primärsysteme.<br>
o	Orbis: <br>
	Die ärztlichen Forscher*innen der Forschenden Einrichtung haben zur Erfüllung ihrer klinischen Tätigkeiten einen Zugriff auf Orbis.<br>
	Der / die Doktorand*in erhält einen Zugriff auf Orbis auf Antrag. Dem Antrag muss die Verpflichtungserklärung, das Datenschutzkonzept und die Freigabe durch den Datenschutz beigefügt werden.<br>
	Es gelten folgende Regelungen: Dienstanweisung Zugriff Orbis.<br>
o	Andere Systeme: <br>
	Die ärztlichen Forscher*innen …<br>
	Der / die Doktorand*in erhält einen Zugriff …
<br>
<h3>6.4 Nutzung von personenbezogenen Daten</h3><br>
Die grundsätzlichen Regelungen zur Nutzung personenbezogener Daten sind in der <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=288619">Zugriffs- und Nutzungsordnung zur Nutzung von Daten und Bioproben am Universitätsklinikum Frankfurt</a></strong> dargestellt.
<br> Für die Durchführung der Pseudonymisierung ist bis zur Einrichtung einer Treuhandstelle das Datenintegrationszentrum kommissarisch zuständig. 
<br>
<h3>6.5 Auswertung von personenbezogenen Daten</h3><br>
Für die Auswertung der Daten ist die Studienleitung verantwortlich. <br>
Die Speicherung und Übertragung der Daten ist in 3.4.3 dargestellt. <br>
Die statistische Auswertung erfolgt mit folgenden Software-Programmen: {{jsonFallzahlen.Daten_Format3}} <br>
Die Auswertung der Daten erfolgt durch folgende Personen aus 2.3.1: {{jsonBeteiligte.Akademischer_Titel}} <br> {{jsonBeteiligte.Vorname}}{{jsonBeteiligte.Nachname}} <br>

<h3>6.6 Räumliche Maßnahmen</h3><br>

Die personenbezogenen Daten dürfen ausschließlich in den Räumlichkeiten der {{jsonBeteiligte.Beteiligte_Institution}} verarbeitet werden. Eine Mitnahme der Daten außerhalb des Geltungsbereichs ist nicht zulässig.
Es gelten die Zugangsregelungen des Universitätsklinikums Frankfurt.
<br>
<h3>6.7 Personelle Maßnahmen</h3><br>
Alle am Forschungsvorhaben beteiligten Personen sind mit dem Dokument „<strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=87837">Verpflichtung zur Einhaltung der geltenden Datenschutzgesetze</a></strong>“ verpflichtet und entsprechend unterwiesen. Es gelten die Regelungen zum <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=288526">Umgang mit Verpflichtungserklärungen</a></strong>.<br><br>

<h2>7.	Technische Maßnahmen</h2> 
<p>Es gelten die <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfolder.aspx?folderid=39937">Regelungen zur IT-Sicherheit</a></strong>, die <strong><a href="C:\Users\kulicke\AppData\Local\Microsoft\Windows\INetCache\Content.Outlook\GES0EWCH\ROXTRA ID">technisch und organisatorischen Maßnahmen</a></strong> (TOM) des DIZ und die <strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=55938">IT-Sicherheits- und Datenschutzrichtlinie (DICT)</a></strong> des Universitätsklinikums Frankfurt. Für die Pseudonymisierung wird auf das<strong><a href="https://roxtra.kgu.de/Roxtra/doc/showfile.aspx?fileid=302581">Pseudonymisierungskonzept</a></strong> verwiesen. </p>
  
  <h2>8. Anhang</h2>   
  1.	Kopie des Ethikvotums<br>
2.	Antrag auf Einrichtung eines Forschungslaufwerks (U:\KliFo)<br>
3.	Vorbereitetes Löschprotokoll der Pseudonymtabelle<br>
4.	Verfahrensverzeichnis gemäß Art. 30 DSGVO<br>
5.	Tabelle der benötigten Parameter (s. 3.2.3 und 3.2.4)<br>
6.	Zustimmung der weiteren beteiligten Kliniken zur Datennutzung<br>
7.	Kopie der Verpflichtungserklärung nach StGB 203 <br>
8.	Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO <br>
9.	Vorbereitetes Protokoll zur Übergabe von vorhandenen Daten an das Datenintegrationszentrum

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
        jsonRechnung: null
        }
    },

    methods: {
        // pdf generator
        generatePdf(){
            const pdfContent = this.$refs.Content.innerText;
            const documentDefinition = {
                content: pdfContent,
            };
            pdfMake.createPdf(documentDefinition).download('Datenschutzkonzept.pdf');
        },
        // word generator
        downloadDoc() {
      const content = this.$refs.Content.innerHTML;
      const doc = new Blob(['<html><head><meta charset="UTF-8"></head><body>' + content + '</body></html>'], {type: 'application/msword'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(doc);
      link.download = 'Datenschutzkonzept.doc';
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
    },
}
</script>