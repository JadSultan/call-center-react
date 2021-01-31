import { GET_ALL_CLIENTS, ADD_CLIENT, DELETE_CLIENT, SEARCH_CLIENTS, EDIT_CLIENT } from '../constants/clientsActionTypes'

const initialState = {
  loading: false,
  error: '',
	clients: [],
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {

    //GET ALL
    case GET_ALL_CLIENTS.LOAD:
      return {
      	...state,
      	loading: true
      }
    case GET_ALL_CLIENTS.LOAD_SUCCESS:
      return {
        ...state,
        loading:  false,
        clients: action.payload
      }

    case GET_ALL_CLIENTS.LOAD_FAIL:
      alert('Error Getting All Clients')
      return {
        ...state,
        loading: false,
        error:  action.payload
      } 


    //ADD
    case ADD_CLIENT.LOAD:
      return {
        ...state,
        loading: true,
      }

    case ADD_CLIENT.LOAD_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
      }
    
    case ADD_CLIENT.LOAD_FAIL:
      alert('ERROR ADDING CLIENT')
      return {
        ...state,
        loading: false,
        error:  action.payload
      }


    //EDIT
    case EDIT_CLIENT.LOAD:
      return {
        ...state,
        loading: true,
      }

    case EDIT_CLIENT.LOAD_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
      }
    
    case EDIT_CLIENT.LOAD_FAIL:
      alert('ERROR EDITING CLIENT')
      return {
        ...state,
        loading: false,
        error:  action.payload
      }


    //DELETE
    case DELETE_CLIENT.LOAD:
      return {
        ...state,
        loading: true,
      }

    case DELETE_CLIENT.LOAD_SUCCESS:
      // console.log(state.clients.filter(client => client.id !== action.payload))
      return {
        ...state,
        loading: false,
        clients: action.payload
      }
    
    case DELETE_CLIENT.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error:  action.payload
      }


    //SEARCH
    case SEARCH_CLIENTS.LOAD:
      return {
        ...state,
        loading: true
      }
    case SEARCH_CLIENTS.LOAD_SUCCESS:
      return {
        ...state,
        loading:  false,
        clients: action.payload
      }

    case SEARCH_CLIENTS.LOAD_FAIL:
      alert('Error searching All Clients')
      return {
        ...state,
        loading: false,
        error:  action.payload
      }
      
    default:
      return state;
  }
}; 
export default clientsReducer