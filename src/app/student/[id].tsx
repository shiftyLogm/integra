import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getStudentWithID } from '@/services/get-student-id';
import { IStudent } from '../student-list';
import { View, StyleSheet, Image } from 'react-native';
import { MontserratText } from '@/components/MontserratText';

export default function Student() {

    // Student e Error começa como Nulo e seus valores são alterados
    // De acordo com a Response
    const [student, setStudent] = useState<IStudent | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Pegando o ID passado no parâmetro e convertendo de string[] -> string
    const { id } = useLocalSearchParams();
    const _id = String(id)

    useEffect(() => {
        if (!id) return;  // Evita chamadas sem 'id'

        const fetchStudentWithId = async () => {
            try {
                const response: any = await getStudentWithID(_id);
                console.log(response)
                if (response.statusCode == 404) {
                    setError('Aluno não encontrado.');
                } else {
                    setStudent(response.data[0])
                }
            } catch (err) {
                setError('Erro ao buscar o aluno.');
            }
        };

        fetchStudentWithId();
    }, [id]);

    if (error) {
        return (
            <View style={styles.container}>
                <MontserratText style={styles.errorMontserratText}>{error}</MontserratText>
            </View>
        );
    }

    // Enquanto o aluno está sendo carregado, é mostrado um texto indicando que estã carregando
    if (!student) {
        return (
            <View style={styles.container}>
                <MontserratText style={styles.loadingMontserratText}>Carregando informações do aluno...</MontserratText>
            </View>
        );
    }

    // Desestruturação das propriedades do aluno
    const { id_aluno, nome, data_nascimento, cpf, sexo, email, telefone, cep, rua, numero, bairro, cidade, estado, pais, foto_aluno } = student;

    return (
        <View style={styles.container}>
            <MontserratText style={styles.title}>Detalhes do Aluno</MontserratText>

            <View style={styles.infoContainer}>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>ID:</MontserratText> {id_aluno}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Nome:</MontserratText> {nome}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Data de Nascimento:</MontserratText> {data_nascimento}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>CPF:</MontserratText> {cpf}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Sexo:</MontserratText> {sexo}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Email:</MontserratText> {email}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Telefone:</MontserratText> {telefone}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>CEP:</MontserratText> {cep}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Rua:</MontserratText> {rua}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Número:</MontserratText> {numero}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Bairro:</MontserratText> {bairro}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Cidade:</MontserratText> {cidade}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>Estado:</MontserratText> {estado}</MontserratText>
                <MontserratText style={styles.infoMontserratText}><MontserratText style={styles.bold}>País:</MontserratText> {pais}</MontserratText>

                {foto_aluno && (
                    <View style={styles.imageContainer}>
                        <MontserratText style={styles.bold}>Foto do Aluno:</MontserratText>
                        <Image source={{ uri: foto_aluno }} style={styles.image} />
                    </View>
                )}
            </View>
        </View>
    );
}

// Estilos com StyleSheet para o React Native
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        width: '100%',
    },
    infoMontserratText: {
        fontSize: 16,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    errorMontserratText: {
        fontSize: 18,
        color: 'black',
    },
    loadingMontserratText: {
        fontSize: 18,
        color: 'gray',
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
});
