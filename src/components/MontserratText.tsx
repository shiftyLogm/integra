import { Text, View, StyleSheet, TextStyle } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

interface MontserratTextProps {
    size?: "400" | "600" | "bold";
    style?: TextStyle;
    children?: React.ReactNode;
}

const MontserratText = (props: MontserratTextProps) => {
    const [LoadedFont] = useFonts({
        "Montserrat400": Montserrat_400Regular,
        "Montserrat600": Montserrat_600SemiBold,
        "MontserratBold": Montserrat_700Bold,
    })
    
    // Condicional para verificar se as fontes foram carregadas com sucesso
    if (!LoadedFont) {
        return <View />
    }

    const sizeOptions = new Map(Object.entries({
        "400" : styles.montserrat400,
        "600" : styles.montserrat600,
        "bold" : styles.montserratBold
    }))

    // Caso não selecione o peso da fonte, por padrão será a regular 400
    const fontStyle = sizeOptions.get(props.size || "400")

    return (
        <Text style={[fontStyle, props.style]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    montserrat400: {
        fontFamily: "Montserrat400"
    },
    montserrat600: {
        fontFamily: "Montserrat600"
    },
    montserratBold: {
        fontFamily: "MontserratBold"
    }
})

export default MontserratText;