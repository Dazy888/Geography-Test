import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { testReducer } from "@/store/reducer/TestSlice"

const rootReducer = combineReducers({ testReducer })

export const store = configureStore({ reducer: rootReducer })
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
