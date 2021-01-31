import React, {useState} from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons';

import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import { requestAddClient } from "../stores/clients/clientsActions";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({requestAddClient}, dispatch)
}

const ClientAdd = ( {requestAddClient, history}) => {

	const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	const [phone_nbr, setPhone_nbr] = useState('')
	// const {requestAddClient} = props
	const submitClient = (event) => {
		event.preventDefault()
		const client = {
			name,
			phone_nbr,
			address
		};
		console.log(client)
		requestAddClient(client, history)

	}

	const resetClient = () => {
		setName('');
		setAddress('');
		setPhone_nbr('');
	}

	return (
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>Add Client to List</Card.Header>
				<Form onReset={resetClient} onSubmit={submitClient}>
					<Card.Body>
							<Form.Row>
							  	<Form.Group as={Col}>
								    <Form.Label>Name</Form.Label>
									    <Form.Control required autoComplete="off"
									    	type="text" name = "name"  //Name Attribute
									    	value={name} onChange={(e) => setName(e.target.value)}
									    	className="bg-dark text-white"
									    	placeholder="Enter Client Name" 
								    	/>
							  	</Form.Group>
							</Form.Row>	

							<Form.Row>
							  	<Form.Group as={Col}>
								    <Form.Label>Phone Number</Form.Label>
									    <Form.Control required autoComplete="off"
									    	type="text" name = "clientPhone"  //Name Attribute
									    	value={phone_nbr} onChange={(e) => {
										    		if(e.target.value.match(/^\d*$/) != null){
										    			setPhone_nbr(e.target.value)
												      console.log('yes')
													  }
										    	}
										    }
									    	className="bg-dark text-white"
									    	placeholder="Enter Client Phone Number" 
								    	/>
							  	</Form.Group>
							</Form.Row>

							<Form.Row>
							  	<Form.Group as={Col}>
								    <Form.Label>Client Address</Form.Label>
									    <Form.Control required autoComplete="off"
									    	type="text" name = "clientAddress"  //Name Attribute
									    	value={address} onChange={(e) => setAddress(e.target.value)}
									    	className="bg-dark text-white"
									    	placeholder="Enter Client Address" 
								    	/>
							  	</Form.Group>
							</Form.Row>
					</Card.Body>

					<Card.Footer style={{"textAlign":"right"}}>
						  <Button size="sm" variant="primary" type="submit">
						    <FontAwesomeIcon icon = {faSave}/> Save
						  </Button>{' '}
						  <Button size="sm" variant="info" type="reset">
						    <FontAwesomeIcon icon = {faUndo}/> Reset
						  </Button>
					</Card.Footer>
				</Form>		
			</Card>
	)
}


export default connect(null, mapDispatchToProps)(ClientAdd)