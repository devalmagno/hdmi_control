import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={{ fontFamily: 'Poppins600', marginTop: 30, }}>
        2 cabos disponíveis
      </Text>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{
          fontFamily: 'Inter600',
          color: "#fff"
        }}>Solicitar Agendamento</Text>
      </TouchableOpacity>

      <Text style={{ fontFamily: 'Poppins600' }}>
        Situação dos cabos
      </Text>

      <View style={styles.card}>
        <MaterialCommunityIcons name="cable-data" size={24} color="#717171" />

        <View>
          <Text style={{ color: '#717171' }}>Emprestado às</Text>
          <Text style={{ color: '#717171' }}>Para entregar até</Text>
        </View>

        <View>
          <Text style={{ color: '#717171', fontFamily: 'Inter600' }}>14:55</Text>
          <Text style={{ color: '#717171', fontFamily: 'Inter600' }}>16:40</Text>
        </View>

        <MaterialCommunityIcons name="timer" size={24} color="#717171" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 48 : 0,
    paddingHorizontal: 48,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7843E6',
    paddingHorizontal: 68,
    paddingVertical: 16,
    borderRadius: 4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F7F7F7',
    height: 64,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  }
});
