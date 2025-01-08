import { View, StyleSheet, Text } from "react-native";
import { getStudents } from "@/services/get-students";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

interface IStudent {
    id_aluno: number;
    nome: string;
    data_nascimento: string;
    cpf: string;
    sexo: string;
    email: string;
    telefone: string;
    cep?: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    foto_aluno?: string;
}

export default function Students() {

    const [students, setStudents] = useState<IStudent[]>([]);
    const [error, setError] = useState<string | null>();

    useEffect(() => {

        const fetchStudents = async () => {
            try {
                const response: any = await getStudents();
                setStudents(response.rows)
            } catch (err: any) {
                setError('Erro')
            }
        }

        fetchStudents()

    }, []);

    return (
        <View>
            {students.map((student) => (
                <View key={student.id_aluno}>
                    <Text>Nome: {student.nome}</Text>
                    <Text>Rua: {student.rua}</Text>
                    <Text>Bairro: {student.bairro}</Text>
                    <Text>Cidade: {student.cidade}</Text>
                </View>
            ))}
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