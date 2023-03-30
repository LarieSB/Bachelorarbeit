<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
    <aside class="h-screen sticky top-0">
    <nav class="sidebar" :class="{close: isClose}">
            <!-- <header> -->
                <!-- <div class="image-text">
                    <span class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                        </svg>                      
                    </span> -->

                    <!-- <div class="text header-text">
                        <span class="name" style="font-size: 45px;">Neue Antrag</span> -->
                        <!-- <span class="profession">Dashboard</span> -->
                    <!-- </div> -->
                <!-- </div> -->

                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" @click="isClose = !isClose" class="w-3 h-3 toggle">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>               -->
            <!-- </header>  -->
            <div class="menu-bar">
                <div class="menu py-6">
                    <h2 class="text-3xl text-blue-700 mb-2">Neue Antrag</h2>
                    <!-- <li class="search-box">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>                      
                        <input type="text" placeholder="search...">                            
                    </li> -->
                    <ul class="menu-links border rounded-md">                       
                        
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Allgemeine Angabe' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>                              
                                <span class="text nav-text">Allgemein</span>                             
                            </router-link>
                        </li>  
                        <br>                      
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Charakterisierung_der_Studie' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                </svg>                              
                                <span class="text nav-text">Charakterisierung</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Beteiligte Personen Institutionen' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
</svg> 
                                <span class="text nav-text">Beteiligte </span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Wissenschaftlicher_Hintergrund_und_Ziele' }" href="#">
                            <svg enable-background="new 0 0 30 30" height="30px" id="Capa_1" version="1.1" viewBox="0 0 30 30" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M23,12.7c-0.4,0.1-0.6,0.6-0.4,1c0.5,1.2,0.7,2.5,0.7,3.8c0,6-4.9,10.8-10.8,10.8S1.7,23.5,1.7,17.5  S6.5,6.7,12.5,6.7c1.1,0,2.3,0.2,3.4,0.5c0.4,0.1,0.8-0.1,0.9-0.5c0.1-0.4-0.1-0.8-0.5-0.9c-1.2-0.4-2.5-0.6-3.8-0.6  c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3c0-1.5-0.3-3-0.8-4.4C23.9,12.8,23.4,12.6,23,12.7z M12.5,15  c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4c0-0.4-0.3-0.8-0.8-0.8S15,17.1,15,17.5  c0,1.4-1.1,2.5-2.5,2.5S10,18.9,10,17.5C10,16.1,11.1,15,12.5,15z M16.2,11.1c0.2-0.4,0-0.8-0.4-1c-1-0.5-2.2-0.7-3.3-0.7  C8,9.4,4.3,13,4.3,17.5s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2c0-1.2-0.2-2.3-0.7-3.3c-0.2-0.4-0.6-0.6-1-0.4c-0.4,0.2-0.5,0.6-0.4,1  c0.4,0.9,0.6,1.8,0.6,2.7c0,3.7-3,6.7-6.7,6.7s-6.7-3-6.7-6.7s3-6.7,6.7-6.7c1,0,1.9,0.2,2.7,0.6C15.6,11.6,16,11.4,16.2,11.1z   M29.8,6.1c-0.1-0.3-0.3-0.5-0.6-0.5l-4.1-0.7l-0.7-4.1c0-0.3-0.2-0.5-0.5-0.6c-0.3-0.1-0.6,0-0.8,0.2l-4.9,4.9  c-0.2,0.2-0.3,0.4-0.2,0.7l0.8,4.2l-6.3,6.3c0,0-0.1,0-0.1,0c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1  c0,0,0,0,0,0l6.4-6.4l4.1,0.8c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.2l4.9-4.9C29.8,6.7,29.9,6.4,29.8,6.1z M19.6,6l3.6-3.6l0.5,2.8  l-3.5,3.5L19.6,6z M24,10.4l-2.7-0.5l3.5-3.5l2.7,0.5L24,10.4z" fill="#262324"/></svg>                             
                                <span class="text nav-text"> Hintergrund & Ziele</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Fallzahlen_und_Biometrie' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>                                       
                                <span class="text nav-text">Fallzahlen & Biometrie</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Kohorte' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>                       
                                <span class="text nav-text">Kohorte</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Benoetigte Daten' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>                                               
                                <span class="text nav-text">Benötigte Daten</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Einwilligung' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>                              
                                <span class="text nav-text">Einwilligung</span>                             
                            </router-link>
                        </li>                      
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Rechnung_und_Finanzierung' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>                             
                                <span class="text nav-text">Rechnung</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Nutzen_Risiko_abwägung' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
</svg>                              
                                <span class="text nav-text">Nutzen-Risiko</span>                             
                            </router-link>
                        </li> 
                        <br>                       
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Datenschutz_massnahmen' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>                              
                                <span class="text nav-text">Datenschutz</span>                             
                            </router-link>
                        </li>
                        <br>
                        <li class="nav-link">
                            <router-link exact :to="{ name: 'Nutzungsordnung' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>                             
                                <span class="text nav-text">Nutzungsordnung</span>                             
                            </router-link>
                        </li>
                        <!-- <li class="nav-link">
                            <router-link exact :to="{ name: 'Impressum' }" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7M5 19h14" />
                                </svg>                             
                                <span class="text nav-text">Impressum</span>                             
                            </router-link>
                        </li> -->
                    </ul>
                </div>
            </div>
       
        </nav>
    </aside>
</template>
<script setup>
import { ref } from 'vue';

const isClose = ref(false)
</script>