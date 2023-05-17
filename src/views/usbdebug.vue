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