import { MontserratText } from '@/components/MontserratText'
import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Student() {
    const { id_aluno } = useLocalSearchParams()

    return (
        <View>
            ID do produto: 
        </View>
    )
}