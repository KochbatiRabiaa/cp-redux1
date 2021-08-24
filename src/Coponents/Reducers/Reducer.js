
import {v4 as uuidv4} from 'uuid'

const primerState={tasks:[{id:uuidv4() , name:"Task n°1" , done:false},
                         {id:uuidv4() , name:"Task n°2" , done:false},
                         {id:uuidv4() , name:"Task n°3" , done:false},
                         {id:uuidv4() , name:"Task n°4" , done:false}],
                        }

const reducer=(state=primerState, {type, payloadId,payloadText})=> {
    switch(type){
        case "add" :
            return({tasks:[...state.tasks,{id:uuidv4(), name:payloadText , done: false }]})
        
       case "delete" :
            return({tasks:[...state.tasks].filter(task=>task.id!==payloadId)})
        case "taskdone" :
             return({tasks:[...state.tasks].map(task=>task.id==payloadId?{...task,done:!task.done}:task)})
    
        case "edite" :
             return({tasks:[...state.tasks].map(task=>task.id==payloadId.currentTaskId?{...task,name:payloadText}:task)})
    
    default:
        return(state)
            }

}                       

export default reducer
 