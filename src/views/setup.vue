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
          <title1><ion-icon :icon="informationCircleSharp" class = "infos" size="large"></ion-icon><!----><strong>Info</strong></title1>
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
        <div class="info1">
          <title1>
            <ion-icon :icon="helpCircleSharp"  class = "infos" size="large"></ion-icon>
            <strong>What does this app do?</strong>
          </title1>
          <ul id="text2">
            <li>
           Debloating is the process of removing unwanted apps from your phone
            </li>

            <li>
              This app helps you to debloat your phone without root access. Debloating your phone will improve performance, improve battery life etc.
            </li>

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
import '../theme/custom.css'
import { defineComponent } from 'vue';
import { informationCircleOutline, chevronForwardCircleOutline, helpCircleSharp, informationCircleSharp, time } from 'ionicons/icons';
import { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { DevOptionsChecker } from '@legendarythedev/dev-options-checker'
import { ref } from 'vue';
import { NativeSettings, AndroidSettings, IOSSettings } from "@legendarythedev/capacitor-native-settings"
import { Toast } from "@capacitor/toast";
import {LocalNotifications } from '@capacitor/local-notifications';
//import {Shell } from 'capacitor-shell';
import { Filesystem} from '@capacitor/filesystem'
import { Directory } from '@capacitor/filesystem';
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





</script>
<script lang="ts">

export default defineComponent({

  components: { IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
});
</script>
<style scoped></style>
