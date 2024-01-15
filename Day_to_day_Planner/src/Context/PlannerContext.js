import { createContext, useContext } from "react";


export const PlannerContext = createContext({
    todo:[
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const usePlanner = ()=>{
    return useContext(PlannerContext)
}

export const PlannerProvider = PlannerContext.Provider;