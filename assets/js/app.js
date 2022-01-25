const fruitStates = {
    apple: 5,
    orange: 10
}
const foodStates = {
    sandwich: 15
}

const fruitReducer = (state = fruitStates , action )=>{
    switch (action.type) {
        case "BUY_APPLE":
            return {...state , apple: state.apple -1}
        case "BUY_ORANGE":
            return {...state , orange: state.orange -1}
        default:
            return state
    }
}

const foodReducer = (state = foodStates , action )=>{
    switch (action.type) {
        case "BUY_SANDWICH":
            return {...state , sandwich: state.sandwich -1}
        default:
            return state
    }
}

const rootReducer = Redux.combineReducers({
    fruit: fruitReducer,
    food: foodReducer
})

const store = Redux.createStore(rootReducer);

const render = ()=>{
    console.log(store.getState());
    document.getElementById('apple_count').innerHTML = "تعداد سیب ها :" + store.getState().fruit.apple
    document.getElementById('orange_count').innerHTML = "تعداد پرتقال ها :" + store.getState().fruit.orange
    document.getElementById('sandwich_count').innerHTML = "تعداد ساندوسچ ها :" + store.getState().food.sandwich
}

store.subscribe(()=>{
    render()
})

document.getElementById('buy_apple').addEventListener('click' , ()=>{
    store.dispatch({type:"BUY_APPLE"})
})
document.getElementById('buy_orange').addEventListener('click' , ()=>{
    store.dispatch({type:"BUY_ORANGE"})
})
document.getElementById('buy_sandwich').addEventListener('click' , ()=>{
    store.dispatch({type:"BUY_SANDWICH"})
})

render()





