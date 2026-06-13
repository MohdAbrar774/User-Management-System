import { useState } from 'react'
import '../App.css'
import axios from 'axios';
import type { User, FormData, FormError } from '../types/user';
import { userService } from '../services/userService';


interface UserFormProps {
    onUserAdded: (newUser: User) => void;
}
export default function UserForm({ onUserAdded }: UserFormProps) {


    const [errors, setErrors] = useState<FormError>({})

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        age: "",
    })

    const validation = (): boolean => {
        const { name, email, age } = formData;
        const newErrors: FormError = {};

        if (!name.trim()) {
            newErrors.name = "Name is required"
        } else if (name.length < 2) {
            newErrors.name = "Name must be  2 characters"
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!regex.test(email)) {
            newErrors.email = "Please enter a valid email address."
        }

        const ageNum = Number(age)
        if (!ageNum) {
            newErrors.age = "Age is required.";
        } else if (isNaN(ageNum) || ageNum <= 0) {
            newErrors.age = "Age must be a valid positive number.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;


    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors) setErrors({})
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if (validation()) {

            try {
                const newUser = await userService.addUser(formData)

                onUserAdded(newUser)
                setFormData({
                    name: "",
                    email: "",
                    age: "",
                })

                setErrors({})
            } catch (err) {
                if (axios.isAxiosError(err) && err.response) {
                    alert(`Failed to add user : ${err.response.data.message}`)
                } else {
                    console.log(`Error connecting to the server:`, err);
                    alert(`Could not connect to the DB`)

                }
            }
        }
    }
    return (
        <>
            <div>
                {Object.keys(errors).length !== 0 && (
                    <div className="error-box">
                        <ul>{
                            errors.name && (<li>{errors.name}</li>)
                        }{
                                errors.email && (<li>{errors.email}</li>)}
                            {
                                errors.age && (<li>{errors.age}</li>)
                            }
                        </ul>
                    </div>
                )}

                <form id='formStyle' onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <label className='input-label'>Name:</label>
                        <input
                            className='input-field'
                            type="text"
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-row'>
                        <label className='input-label'>Email:</label>
                        <input
                            className='input-field'
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-row'>
                        <label className='input-label'>Age:</label>
                        <input
                            className='input-field'
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='form-submit-button'>
                        Add User
                    </button>
                </form>
            </div>
        </>
    )
}
