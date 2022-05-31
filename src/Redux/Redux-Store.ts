import { createStore } from "redux";
import testReducer from "./Test-reducer";

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>

const store = createStore(testReducer)
export default store