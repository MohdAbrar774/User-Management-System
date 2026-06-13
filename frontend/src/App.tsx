import { useState, useEffect } from 'react'
import './App.css'
import type { User } from './types/user';
import { userService } from './services/userService';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


export default function App() {


  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.getUser()
        setUsers(fetchedUsers)
      } catch (err) {
        console.error("Failed to load users:", err)
      }
    }

    fetchUsers()
  }, [])

  const handleUserAdded = (newUser: User) => {
    setUsers((prev) => [...prev, newUser])
  }

  const handleUserDeleted = (id: string) => {
    setUsers((prev) => prev.filter(user => user.id !== id))
  }

  return (
    <>
      <div className="page-container">
        <h1>User Management System</h1>

        <div className="content-wrapper">
          <UserForm onUserAdded={handleUserAdded} />

          <hr className="section-divider" />

          <h2>Registered Users</h2>
          <UserList users={users} onUserDeleted={handleUserDeleted} />
        </div>
      </div>
    </>
  )
}
