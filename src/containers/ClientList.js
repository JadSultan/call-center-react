import React, {useEffect, useState} from 'react';
import {Card, Table, ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'
// import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

import { bindActionCreators } from "redux";

import { requestAllClients, requestDeleteClient, requestSearchClients } from "../stores/clients/clientsActions";

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({requestAllClients, requestDeleteClient, requestSearchClients}, dispatch)
}

function ClientList(props){
  // const dispatch = useDispatch();

  const [search, setSearch] = useState('')
  const {requestAllClients, requestDeleteClient, requestSearchClients} = props
	useEffect(() => {
        // dispatch(requestAllClients());
        requestAllClients();
    }, [])

	// useEffect(() => {requestAllClients(); console.log(props)}, [])
	const {clients} = props
	return(
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header> 
				
				<Card.Header>
					<FontAwesomeIcon icon = {faList}/> Client List
	        <div style={{"float":"right"}}>
						<InputGroup size="sm">
						  <FormControl placeholder="Search" className={"info-border bg-dark text-white"}
							  value={search} autoComplete="off"
							  onChange={(e) => setSearch(e.target.value)}
				      />
						  <InputGroup.Append>
						      <Button size="sm" variant="outline-info" type="button"
						      	onClick={() => requestSearchClients(search)}
					      	>
						          <FontAwesomeIcon icon={faSearch}/>
						      </Button>
						      <Button size="sm" variant="outline-danger" type="button"
						      	onClick={() => setSearch('')}
						      >
						          <FontAwesomeIcon icon={faTimes} />
						      </Button>
						  </InputGroup.Append>
						</InputGroup>
	        </div>
        </Card.Header>
			</Card.Header>

			<Card.Body>
			<Link to={"add"} className="btn btn-sm btn-outline-primary">
				<Button>AddClient</Button>

			</Link>
				<Table bordered hover striped variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{
							clients.map((client) => (
								<tr key={client.id}>
									<td>{client.id}</td>
									<td>{client.name}</td>
									<td>{client.phone_nbr}</td>
									<td>{client.address}</td>
									<td>
										<ButtonGroup>
											<Link to={"clients/"+client.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon = {faEdit}/></Link>
											<Button size="sm" variant="outline-danger" onClick={() => {requestDeleteClient(client.id);}}><FontAwesomeIcon icon = {faTrash}/></Button>
										</ButtonGroup>
									</td>
								</tr>
							)) || 'No'
						}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);