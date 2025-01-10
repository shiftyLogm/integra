import { router } from "expo-router";

export function enterMainMenuArea() {
    router.navigate("/main-menu")
}

export function enterStudentArea() {
    router.navigate("/students")
}

export function enterCoursesArea() {
    router.navigate("/courses")
}

// export function enterStudentMenuArea(id: number) {
//     router.navigate(`/student/${id}`)
// }