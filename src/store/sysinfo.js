import { getSystemInfo } from "../interfaces/login.js"

let config = {
    state:{
        numberOfTasks: 0,
        numberOfNodes: 0,
        numberOfPlugins: 0,

        numberOfWaitingTasks: 0,
        numberOfRunningTasks: 0,
        numberOfFinishTasks: 0
    },
    actions:{
        initmodule({dispatch}){
            return dispatch("updateSysInfo")
        },
        updateSysInfo({state}){

            getSystemInfo().then(res => {
                let data = res.data.data
                state.numberOfTasks = data.numberOfTasks
                state.numberOfNodes = data.numberOfNodes
                state.numberOfPlugins = data.numberOfPlugins
                
                state.numberOfWaitingTasks = data.numberOfWaitingTasks
                state.numberOfRunningTasks = data.numberOfRunningTasks
                state.numberOfFinishTasks = data.numberOfFinishTasks
            })
        }
    }
}

export default config