import type { DbUser, FormData } from "../types/user"
import api from "./apis"




export const userService = {

    getUser: async () => {
        const response = await api.get<DbUser[]>('/api/users')
        return response.data.map((user) => ({
            id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
        }))
    },

    addUser: async (formData: FormData) => {

        const response = await api.post("/api/users", {
            name: formData.name.trim(),
            email: formData.email.trim(),
            age: Number(formData.age),
        })

        const createdUser = response.data;

        return {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            age: createdUser.age,
        }



    },

    deleteUser: async (id: string) => {

        const response = api.delete(`/api/users/${id}`);
        return response
    }


}

