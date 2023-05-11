import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.debloater',
  appName: 'debloater',
  webDir: 'dist'
  
,

  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
    
    },
  },

    android: {
       buildOptions: {
          keystorePath: 'c:\Users\abc\debloater\my-release-key.keystore',
        keystoreAlias: 'debug',
        
       }
    }
  };

export default config;
