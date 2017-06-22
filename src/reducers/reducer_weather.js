import {FETCH_WEATHER} from '../actions/index.js'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]) //concat doesn't change the existing array, but concats
            //the existing state and adds new data to it
            //this returns a new instance of state with existing data plus new data
            //using state.push(action.payload.data) for instance would manipulate the existing array, we never do that
            //in react and redux, rather we create a new array that has the existing data and new data which is what
            //we did with concat()
    }
    return state;
}