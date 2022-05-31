import { createStore, applyMiddleware } from "redux";
import testReducer from "./Test-reducer";
import thunkMiddleware from 'redux-thunk'

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>

export type AppStateType = ReturnType<typeof testReducer>

const store = createStore(testReducer, applyMiddleware(thunkMiddleware))
export default store