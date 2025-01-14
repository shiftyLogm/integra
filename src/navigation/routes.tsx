import { RelativePathString, router } from "expo-router";

export function enterMainMenuArea() {
    router.push("/main-menu")
}

export function enterStudentArea() {
    router.push("/student-list")
}

export function enterCoursesArea() {
    router.push("/courses")
}

export function enterStudentMenuArea(id: string) {
    router.push(`/student/${id}`)
}