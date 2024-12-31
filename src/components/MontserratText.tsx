import { Text, View, StyleSheet, TextStyle } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import React from 'react';

interface MontserratTextProps {
    size?: "400" | "600" | "bold"; // Opções dinâmicas de peso para a fonte
    style?: TextStyle;
    children?: React.ReactNode;
}

export const MontserratText = (props: MontserratTextProps) => {
    
    const [LoadedFont] = useFonts({
        "Montserrat400": Montserrat_400Regular,
        "Montserrat600": Montserrat_600SemiBold,
        "MontserratBold": Montserrat_700Bold,
    })
    
    // Condicional para verificar se as fontes foram carregadas com sucesso
    if (!LoadedFont) {
        return <></>;
    }

    /* 
    Caso não selecione o peso da fonte, por padrão será a regular 400
    Aqui será pego o value referente a key passada pela opção
    */
    const fontStyle = sizeOptions.get(props.size || "400")

    return (
        <Text style={[fontStyle, props.style]}>
            {props.children}
        </Text>
    )
}

// Exportando o style da fonte caso queira usar em outro componente
export const stylesMontserrat = StyleSheet.create({
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

const sizeOptions = new Map(Object.entries({
    "400" : stylesMontserrat.montserrat400,
    "600" : stylesMontserrat.montserrat600,
    "bold" : stylesMontserrat.montserratBold
}))
