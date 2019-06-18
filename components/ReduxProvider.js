import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem'

import thunkMiddleware from 'redux-thunk'

import reducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage: ExpoFileSystemStorage,
    // stateReconciler: autoMergeLevel2,
}

const store = createStore(persistReducer(persistConfig, reducer), applyMiddleware(thunkMiddleware))

/**
 * @returns {React.Element} A wrapper for the main app that provides the Redux store.
 */
const ReduxProvider = props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            {props.children}
        </PersistGate>
    </Provider>
)

export default ReduxProvider
