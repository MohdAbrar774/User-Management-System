//User interface
export interface User {
    id: string;
    name: string;
    email: string;
    age: number;

}

export interface FormData {
    name: string;
    email: string;
    age: string;
}

export interface FormError {
    name?: string;
    email?: string;
    age?: string

}

export interface DbUser {
    _id: string;
    name: string;
    email: string;
    age: number;
}