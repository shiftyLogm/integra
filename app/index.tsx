import { Text, View, StyleSheet, Pressable } from "react-native";
import IntegraLogo from '@/components/IntegraLogo';
import MontserratText from "@/components/MontserratText";
import { LinearGradient } from 'expo-linear-gradient'

export default function Index() {
  return (
    <LinearGradient
      colors={["#60A4E4", "#3274B4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.backgroundGradient}
    >
      <View style={styles.container}>
        <IntegraLogo />
        <Text style={styles.administratorText}>Área de Administrador</Text>
        <Pressable>
          <MontserratText 
            size="600"
            style={{ fontSize: 20}}
          >
            Entrar
          </MontserratText>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  administratorText: {
    fontFamily: "Montserrat600",
    color: "white",
    fontSize: 17,
    letterSpacing: 2,
  }
})