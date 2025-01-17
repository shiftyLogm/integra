import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getStudentWithID } from '@/services/get-student-id';
import { IStudent } from '../student-list';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { MontserratText } from '@/components/MontserratText';
import { MontserratMaskedInput } from '@/components/MonteserratInputMasked';
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';
import { stylesMontserrat } from '@/components/MontserratText';

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
            [field]: value,
        }));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.studentPhoto}>

            </View>
            <MontserratText size='bold' style={{ fontSize: 25, textAlign: "center" }}>{student.id_aluno}</MontserratText>
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
                <View style={styles.inputContent}>
                    <Picker>
                        <Picker.Item label='Masculino' value='Masculino' />
                        <Picker.Item label='Feminino' value='Feminino' />
                        <Picker.Item label='Outro' value='Outro' />
                    </Picker>
                </View>
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
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>CEP</MontserratText>
                <MontserratMaskedInput
                    mask={'ZIP_CODE'}
                    style={styles.inputContent}
                    value={student.cep}
                    onChangeText={(text) => updateStudentField("cep", text)}
                />
            </View>
            <View style={styles.infoItem}>
                <MontserratText size="bold" style={styles.infoMontserratText}>Endereço</MontserratText>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ width: '75%', gap: 8 }}>
                        <MontserratText size="600" style={styles.addressSubtitle}>Pais</MontserratText>
                        <MontserratMaskedInput
                            style={styles.inputContent}
                            value={student.pais}
                            onChangeText={(text) => updateStudentField("pais", text)}
                        />
                    </View>
                    <View style={{ width: '20%', gap: 8 }}>
                        <MontserratText size="600" style={styles.addressSubtitle}>Estado</MontserratText>
                        <MontserratMaskedInput
                            style={styles.inputContent}
                            value={student.estado}
                            onChangeText={(text) => updateStudentField("estado", text)}
                        />
                    </View>
                </View>
                <MontserratText size="600" style={styles.addressSubtitle}>Cidade</MontserratText>
                <MontserratMaskedInput
                    style={styles.inputContent}
                    value={student.cidade}
                    onChangeText={(text) => updateStudentField("cidade", text)}
                />
                <MontserratText size="600" style={styles.addressSubtitle}>Bairro</MontserratText>
                <MontserratMaskedInput
                    style={styles.inputContent}
                    value={student.bairro}
                    onChangeText={(text) => updateStudentField("bairro", text)}
                />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ width: '75%', gap: 8 }}>
                        <MontserratText size="600" style={styles.addressSubtitle}>Rua</MontserratText>
                        <MontserratMaskedInput
                            style={styles.inputContent}
                            value={student.rua}
                            onChangeText={(text) => updateStudentField("rua", text)}
                        />
                    </View>
                    <View style={{ width: '20%', gap: 8 }}>
                        <MontserratText size="600" style={styles.addressSubtitle}>Número</MontserratText>
                        <MontserratMaskedInput
                            style={styles.inputContent}
                            value={student.numero}
                            onChangeText={(text) => updateStudentField("numero", text)}
                        />
                    </View>
                </View>
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
    studentPhoto: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        alignSelf: "center"
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
        fontSize: 17,
        height: 55
    },
    addressSubtitle: {
        fontSize: 14,
    }
});
