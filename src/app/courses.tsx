import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { MontserratText } from "@/components/MontserratText";
import { MaterialCommunityIcons as MaterialCIcon } from "@expo/vector-icons";

export default function Students() {

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    style={styles.userActionButton}
                    activeOpacity={0.8}
                >
                    <MaterialCIcon
                        name={"account-plus"}
                        size={30}
                        color={"white"}
                    />
                    <MontserratText
                        size="600"    
                        style={{ color: "white" }}
                    >
                        Adicionar curso
                    </MontserratText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.userActionButton}
                    activeOpacity={0.8}
                >
                    <MaterialCIcon
                        name={"account-filter"}
                        size={30}
                        color={"white"}
                    />
                    <MontserratText
                        size="600"   
                        style={{ color: "white" }} 
                    >
                        Filtrar lista
                    </MontserratText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerView: {
        height: 200,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        gap: 8,
    },
    userActionButton: {
        flexDirection: "row",
        width: "45%",
        height: 50,
        backgroundColor: "#60A4E4",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    }
});