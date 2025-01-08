import api from "./api";

export const getStudents = async() => {
    const response = await api.get('/students')
    return response.data
}
