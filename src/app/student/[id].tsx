import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getStudentWithID } from '@/services/get-student-id';
import { IStudent } from '../student-list';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { MontserratText } from '@/components/MontserratText';
import { MontserratMaskedInput } from '@/components/MonteserratInputMasked';
import moment from 'moment';

export default function Student() {
    const [student, setStudent] = useState<IStudent>();
    const [error, setError] = useState<string>();
    const { id } = useLocalSearchParams();
    const _id = id ? String(id[0]) : null

    useEffect(() => {
        if (!_id) return; // Evitar chamadas sem ID.

        const fetchStudentWithId = async () => {
            try {
                const response: any = await getStudentWithID(_id);
                if (response.statusCode === 404) {
                    setError('Aluno não encontrado.');
                    return;
                }
                setStudent(response.data[0]);
            } catch (err) {
                setError('Erro ao buscar o aluno.');
            }
        };

        fetchStudentWithId();
    }, [_id]);

    if (error) {
        return (
            <View style={styles.container}>
                <MontserratText style={styles.responseText}>{error}</MontserratText>
            </View>
        );
    }

    if (!student) {
        return (
            <View style={styles.container}>
                <MontserratText style={styles.responseText}>Carregando informações do aluno...</MontserratText>
            </View>
        );
    }

    const updateStudentField = (field: keyof IStudent, value: string) => {
        setStudent((prevStudent) => ({
            ...prevStudent,
            [field] : value,
        }));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>Nome</MontserratText>
                <MontserratMaskedInput
                    style={styles.inputContent}
                    value={student.nome}
                    onChangeText={(text) => updateStudentField("nome", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>Data de Nascimento</MontserratText>
                <MontserratMaskedInput
                    mask={'DATE_DDMMYYYY'}
                    style={styles.inputContent}
                    value={moment(student.data_nascimento).format('DDMMYYYY')} // Formatando de YYYY-MM-DD para DD/MM/YYYY em conjunto com a Máscara
                    onChangeText={(text) => updateStudentField("data_nascimento", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>CPF</MontserratText>
                <MontserratMaskedInput
                    mask={'BRL_CPF'}
                    style={styles.inputContent}
                    value={student.cpf}
                    onChangeText={(text) => updateStudentField("cpf", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>Sexo</MontserratText>
                <MontserratMaskedInput
                    style={styles.inputContent}
                    value={student.sexo}
                    onChangeText={(text) => updateStudentField("sexo", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>E-mail</MontserratText>
                <MontserratMaskedInput
                    style={styles.inputContent}
                    value={student.email}
                    onChangeText={(text) => updateStudentField("email", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>Telefone</MontserratText>
                <MontserratMaskedInput
                    mask={'BRL_PHONE'}
                    style={styles.inputContent}
                    value={student.telefone}
                    onChangeText={(text) => updateStudentField("telefone", text)}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 15,
    },
    studentImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    infoItem: {
        marginBottom: 10,
        gap: 8,
    },
    infoMontserratText: {
        fontSize: 18,
    },
    responseText: {
        fontSize: 18,
        color: 'gray',
    },
    inputContent: {
        width: "100%",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 17
    },
});
