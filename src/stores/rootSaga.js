import { all } from 'redux-saga/effects'
import { allClientsSaga, addClientSaga, deleteClientSaga, searchClientsSaga, editClientSaga } from './clients/clientsSaga'
// import statsSaga from './statsSaga'


function* rootSaga() {
	yield all([
		allClientsSaga(),
		addClientSaga(),
		deleteClientSaga(),
		searchClientsSaga(),
		editClientSaga()
	])
}


export default rootSaga