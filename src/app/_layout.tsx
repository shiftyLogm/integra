import { Stack } from "expo-router";
import { TextInput, Keyboard, Animated, View, StyleSheet, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";
import {
  FontAwesome6 as FontAwesomeIcon,
  MaterialIcons as MaterialIcon,
  Ionicons as IonIcon,
  AntDesign as AntIcon,
} from '@expo/vector-icons';
import { MontserratText, stylesMontserrat } from "@/components/MontserratText";
import { usePathname } from "expo-router";
import { enterStudentArea, enterCoursesArea } from "@/navigation/routes";

export default function Layout() {

  /*
  Uso do Dimensions necessário para converter porcentagem
  em um valor numérico e assim ser usado no Animated.timing
  */
  const windowWidth = Dimensions.get("window").width;

  //Criando uma referência para o valor animado
  const widthAnim = useRef(new Animated.Value(windowWidth)).current;

  const animatedWidth = (value: number) => {
    Animated.timing(widthAnim, {
      toValue: windowWidth * value,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const pathname = usePathname();

  // Condicional para verificar se a rota não é a "index"
  // Assim, o header e footer apareçerão nas que não são index
  const isIndexPage = pathname === "/"

  return (
    <View style={styles.container}>

      {/* Header com o TextInput para pequisar o Aluno */}
      {!isIndexPage && (
        <View style={styles.headerView}>
          <LinearGradient
            colors={["#60A4E4", "#3274B4"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.backgroundGradient, { flexDirection: "row" }]}
          >
            <Animated.View style={[styles.headerContent, { width: widthAnim }]}>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Nome ou ID do aluno"
                  placeholderTextColor={"#B5B5B5"}
                  onFocus={() => animatedWidth(0.9)}
                  style={[stylesMontserrat.montserrat400, styles.inputText]}
                />
              </View>

              <View style={styles.searchIcon}>
                <IonIcon
                  name={"search"}
                  size={30}
                  color={"#59A5D8"}
                />
              </View>
            </Animated.View>

            <View style={styles.closeIcon}>
              <AntIcon
                name={"close"}
                size={30}
                color={"white"}
                onPress={() => {
                  animatedWidth(1),
                    Keyboard.dismiss()
                }}
              />
            </View>

          </LinearGradient>
        </View>
      )}

      <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="main-menu" />
        <Stack.Screen name="students" />
      </Stack>

      {/* Footer com o Botões para a página de Alunos e Cursos */}
      {!isIndexPage && (
        <View style={styles.footerView}>
          <LinearGradient
            colors={["#60A4E4", "#3274B4"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.backgroundGradient}
          >
            <View style={styles.footerViewContent}>
              <Pressable
                onPress={enterStudentArea}
                style={styles.footerItem}>
                <FontAwesomeIcon
                  name={"user-large"}
                  size={25}
                  color={"white"}
                />
                <MontserratText
                  size="600"
                  style={{ color: "white", fontSize: 12 }}
                >
                  Alunos
                </MontserratText>
              </Pressable>

              <Pressable 
                style={styles.footerItem}
                onPress={enterCoursesArea}
              >
                <MaterialIcon
                  name={"library-books"}
                  size={25}
                  color={"white"}
                />
                <MontserratText
                  size="600"
                  style={{ color: "white", fontSize: 12 }}
                >
                  Cursos
                </MontserratText>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha o conteúdo do container
  },
  headerView: {
    height: windowHeight * 0.09,
  }, headerContent: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputBox: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: "65%",
    width: "80%"
  },
  inputText: {
    height: "100%",
    marginLeft: 10,
    fontSize: 18
  },
  searchIcon: {
    backgroundColor: "white",
    height: "65%",
    width: "10%",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    justifyContent: "center",
    alignContent: "center"
  },
  footerView: {
    height: windowHeight * 0.09,
    position: "fixed"
  },
  footerViewContent: {
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  footerItem: {
    alignItems: "center",
    gap: 5,
  },
  backgroundGradient: {
    flex: 1,
  },
});
