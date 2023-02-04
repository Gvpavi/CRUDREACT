import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
	
	// Data
	const usersData = [
		{ id: 1, name: 'Jeevi', username: 'Jeevitha' },
		{ id: 2, name: 'Pavi', username: 'Pavithra' },
		{ id: 3, name: 'Giri', username: 'Girimurugan' },
		{ id: 4, name: 'Siva', username: 'Sivagiri' },
		{ id: 5, name: 'APJ', username: 'Abdul Kalam' },
	];

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		// setEditing(false)

		setUsers(users.filter((user) => user.id !== id))
	}

		// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ editing, setEditing ] = useState(false)
	const initialFormState = { id: null, name: '', username: '' }
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	
	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	

	return (
		<div className="container"><br></br>
			 
				<h2 className='text-center text-success'>CRUD OPERATIONS WITH HOOKS</h2><br></br>
			
				<div className="col md-12">
					{editing ? (
						<div className="col-md-12"><br></br>
							<h3 className='text-center text-info'>UPDATE USER</h3><br></br>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						
						<div className="col-md-12"><br></br>
							<h3 className='text-center text-info'>ADD USER</h3><br></br>
							<AddUserForm addUser={addUser} />
						</div>
						
					)}
				
				</div>
				
				<div className="col md-12"><br></br>
					<h3 className='text-center text-info'>VIEW USER DETAILS</h3><br></br>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
				
		</div>
	)
}

export default App;




// import Student from './Student/Student';
 
// function App() {
//   return (
//     <div className="App">
    
//       <Student/>
 
 
//     </div>
//   );
// }
 
// export default App;