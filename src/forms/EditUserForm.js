import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form className="col-md-4 m-auto"
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Form.Group as={Row} className="mb-3" controlId="formName">
        <Form.Label column sm={2}>Name</Form.Label>
		<Col sm={8}>
        <Form.Control type="text" placeholder="Name" name="name" value={user.name} onChange={handleInputChange}/>
      </Col>
	  </Form.Group>
	  <Form.Group as={Row} className="mb-3" controlId="formUserName">
        <Form.Label column sm={2}>Username</Form.Label>
		<Col sm={8}>
        <Form.Control type="text" placeholder="Username" name="username" value={user.username} onChange={handleInputChange}/>
		</Col>
	  </Form.Group>
    <Button variant="primary" type="submit" className="mb-4 mx-5" size="lg-3" active>
        UPDATE USER
      </Button>{' '}
	  <Button variant="secondary" type="cancel" className="mb-4" size="lg-3" >
        CANCEL
      </Button>
      <hr class="mt-2 mb-2"></hr>
    </Form>
  )
}

export default EditUserForm;