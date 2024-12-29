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
      </View>
      <Pressable
        style={({ pressed }) => [
        styles.enterButton,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      >
        <MontserratText 
          size="600"
          style={{ fontSize: 20, letterSpacing: 2, color: "white"}}
        >
          Entrar
        </MontserratText>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    width: "100%",
    height: "100%",
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50%"
  },
  administratorText: {
    fontFamily: "Montserrat600",
    color: "white",
    fontSize: 17,
    letterSpacing: 2,
  },
  enterButton: {
    backgroundColor: "#162B40",
    width: "55%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 140
  }
})