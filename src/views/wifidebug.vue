<template>
    <ion-page>
      <ion-header :fullscreen="true">
        <ion-toolbar>
          <ion-title class="top">Setup Screen</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
  
        <div id="container">
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
  import '../theme/wifipage.css'
  import { defineComponent } from 'vue';
  //import { } from 'ionicons/icons';
  import { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { DevOptionsChecker } from '@legendarythedev/dev-options-checker'
  import { ref } from 'vue';
  import { NativeSettings, AndroidSettings, IOSSettings } from "@legendarythedev/capacitor-native-settings"
  import { Toast } from "@capacitor/toast";
  import {LocalNotifications } from '@capacitor/local-notifications';
  //import {Shell } from 'capacitor-shell';
  import { informationCircleOutline, chevronForwardCircleOutline, helpCircleSharp, informationCircleSharp, time } from 'ionicons/icons';

  import { Adb } from 'capacitor-adb';
  Adb.executeNormalCommand({command:'pwd'}).then((value: {output: string,exitCode: number,errorOutput: string} ) => {
    console.log(value.output + "\nexitcode "+ `${value.exitCode}` + ' ' + value.errorOutput.toString());
   
  });
  Adb.getConnectIpPort({timeout: 1000}).then((value: {host: string,port: string} ) => {
    console.log(value.host + "\n" + value.port);
    
  
  });
  Adb.executeAdbCommand({command: ``}).then((value: {output: string,exitCode: number,errorOutput: string} ) => {
    console.log(value.output + "\nexitcode "+ `${value.exitCode}` + ' error' + value.errorOutput);
    Toast.show({
      text: value.output +"\n exitcode " + value.exitCode.toString(),
      duration: "long",
    });
  });
    
   
  let devtoolsenabled: boolean = false;
  DevOptionsChecker.checkDevOptions().then((result: any) => {
    devtoolsenabled = result.enabled;
    console.log(result.enabled);
   
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
  
  let showDropdown = ref(false);
function toggleDropdown() {
  console.log('showDropdown:', showDropdown);
  showDropdown.value = !showDropdown.value;

}

  
  
  
  
  
  </script>
  <script lang="ts">
  
  export default defineComponent({
  
    components: { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  });
  </script>
  <style scoped></style>
  