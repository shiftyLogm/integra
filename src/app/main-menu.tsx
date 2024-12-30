import { Animated, View, StyleSheet, TextInput, Dimensions, Keyboard } from "react-native";
import IntegraLogo from "@/components/IntegraLogo";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 as FontAwesomeIcon,
         MaterialIcons as MaterialIcon, 
         Ionicons as IonIcon, 
         AntDesign as AntIcon,
        } from '@expo/vector-icons';
import MontserratText from "@/components/MontserratText";
import { useRef } from "react";

export default function MainMenu() {
    
    /*
    Uso do Dimensions necessário para converter porcentagem
    em um valor numérico e assim ser usado no Animated.timing
    */
    const screenWidth = Dimensions.get("window").width;

    //Criando uma referência para o valor animado
    const widthAnim = useRef(new Animated.Value(screenWidth)).current;

    const animatedWidth = (value: number) => {
        Animated.timing(widthAnim, {
            toValue: screenWidth * value,
            duration: 250,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <LinearGradient
                    colors={["#60A4E4", "#3274B4"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[styles.backgroundGradient, { flexDirection: "row"}]}
                >
                    <Animated.View style={[styles.headerContent, { width: widthAnim }]}>
                        <View style={styles.input}>
                            <TextInput 
                                placeholder="Nome do aluno" 
                                onFocus={() => animatedWidth(0.9)}                        
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
                    <View>
                        
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

            <View style={styles.centerView}>
                <IntegraLogo width={"65%"} mainLogo={false} />
            </View>

            <View style={styles.footerView}>
                <LinearGradient
                    colors={["#60A4E4", "#3274B4"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.backgroundGradient}
                >
                    <View style={styles.footerViewContent}>
                        <View style={styles.footerItem}>
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
                        </View>

                        <View style={styles.footerItem}>
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
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        height: "9%",
    },
    headerContent: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    input: {
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: "65%",
        width: "80%"
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
    centerView: {
        height: "82%",
        alignItems: "center",
        justifyContent: "center",
    },
    footerView: {
        height: "9%",
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