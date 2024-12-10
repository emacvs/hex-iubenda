// import { NativeModules } from 'react-native';
 
// class IubendaService {
//   constructor(siteId, cookiePolicyId) {
//     this.siteId = siteId;
//     this.cookiePolicyId = cookiePolicyId;
//     this.IubendaBridge = NativeModules.IubendaBridge;
 
//     // Controllo immediato della disponibilità del moduåçlo nativo
//     if (!this.IubendaBridge) {
//       console.error('Errore: Il modulo IubendaBridge non è disponibile!');
//     }
//   }
 
//   // Inizializzazione del servizio
//   async initialize() {
//     if (!this.IubendaBridge) {
//       console.error('IubendaBridge non disponibile.');
//       return false;
//     }
  
//     try {
//       const config = {
//         gdprEnabled: true,
//         forceConsent: true,
//         siteId: this.siteId,
//         cookiePolicyId: this.cookiePolicyId,
//       };
  
//       // Inizializzazione asincrona
//       await this.IubendaBridge.initialize(config);
//       console.log('Iubenda inizializzato correttamente.');
//       return true;
//     } catch (error) {
//       console.error('Errore durante l\'inizializzazione di Iubenda:', error);
//       return false;
//     }
//   }
 
//   // Chiedi il consenso
//   askConsent() {
//     if (!this.IubendaBridge) {
//       console.warn('IubendaBridge non disponibile per chiedere il consenso.');
//       return;
//     }
 
//     try {
//       this.IubendaBridge.askConsent();
//       console.log('Consenso richiesto.');
//     } catch (error) {
//       console.error('Errore durante la richiesta di consenso:', error);
//     }
//   }
 
//   // Chiedi il consenso
//   openPreferences() {
//     if (!this.IubendaBridge) {
//       console.warn('IubendaBridge non disponibile per aprire le preferenze.');
//       return;
//     }
 
//     try {
//       this.IubendaBridge.openPreferences();
//       console.log('Consenso richiesto.');
//     } catch (error) {
//       console.error('Errore durante la richiesta di aprire le preferenze:', error);
//     }
//   }
 
//   // Recupera lo stato del consenso
//   async getConsentStatus() {
//     if (!this.IubendaBridge) {
//       console.warn('IubendaBridge non disponibile per ottenere lo stato del consenso.');
//       return Promise.reject('IubendaBridge non disponibile.');
//     }
 
//     try {
//       const status = await this.IubendaBridge.getConsentStatus();
//       console.log('Stato del consenso:', status);
//       return status;
//     } catch (error) {
//       console.error('Errore durante il recupero dello stato del consenso:', error);
//       throw error;
//     }
//   }
// }
 
// export default IubendaService;
 


import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'hex-iubenda' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const HexIubenda = NativeModules.HexIubenda
  ? NativeModules.HexIubenda
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return HexIubenda.multiply(a, b);
}

// Gestione del modulo nativo IubendaBridge
// const IubendaBridge = NativeModules.IubendaBridge
//   ? NativeModules.IubendaBridge
//   : new Proxy(
//       {},
//       {
//         get() {
//           throw new Error(LINKING_ERROR);
//         },
//       }
//     );

  export function initialize(siteId: string, cookiePolicyId: string): Promise<void> {
    const config = {
      gdprEnabled: true,
      forceConsent: true,
      siteId: siteId,
      cookiePolicyId: cookiePolicyId,
    };
    return HexIubenda.initialize(config);
  }

    // // Inizializzazione del servizio
    // async initialize() {
    //   if (!this.IubendaBridge) {
    //     console.error('IubendaBridge non disponibile.');
    //     return false;
    //   }
    
    //   try {
    //     const config = {
    //       gdprEnabled: true,
    //       forceConsent: true,
    //       siteId: this.siteId,
    //       cookiePolicyId: this.cookiePolicyId,
    //     };
    
    //     // Inizializzazione asincrona
    //     await this.IubendaBridge.initialize(config);
    //     console.log('Iubenda inizializzato correttamente.');
    //     return true;
    //   } catch (error) {
    //     console.error('Errore durante l\'inizializzazione di Iubenda:', error);
    //     return false;
    //   }
    // }