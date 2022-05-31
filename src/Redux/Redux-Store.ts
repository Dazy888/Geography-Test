import { combineReducers, createStore } from "redux";
import testReducer from "./Test-reducer";

let rootReducer = combineReducers({
    // testPage: testReducer
})

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>

const store = createStore(rootReducer)
export default store