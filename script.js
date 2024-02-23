import { createStore } from 'https://cdn.skypack.dev/redux';

const initState = 0

// Reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload
    case 'WITHDRAW':
      return state - action.payload
    default:
      return state
  }
}

// STORE
const store = window.store = createStore(reducer)

// Action
function actionDeposit(payload) {
  return {
    type: 'DEPOSIT',
    payload
  }
}
function actionWithdraw(payload) {
  return {
    type: 'WITHDRAW',
    payload
  }
}

// Event handler
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

deposit.onclick = function() {
  store.dispatch(actionDeposit(10))
}
withdraw.onclick = function() {
  store.dispatch(actionWithdraw(10))
}

// Listener
store.subscribe(() => {
  render()
})

// Render
function render() {
  const output = document.querySelector('#output')
  output.innerHTML = store.getState()
}
render()