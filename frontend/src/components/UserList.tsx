import axios from 'axios';
import type { User } from '../types/user';
import { userService } from '../services/userService';


interface UserListProps {
    users: User[];
    onUserDeleted: (id: string) => void;
}

export default function UserList({ users, onUserDeleted }: UserListProps) {

    const handleDelete = async (id: string) => {

        try {
            const response = await userService.deleteUser(id)

            alert(response.data.message)

            onUserDeleted(id);

        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                alert(`Failed to delete user : ${err.response.data.message}`)
            } else {
                console.log(`Error connecting to the server:`, err);
                alert(`Could not connect to the DB`)

            }
        }
    }



    return (
        <>
            { users.length === 0 ? (
                <p>No users registered.</p>
            ) : (
                <table id='table-style'>
                    <thead>
                        <tr id='thead-tr-style'>
                            <th className='table-th'>Name</th>
                            <th className='table-th'>Email</th>
                            <th className='table-th'>Age</th>
                            <th className='table-th'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className='tbody-tr-style' key={user.id || user.email}>
                                <td className='table-td'>{user.name}</td>
                                <td className='table-td'>{user.email}</td>
                                <td className='table-td'>{user.age}</td>
                                <td className='table-td'>
                                    <button className='delete-button' onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </>
    )
}
