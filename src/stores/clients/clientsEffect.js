import axios from 'axios'
export const fetchAllClients = async () => {
	try{
		const response = await axios.get("/api/clients")
		const clients = await response.data
		return clients
	}catch(e){
		throw new Error(e.message)
	}
}

export const addClient = async (client) => {
	try{
		const response = await axios.post("/api/clients", client)
		const clientData = await response.data
		return clientData
	} catch(e){
		throw new Error(e.message)
	}
}

export const editClient = async (client) => {
	try{
		const response = await axios.put("/api/clients", client)
		const clientData = await response.data
		console.log(clientData)
		return clientData
	} catch(e){
		throw new Error(e.message)
	}		
}

export const deleteClient = async (id) => {
	try{
		const response = await axios.delete("/api/clients/" + id)
		const data = await response.data
		return data
	} catch(e){
		throw new Error(e.message)
	}	
}

export const searchClients = async (search) => {
	try{
		const response = await axios.get("/api/clients/search?search=" + search)
		const clients = await response.data
		return clients
	} catch(e){
		throw new Error(e.message)
	}
}