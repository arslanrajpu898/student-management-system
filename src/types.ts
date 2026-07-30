export type UserRole = "admin" | "instructor" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledCourseIds: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
}

export interface LoginFormState {
  email: string;
  password: string;
}

export interface RegisterFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
