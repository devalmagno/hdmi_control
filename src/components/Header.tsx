import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/HDMILogo.png')}
            />

            <Text style={{
                ...styles.subtitle,
                fontFamily: 'Poppins600',
            }}>
                Controle de Cabos HDMI
            </Text>
            <Text style={styles.subtitle}>
                Departamento de Ciências Exatas
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Inter400',
    }
})