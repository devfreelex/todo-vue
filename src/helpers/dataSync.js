import  {configRef}  from '../db/firebase'
import genId from './generateId'

const tasksRef = configRef()

export const addAndSync = (state, payload) => {
    payload.id = genId()
    tasksRef.push(payload)
    tasksRef.on('value', function (snap) {
        const dataList = snap.val()
        const arrTasks = []
        for (let data in dataList) { 
            payload.id = data
            arrTasks.push(dataList[data])
        }
        state.tasks = [...arrTasks]
    });
}


export const getDataAndSync = (state, payload) => {
    tasksRef.once('value', snap => {
        const tasks = []

        snap.forEach(childSnap => {
            tasks.push(childSnap.val());
        });

        state.tasks = [...tasks]
    });

}


export const removeAndSync = (state, payload) => {

    const remove = (key) => {
        tasksRef.child(key).remove()
    }
    
    tasksRef.once('value', snap => {
        const tasks = []
        let key = ''

        snap.forEach(childSnap => {
            let task = childSnap.val()
            if(task.id === payload.id) key = childSnap.key
        });

        remove(key)
        getDataAndSync(state)
        state.tasks = [...tasks]
    });

}
