const states = {
    apple: 5
}

const reducer = (state = states , action )=>{
    switch (action.type) {
        case "BUY_APPLE":
            return {apple: state.apple -1}
        default:
            return state
    }
}

const store = Redux.createStore(reducer);

store.subscribe(()=>{
    document.getElementById('apple_count').innerHTML = "تعداد سیب ها :" + store.getState().apple
})

document.getElementById('buy_apple').addEventListener('click' , ()=>{
    store.dispatch({type:"BUY_APPLE"})
})

document.getElementById('apple_count').innerHTML = "تعداد سیب ها :" + store.getState().apple





