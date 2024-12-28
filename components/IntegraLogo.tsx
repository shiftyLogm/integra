import { Image, StyleSheet } from 'react-native'

const IntegraLogo = () => {
    return (
        <Image
            style={styles.body}
            source={require('../assets/images/logo.png')}
        />
    )
}

const styles = StyleSheet.create({
    body: {
        width: "75%",
        height: 100,
        resizeMode: 'contain'
    },
});

export default IntegraLogo;