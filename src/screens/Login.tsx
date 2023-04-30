import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuthContext } from '../contexts/AuthContext';

import Header from '../components/Header';
import { useEffect } from 'react';

export default function Login() {
  const { login, authUser } = useAuthContext();

  const navigation = useNavigation();

  useEffect(() => {
    if (authUser) navigation.navigate('Tela Inicial' as never);
  }, [authUser]);

  useEffect(() => {
    if (authUser) navigation.navigate('Tela Inicial' as never);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
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

