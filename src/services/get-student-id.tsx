import api from "./api";

export const getStudentWithID = async(id: string) => {
    const response = await api.get(`/students/${id}`)
    return response.data
}