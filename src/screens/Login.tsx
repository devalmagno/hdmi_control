import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import Header from '../components/Header';

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity style={styles.button}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subtitle}>Entrar pelo </Text>
          <Text style={{
            ...styles.subtitle,
            fontFamily: 'Inter500',
          }}>Google</Text>
        </View>
        <Image
          source={require('../../assets/GoogleIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#2962FF',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter400',
  }
});

