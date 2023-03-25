import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from './RootReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    whitelist: ['login','user','appState'],
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch