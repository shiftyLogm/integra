import { View, StyleSheet, TouchableOpacity } from "react-native";
import { getStudents } from "@/services/get-students";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { MontserratText } from "@/components/MontserratText";
import { MaterialCommunityIcons as MaterialCIcon } from "@expo/vector-icons";
import { enterStudentMenuArea } from "@/navigation/routes";

export interface IStudent {
    id_aluno: string;
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

export default function StudentList() {

    const [students, setStudents] = useState<IStudent[] | null>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchStudents = async() => {
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
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    style={styles.userActionButton}
                    activeOpacity={0.8}
                >
                    <MaterialCIcon
                        name={"account-plus"}
                        size={30}
                        color={"white"}
                    />
                    <MontserratText
                        size="600"
                        style={{ color: "white" }}
                    >
                        Adicionar aluno
                    </MontserratText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.userActionButton}
                    activeOpacity={0.8}
                >
                    <MaterialCIcon
                        name={"account-filter"}
                        size={30}
                        color={"white"}
                    />
                    <MontserratText
                        size="600"
                        style={{ color: "white" }}
                    >
                        Filtrar lista
                    </MontserratText>
                </TouchableOpacity>
            </View>
            {students?.map((student) => (
                <View key={student.id_aluno} style={styles.listStudent}>
                    <View style={styles.listItem}>
                        {/* Criar Elemento para foto do estudante depois */}
                        <View style={styles.photo}></View>

                        <View style={{ gap: 8 }}>
                            <MontserratText 
                                style={{ fontSize: 20 }}
                                size="600"
                            >
                                {student.nome}
                            </MontserratText>
                            <MontserratText style={{ fontSize: 15 }}>
                                ID: {student.id_aluno}
                            </MontserratText>
                        </View>
                        <View style={styles.iconContent} >
                            <MaterialCIcon
                                name={"account-edit"}
                                size={30}
                                color={"#60A4E4"}
                                onPress={() => enterStudentMenuArea(student.id_aluno)}
                            />
                            <MaterialCIcon
                                name={"account-remove"}
                                size={30}
                                color={"red"}
                            />
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerView: {
        height: "auto",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        gap: 8,
        marginBottom: 10
    },
    userActionButton: {
        flexDirection: "row",
        width: "45%",
        height: 50,
        backgroundColor: "#60A4E4",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    listStudent: {
        flexDirection: "row",
        justifyContent: "center"
    },
    listItem: {
        height: 100,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    photo: {
        borderRadius: "100%",
        width: 70,
        height: 70,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1
    },
    iconContent: {
        flexDirection: "row",
        gap: 8,
        position: "absolute",
        right: 0
    }
});