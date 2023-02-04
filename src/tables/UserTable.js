import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

const UserTable = (props) => (
  <div  className="col-md-10 m-auto">
  <Table striped bordered hover>
    <thead className="text-primary">
      <tr>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <>
              <Button href="#" variant="success" onClick={() => {
                  props.editRow(user)
                }}>EDIT</Button> 
              &nbsp;&nbsp;<Button href="#" variant="danger"onClick={() => props.deleteUser(user.id)}>DELETE</Button> 
              </>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
  </div>
);

export default UserTable;