
import { firebaseMutations } from 'vuexfire'
import {addAndSync, getDataAndSync, removeAndSync} from '../helpers/dataSync'

export default {
    'ADD_TASK'(state, payload) {
        if (!payload.title || !payload.description) return;
        addAndSync(state, payload)
    },
    'REMOVE_TASK'(state, payload) {
        removeAndSync(state, payload)
        // state.tasks = state.tasks.filter(task => {
        //     if (task.id !== payload.id) return task;
        // })
    },
    'COMPLETE_TASK'(state, payloadId) {
        state.tasks = state.tasks.filter(task => {
            if (task.id === payloadId) {
                task.isComplete = true;
            }
            return task;
        })
    },
    'SET_TYPE_FILTER'(state, payload) {
        state.typeFilter = payload
    },
    'LOAD_DATA'(state, payload) {
        if(payload) getDataAndSync(state, payload)
    },
    ...firebaseMutations
}