import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.debloater',
  appName: 'debloater',
  webDir: 'dist',
  bundledWebRuntime: false
,

  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
    
    },
  },

    android: {
       buildOptions: {
          keystorePath: 'c:\Users\abc\debloater\my-release-key.keystore',
          keystoreAlias: 'alias_name',
       }
    }
  };

export default config;
