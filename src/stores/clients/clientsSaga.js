import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_ALL_CLIENTS, ADD_CLIENT, DELETE_CLIENT, SEARCH_CLIENTS, EDIT_CLIENT } from '../constants/clientsActionTypes'

import { 
  receiveAllClientsSuccess, receiveAllClientsFail,
  receiveAddClientSuccess, receiveAddClientFail,
  receiveDeleteClientSuccess, receiveDeleteClientFail,
  receiveSearchClientsSuccess, receiveSearchClientsFail,
  receiveEditClientSuccess, receiveEditClientFail
 } from "./clientsActions";

import {fetchAllClients, addClient, deleteClient, searchClients, editClient } from './clientsEffect'

//GET ALL CLIENTS CLIENT SAGA
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getAllClientsWorker() {
  try {
    const clients = yield call(fetchAllClients);
    yield put(receiveAllClientsSuccess(clients));
  } catch (e) {
    yield put(receiveAllClientsFail(e.message));
  }
}

// WATCHER SAGAS
export function* allClientsSaga() {
  yield takeLatest(GET_ALL_CLIENTS.LOAD, getAllClientsWorker);
}


//ADD CLIENT SAGA
function* addClientWorker(action) {
  try {
    yield call(addClient, action.payload.client)
    yield put(receiveAddClientSuccess());
    // console.log(action.payload.history)
    yield action.payload.history.push('/clients')

  } catch (e) {
    yield put(receiveAddClientFail(e.message));
  }
}

export function* addClientSaga() {
  yield takeEvery(ADD_CLIENT.LOAD, addClientWorker);
}


//EDIT CLIENT SAGA
function* editClientWorker(action) {
  try {
    yield call(editClient, action.payload.client)
    yield put(receiveEditClientSuccess());
    yield action.payload.history.push('/clients')

  } catch (e) {
    yield put(receiveEditClientFail(e.message));
  }
}

export function* editClientSaga() {
  yield takeEvery(EDIT_CLIENT.LOAD, editClientWorker);
}

//DELETE CLIENT SAGA
function* deleteClientWorker(action) {
  try {
    yield call(deleteClient, action.payload)
    const clients = yield call(fetchAllClients);
    yield put(receiveDeleteClientSuccess(clients));
  } catch (e) {
    yield put(receiveDeleteClientFail(e.message));
  }
}

export function* deleteClientSaga() {
  yield takeEvery(DELETE_CLIENT.LOAD, deleteClientWorker);
}


//SEARCH CLIENT SAGA
function* searchClientsWorker(action) {
  try {
    const clients = yield call(searchClients, action.payload);
    yield put(receiveSearchClientsSuccess(clients));
  } catch (e) {
    yield put(receiveSearchClientsFail(e.message));
  }
}

// WATCHER SAGAS
export function* searchClientsSaga() {
  yield takeLatest(SEARCH_CLIENTS.LOAD, searchClientsWorker);
}