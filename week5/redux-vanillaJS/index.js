// JavaScript로 redux 사용해보기
const INCREMENT = "INCREMENT";
const initialState = {
  count: 0,
};

function increment() {
  return {
    type: INCREMENT,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

function updateUI() {
  const countElement = document.getElementById("count");
  //   console.log(store.getState());
  countElement.textContent = store.getState().count;
}

function handleIncrement() {
  store.dispatch(increment());
}

const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", handleIncrement);

updateUI();
store.subscribe(updateUI);
