import redux from 'redux'
// const redux = require('redux');

const init = {
    apple: 5
}

const reducer = (state = init , action)=>{
    switch (action.type) {
        case "BUY_APPLE":
            return { ...state , apple: state.apple - 1}
    
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.dispatch({type:"BUY_APPLE"})
console.log('initial states' , store.getState());
store.subscribe(()=>console.log('state changed' , store.getState()))
store.dispatch({type:"BUY_APPLE"})
store.dispatch({type:"BUY_APPLE"})
store.dispatch({type:"BUY_APPLE"})

