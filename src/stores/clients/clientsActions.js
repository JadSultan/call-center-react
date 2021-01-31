import { GET_ALL_CLIENTS, ADD_CLIENT, DELETE_CLIENT, SEARCH_CLIENTS, EDIT_CLIENT } from '../constants/clientsActionTypes'

// export const requestClientsData = () => ({ type: GET_ALL_CLIENTS.LOAD });

//All Clients List
export const requestAllClients = () => ({ type: GET_ALL_CLIENTS.LOAD });
export const receiveAllClientsSuccess = allClients => ({ type: GET_ALL_CLIENTS.LOAD_SUCCESS, payload: allClients });
export const receiveAllClientsFail = error => ({ type: GET_ALL_CLIENTS.LOAD_FAIL, payload: error });


//Add Client
export const requestAddClient = (client, history) => ({ type: ADD_CLIENT.LOAD, payload: {client, history} });
export const receiveAddClientSuccess = () => ({ type: ADD_CLIENT.LOAD_SUCCESS });
export const receiveAddClientFail = error => ({ type: ADD_CLIENT.LOAD_FAIL, payload: error });


//Edit Client
export const requestEditClient = (client, history) => ({ type: EDIT_CLIENT.LOAD, payload: {client, history} });
export const receiveEditClientSuccess = () => ({ type: EDIT_CLIENT.LOAD_SUCCESS });
export const receiveEditClientFail = error => ({ type: EDIT_CLIENT.LOAD_FAIL, payload: error });


//Delete Client
export const requestDeleteClient = id => ({ type: DELETE_CLIENT.LOAD, payload: id  });
export const receiveDeleteClientSuccess = id => ({ type: DELETE_CLIENT.LOAD_SUCCESS, payload: id });
export const receiveDeleteClientFail = error => ({ type: DELETE_CLIENT.LOAD_FAIL, payload: error });


//Search Clients
export const requestSearchClients = search => ({ type: SEARCH_CLIENTS.LOAD, payload: search  });
export const receiveSearchClientsSuccess = clients => ({ type: SEARCH_CLIENTS.LOAD_SUCCESS, payload: clients });
export const receiveSearchClientsFail = error => ({ type: SEARCH_CLIENTS.LOAD_FAIL, payload: error });

