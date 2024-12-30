import { View, StyleSheet } from "react-native";
import IntegraLogo from "@/components/IntegraLogo";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 as FontAwesomeIcon, MaterialIcons as MaterialIcon} from '@expo/vector-icons'
import MontserratText from "@/components/MontserratText";

export default function MainMenu() {
    return (
        <View>

            <View style={styles.headerView}>
                <LinearGradient
                    colors={["#60A4E4", "#3274B4"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.backgroundGradient}
                ></LinearGradient>
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
                
                {/* Uso de Icons da lib "vector-icons" */}
                <View style={styles.footerViewContent}>

                    <View style={styles.footerItem}>
                        <FontAwesomeIcon name={"user-large"} size={30} color={"white"}/>
                        <MontserratText size="600" style={{ color: "white"}}>Alunos</MontserratText>
                    </View>

                    <View style={styles.footerItem}>
                        <MaterialIcon name={"library-books"} size={30} color={"white"}/>
                        <MontserratText size="600" style={{ color: "white"}}>Cursos</MontserratText>
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
        backgroundColor: "red"
    },
    centerView: {
        height: "82%",
        alignItems: "center",
        justifyContent: "center"
    },
    footerView: {
        height: "9%",
        backgroundColor: "red",
    },
    footerViewContent: {
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 40
    },
    footerItem: {
        alignItems: "center",
        gap: 5
    },
    backgroundGradient: {
        width: "100%",
        height: "100%"
    }
})

