import { Text, View, StyleSheet } from "react-native";
import IntegraLogo from '@/components/IntegraLogo';
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function Index() {
  const [LoadedFont] = useFonts({
    "Montserrat400": Montserrat_400Regular,
    "Montserrat600": Montserrat_600SemiBold,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!LoadedFont) {
    return <View />
  }

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