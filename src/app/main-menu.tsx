import { View, StyleSheet } from "react-native";
import IntegraLogo from "@/components/IntegraLogo";

export default function MainMenu() {

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.centerView}>
                <IntegraLogo width={"65%"} mainLogo={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerView: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});