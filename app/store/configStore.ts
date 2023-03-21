import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from './RootReducer'
export const store = configureStore({
    reducer: {
        RootReducer

     },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch