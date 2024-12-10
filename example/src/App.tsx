import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { multiply, initialize } from 'hex-iubenda';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [init, setInit] = useState<string>();
  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  useEffect(() => {
    initialize('3782169','66406702').then(() => setInit('Initialized'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Initialize: {init}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
