import { DimensionValue, Image, StyleSheet } from 'react-native'

interface IntegraLogoProps {
    width?: DimensionValue
    mainLogo?: boolean
}

const IntegraLogo = ({ width = "75%", mainLogo = true}: IntegraLogoProps) => {
    return (
        <Image
            style={[styles.body, { width: width }]} // Propriedade Width para mudar a estilização da imagem dinamicamente
            source={
                mainLogo 
                ? require('../assets/images/logo.png')
                : require('../assets/images/logoSecond.png')
            }
        />
    )
}

const styles = StyleSheet.create({
    body: {
        height: 100,
        resizeMode: 'contain'
    },
});

export default IntegraLogo;