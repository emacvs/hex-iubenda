import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button, NativeModules, AppRegistry } from 'react-native';
import {askConsent as askC, openPreferences as openP, initialize, getConsentStatus as getCS, multiply } from 'hex-iubenda'; 
 
class App extends Component {
  state = {
    initialized: false,
    consentStatus: '',  // Stato per memorizzare la consentString
  };
 
  componentDidMount() {
    let result = initialize('3782169','66406702');
    this.setState({ initialized: result });
  }
 
  askConsent = () => {
    askC();
  };

  openPreference = () => {
    openP();
  };

  consentString = async () => {
      try {
        const status = await getCS();
        this.setState({ consentStatus: JSON.stringify(status) });
      } catch (error) {
        console.error('Errore durante il recupero dello stato del consenso:', error);
      }
  };
 
  render() {
    const { initialized, consentStatus } = this.state;
 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SDK Iubenda</Text>
        <Text style={styles.status}> {initialized ? 'Inizializzato.' : 'Inizializzazione in corso...'} </Text>
        <Button title="Mostra Consenso" onPress={this.askConsent} />
        <Button title="Apri Preferenze" onPress={this.openPreference} />
        <Button title="Mostra consent string" onPress={this.consentString} />
        {consentStatus && <Text style={styles.status}>Consenso: {consentStatus}</Text>}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: '#666',
  },
  consentString: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
 
});
 
export default App;
 