import { combineReducers, createStore } from "redux"
import testReducer from "@/store/reducer/test-reducer"

let rootReducer = combineReducers({
    test: testReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default createStore(rootReducer)