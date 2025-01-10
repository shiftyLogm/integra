import { RelativePathString, router } from "expo-router";

export function enterMainMenuArea() {
    router.navigate("/main-menu")
}

export function enterStudentArea() {
    router.navigate("/student-list")
}

export function enterCoursesArea() {
    router.navigate("/courses")
}

export function enterStudentMenuArea(id: string) {
    router.navigate(`/student/${id}`)
}