import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import IntegraLogo from '@/components/IntegraLogo';
import { MontserratText } from "@/components/MontserratText";
import { LinearGradient } from 'expo-linear-gradient';
import { enterMainMenu } from "@/navigation/routes";

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
      <TouchableOpacity
        style={styles.enterButton}
        activeOpacity={0.7}
        onPress={enterMainMenu}
      >
        <MontserratText
          size="600"
          style={{ fontSize: 20, letterSpacing: 2, color: "white" }}
        >
          Entrar
        </MontserratText>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50%",
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
    marginTop: 140,
  },
  enterLink: {
    display: "flex",
    justifyContent: "center",
  },
});