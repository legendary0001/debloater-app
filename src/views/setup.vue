<template>
  <ion-page>
    <ion-header :fullscreen="true">
      <ion-toolbar>
        <ion-title class="top">Setup Screen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <div id="container">
        <div class="info">
          <title1>
            <ion-icon :icon="informationCircleSharp" size="large"></ion-icon>
            <strong>Info</strong>
          </title1>
          <ul id="text1">
            <li>
              For devices without root access, usb or wireless debugging is required to uninstall bloatware apps or
              disable blotware system apps.
            </li>

            <li>
              This app doesn't collect any data from your device
            </li>
          </ul>
        </div>


        <div class="dropdown-div">
          <button class="dropdown-button" ref="dropdownButton" @click="toggleDropdown">
            <div class="debug-icon-div1">

              <ion-icon :icon="chevronForwardCircleOutline" size="25px" class="dropd-icon"></ion-icon> <span
                id="text">First Enable Developer Mode</span>
              <svg viewBox="0 4 24 16" width="25" height="25">
                <path fill="0000" d="M5.5 8.5L12 15.25L18.5 8.5H5.5Z" />
              </svg>
            </div>
          </button>
          <div v-if="showDropdown" class="dropdown-content">
            <p>
              To enable Developer Mode:
            </p>
            <ul>
              <li>Go to Settings > About phone > Build number</li>
              <li>Tap Build number 7 times</li>

            </ul>
            <div class="drop-buttons">
              <button class="opensettings" @click="openaboutphone">Go to Settings</button>
              <button class="closebutton" @click="toggleDropdown">Close</button>
            </div>
          </div>
        </div>

        <div class="debugging-options">
          <div class="debug-text">
            <div class="debug-icon-div">
              <ion-icon :icon="chevronForwardCircleOutline" class="debug-icon"></ion-icon>
              <span id="text">Select between USB and Wireless Debugging</span>
            </div>
            <select style="float:left;" @change="showMe(selectedOption)" v-model="selectedOption"
              class="debugging-dropdown">
              <option value="none">Select an option</option>
              <option value="usb">USB debugging</option>
              <option value="wireless">Wireless debugging</option>
            </select>
          </div>
        </div>
        <div v-if="selectedOption === 'none'"></div>
        <div class="card1">
          <h3>USB Debugging Instructions:</h3>
          <ul>
            <li style="text-align: center; font-weight: bold;"  >Requirements: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill:#3DDC84; vertical-align: bottom;" viewBox="0 0 918.6 515.1" enable-background="new 0 0 918.6 515.1"><g id="XMLID_1_"><path class="st0" d="M918.6 515.1h-918.6c14.7-155.7 103.7-288.7 235.1-359.9l-76.2-132c-4.3-7.4-1.8-16.8 5.6-21.1s16.8-1.8 21.1 5.6l77.2 133.7c58.9-26.9 125.2-41.9 196.5-41.9s137.6 15 196.5 41.9l77.2-133.7c4.2-7.4 13.7-9.9 21-5.6s9.9 13.7 5.6 21.1l-76.2 132c131.5 71.2 220.5 204.2 235.2 359.9zm-248.5-129c21.3 0 38.6-17.3 38.5-38.5 0-21.2-17.2-38.5-38.5-38.5-21.2 0-38.5 17.2-38.5 38.5 0 21.2 17.2 38.5 38.5 38.5zm-421.7 0c21.3 0 38.6-17.3 38.5-38.5 0-21.2-17.2-38.5-38.5-38.5-21.2 0-38.5 17.2-38.5 38.5 0 21.2 17.2 38.5 38.5 38.5z"/></g></svg> ANDROID 4.4+ </li>
            <li style="text-align: center; font-weight: bold;">Note: this method can only debloat other phones not your phone<br>TO debloat your phone use wireless debugging or our windows app</li>
           <li>Please follow first step(First enable developer options) before cotinuing</li>
            <li>1. Connect your phone to the other phone using usb (A/B/C) TO usb (A/B/C) cable</li>
            <li @click="opendevsetings">2. <a>On your device, go to Settings > Developer options > USB debugging.<br>(click this text to go to this setting page)</a></li>
            <li>NOTE: to return from settings screen back to the app ,press back button</li>
            <li>3. Turn on usb debugging.</li>
          </ul>
        </div>

        <div class="card2">
          <h3>Wireless Debugging Instructions:</h3>
          <ul>
            <li style="text-align: center; font-weight: bold;"  >Requirements: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill:#3DDC84; vertical-align: bottom;" viewBox="0 0 918.6 515.1" enable-background="new 0 0 918.6 515.1"><g id="XMLID_1_"><path class="st0" d="M918.6 515.1h-918.6c14.7-155.7 103.7-288.7 235.1-359.9l-76.2-132c-4.3-7.4-1.8-16.8 5.6-21.1s16.8-1.8 21.1 5.6l77.2 133.7c58.9-26.9 125.2-41.9 196.5-41.9s137.6 15 196.5 41.9l77.2-133.7c4.2-7.4 13.7-9.9 21-5.6s9.9 13.7 5.6 21.1l-76.2 132c131.5 71.2 220.5 204.2 235.2 359.9zm-248.5-129c21.3 0 38.6-17.3 38.5-38.5 0-21.2-17.2-38.5-38.5-38.5-21.2 0-38.5 17.2-38.5 38.5 0 21.2 17.2 38.5 38.5 38.5zm-421.7 0c21.3 0 38.6-17.3 38.5-38.5 0-21.2-17.2-38.5-38.5-38.5-21.2 0-38.5 17.2-38.5 38.5 0 21.2 17.2 38.5 38.5 38.5z"/></g></svg> ANDROID 11+ </li>
            <li style="text-align: center; font-weight: bold;">Note: You need to bhe connected to wifi</li>
            <li>Please follow first step(First enable developer options) before cotinuing</li>
            <li @click="openwifidevsetings">1. <a>On your device, go to Settings > Developer options > wireless debugging.<br>(click this text to go to this setting page)</a></li>
           <li>2. Click on pair device </li>
           <li>3. copy  ip address & port (it will be something like 198.1.1.16:5555 - if you are debloating your phone you can just enter port. the number after the colon(":") is port)</li>
           <li>there will be a notification by app when you open settings by clicking on blue text above , from the notification click "enter port" and paste</li>
           <li>also copy pairing code and click on "enter code" on app's notification and paste the pairing code</li>
            <li>NOTE: to return from settings screen back to the app ,press back button</li>
            <li></li>
            
           
           
          </ul>
        </div>


      </div>



    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
/* Core CSS required for Ionic components to work properly 
import '@ionic/vue/css/core.css';
*/
/* Basic CSS for apps built with Ionic
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css'; */
import { defineComponent } from 'vue';
import { informationCircleOutline, chevronForwardCircleOutline, stopCircleOutline, informationCircleSharp } from 'ionicons/icons';
import { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { DevOptionsChecker } from '@legendarythedev/dev-options-checker'
import { ref } from 'vue';
import { NativeSettings, AndroidSettings, IOSSettings } from "@legendarythedev/capacitor-native-settings"
import { Toast } from "@capacitor/toast";
import {LocalNotifications } from '@capacitor/local-notifications';
//import {Shell } from 'capacitor-shell';
import { Filesystem} from '@capacitor/filesystem'
import { Directory } from '@capacitor/filesystem';
import { Shell } from 'capacitor-adb';



let devtoolsenabled: boolean = false;
DevOptionsChecker.checkDevOptions().then((result: any) => {
  devtoolsenabled = result.enabled;
  console.log(result.enabled);
  Toast.show({
    text: "Dev Options Enabled: " + result.enabled,
    duration: "long",
  });
  if (result.enabled === false) {
    const drop = document.querySelector(".dropdown-div") as HTMLElement;;
    drop.style.display = "flex";

  }
});
function openaboutphone() {
  NativeSettings.open({ optionAndroid: AndroidSettings.Settings, optionIOS: IOSSettings.App })
  console.log("opening settings > about phone")
  Toast.show({
    text: "look for build number and click it 7 times \nIn some phones it maybe located in about phone > software information\nIf you are unable to find it search it in settings or use google",
    duration: "long",
  })
}
function opendevsetings(){
NativeSettings.open({ optionAndroid: AndroidSettings.ApplicationDevelopment, optionIOS: IOSSettings.App })
console.log("opening settings > developer options")
}
function openwifidevsetings(){
NativeSettings.open({ optionAndroid: AndroidSettings.ApplicationDevelopment, optionIOS: IOSSettings.App })
console.log("opening settings > developer options")
Toast.show({
    text: "enable wireless debugging and click it\nThen click on pair device",
    duration: "long",
  })

  
  LocalNotifications.registerActionTypes({
    types: [
      {
        id: "1",
        actions: [
          {
            
            id: "1.1",
            title: "enter",
           input: true,
          
          }, 
          {
            id: "1.2",
            title: "",
           
          },
        ],
      },
    ],
  });
LocalNotifications.schedule({
  notifications: [
    {
      title: "enter port and pairing code",
      body: "enter port and pairing code using buttons below",
      id: 1,
     ongoing: true,
     actionTypeId: "1",
      
      
      extra: null
    }
   
  ]
});
LocalNotifications.addListener("localNotificationActionPerformed", (notification) => {
  console.log("notification:", notification);
  if (notification.actionId == "1.1") {
    const ipport = notification.inputValue
    if (!ipport || ipport == "") {
      Toast.show({
        text: "pls input ip address & port",
        duration: "long",
      })
    } else {
      if (ipport.includes(":")) {
        const ip = ipport.split(":")[0]
        const port = ipport.split(":")[1]
        console.log("ip: " + ip + " port: " + port);
        Toast.show({
          text: "ip: " + ip + " port: " + port,
          duration: "long",
        })
      } else {
        Toast.show({
          text: "pls input ip address & port",
          duration: "long",
        })
      }
    }

    console.log("port entered " + notification.inputValue);
  
  } else if (notification.actionId == "1.2") {
    console.log("enter code");
    Toast.show({
    text: "enter code",
    duration: "long",
  })
  }
});
}

let showDropdown = ref(false);
function toggleDropdown() {
  console.log('showDropdown:', showDropdown);
  showDropdown.value = !showDropdown.value;

}

let selectedOption = 'none';




function showMe(e: string) {
  var strdisplay = e;
  var e1 = document.getElementsByClassName("card1")[0] as HTMLElement;
  var e2 = document.getElementsByClassName("card2")[0] as HTMLElement;
  console.log(strdisplay);
  if (strdisplay == "usb") {
    e1.style.display = "flex";
    e2.style.display = "none";
  } else if (strdisplay == "wireless") {
    e1.style.display = "none";
    e2.style.display = "flex";
  } else {
    e1.style.display = "none";
    e2.style.display = "none";
  }
}


</script>
<script lang="ts">
Shell.executeAdbCommand({command: `adb start-server `}).then((value: {output: string,exitCode: number,errorOutput: string} ) => {
  console.log(value.output + "\nexitcode "+ value.exitCode.toString(), + value.errorOutput);
  Toast.show({
    text: value.output +"\n exitcode " + value.exitCode.toString(),
    duration: "long",
  });
});
export default defineComponent({

  components: { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
});
</script>
<style scoped> .debug-icon {

   color: #1E1E1E;
   justify-content: center;
   align-items: center;
   font-size: 25px;
   min-width: 25px;
   margin-top: -4.5px;
   vertical-align: middle;
   display: inline-block;
 }

 .debug-icon-div {

   display: inline-block;

   justify-content: left;
   align-content: left;
   flex-direction: row;
   align-items: left;
 }

 .debug-icon-div1 {

   display: inline-flex;

   justify-content: center;
   align-content: center;
   flex-direction: row;
   align-items: center;
 }

 ion-title.top {
   font-size: 30px;
 }

 ion-icon {
   margin-top: 5px;
   margin-right: 10px;
   color: gray;
   display: flex;
   flex-direction: row;
   align-items: center;
 }

 title1 {
   text-align: start;
   display: flex;
   flex-direction: row;
 }

 .dropdown-button,
 .debug-text {
   
  
   box-sizing: border-box;
   flex-grow: 1;
 }
.debug-text{
 

 margin-left: 15px;
margin-right: 15px;
  
}
 .debugging-options , .dropdown-div {
margin-left: 15px;
margin-right: 15px;
 }

 .dropd-icon {
   color: #1E1E1E;
   margin-left: 10px;

   font-size: 25px;
   margin-top: -2.5px;
 }

 .drop-buttons {
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 5px;
   justify-content: center;
 }

 .opensettings {
   background-color: rgb(108, 108, 108);
   padding: 5px;
   margin-right: 5px;
   border-radius: 5px;
   font-size: large;
   color: #fff;
   align-items: center;
   justify-content: center;
 }

 .closebutton {
   color: #fff;
   border-radius: 5px;
   font-size: large;
   background-color: #ea1f1f;
   padding: 5px;
   margin-left: 5px;
   align-items: center;
   justify-content: center;
 }

 .icon-div {
   flex-direction: row;
 }

 .debug-text {

   display: flex;
   color: #fff;
   border-radius: 5px;
   font-size: 16px;
   padding: 10px;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
   background-color: #007aff;
 }

 select option {
   background-color: #1E1E1E;
 }

 select {
   margin-top: 3px;
   border-radius: 4px;
   background-color: #007bffdd;
   ;
   border-color: #000;

   color: #fff;
   align-items: center;
   justify-content: center;
   justify-items: center;
   width: 200px;

 }

 .debugging-options {
   
   max-width: 600px;
   width:100%;
 }


 .card1,
 .card2 {
   display: none;
   background-color: #1E1E1E;
   border-radius: 5px;
   flex-direction: column;
   padding: 5px;
   margin: 5px;
   margin-bottom: 30px;
 }

 .card1 h3,
 .card2 h3 {
   text-align: center;
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 10px;
 }

 .card1 ul,
 .card2 ul {
   margin-top: 0;
   font-size: small;
   list-style-type: none;
   padding-left: 20px;
 }

 .card1 li,
 .card2 li {
   margin-bottom: 5px;
 }

 /*
#text {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
*/
 .dropdown-div {
   position: relative;
   display: none;

width:100%;
max-width: 600px;
 }

 .dropdown-button {
  margin-left: 15px;
    margin-right: 15px;

   background-color: #007aff;
   color: #fff;
   cursor: pointer;
   padding-top: 15px;
   padding-bottom: 15px;

   border-radius: 5px;
   font-size: 16px;
   display: flex;
   flex-direction: row;
   justify-items: center;
   align-items: center;
   justify-content: center;
 }

 .dropdown-content {
   display: flex;

   flex-direction: column;
   position: absolute;
   top: 100%;
   left: 0;
   right: 0;
   margin-left: 8px;
   margin-right: 8px;
   background-color: #1E1E1E;
   min-width: 160px;
   border-radius: 8px;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   z-index: 1;
   padding: 10px;
 }

 .dropdown-button svg {
   fill: #000;
   float: right;
   margin-top: 4px;
   margin-left: 4px
 }

 .dropdown-content p {
   text-align: center;
   margin-top: 0;
 }

 .dropdown-content ul {
   margin-top: 0;
   margin-bottom: 0;
   padding-left: 20px;
 }

 .dropdown-content li {
   list-style: disc;
   margin-bottom: 5px;
 }

 .dropdown-content li:last-child {
   margin-bottom: 0;
 }

 .dropdown-content a {
   color: #007aff;
   text-decoration: none;
 }

 .dropdown-content a:hover {
   text-decoration: underline;
 }

 .dropdown-content:before {
   content: "";
   position: absolute;
   top: -10px;
   left: 50%;
   margin-left: -5px;
   border-width: 5px;
   border-style: solid;
   border-color: transparent transparent #f1f1f1 transparent;
 }

 .info {
   background-color: #1E1E1E;
   border-radius: 8px;
   margin-left: 10px;
   margin-right: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
   margin-bottom: 50px;
 }

 .info strong {
   font-size: 25px;
   margin-top: 10px;
   margin-bottom: 5px;
   color: #ffffff;
 }

 #text1 {
   color: #b3b3b3;
   font-size: 15px;
   line-height: 22px;

 }



 ion-button#button1,
 ion-button#button2 {
   display: inline-block;
   width: 100px;
 }



 .container1 {
   padding: 2px 16px;
   color: #ffffff;
 }

 ion-page {
   height: 100%;
   width: 100%;
 }

 #buttons {
   display: flex;
   flex-direction: row;
   justify-content: center;
   text-align: center;
   margin-top: 30px;
   align-items: center;
 }

 #container {
   position: relative;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-content: center;
   align-items: center;
 }</style>
