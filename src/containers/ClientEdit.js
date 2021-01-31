import React, {useState, useEffect} from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons';

import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import axios from 'axios'
import { requestEditClient } from "../stores/clients/clientsActions";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({requestEditClient}, dispatch)
}

const ClientEdit = ({requestEditClient, history, match}) => {

	const [id, setId] = useState(null)
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	const [phone_nbr, setPhone_nbr] = useState('')
	const clientId = match.params.id;

	useEffect(() => {
		if(clientId){
			fetchClientById(clientId);
		}
	}, [])
	
	const fetchClientById = async (id) => {
		try{
			// const response = await axios.get("http://localhost:8080/api/clients")
			const response = await axios.get("/api/clients/" + id)
			const client = await response.data
			setId(client.id)
			setName(client.name)
			setName(client.name)
			setPhone_nbr(client.phone_nbr)
			setAddress(client.address)
			// console.log(client)
		}catch(e){
			throw new Error(e.message)
			// return []
		}
	}
	
	const submitClient = (event) => {
		event.preventDefault()
		const client = {
			id,
			name,
			phone_nbr,
			address
		};
		// console.log(client)
		requestEditClient(client, history)
	}

	const resetClient = () => {
		setName('');
		setAddress('');
		setPhone_nbr('');
	}

	return (
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>Edit Client: {name}</Card.Header>
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
						    <FontAwesomeIcon icon = {faSave}/> Update
						  </Button>{' '}
						  <Button size="sm" variant="info" type="reset">
						    <FontAwesomeIcon icon = {faUndo}/> Reset
						  </Button>
					</Card.Footer>
				</Form>		
			</Card>
	)
}


export default connect(null, mapDispatchToProps)(ClientEdit)