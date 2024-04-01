const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// const initialState = {
//   noOfCakes: 100,
//   noOfIceCreams: 50,
// };

const cakeInitialState = {
  noOfCakes: 100,
};
const iceCreamInitialState = {
  noOfIceCreams: 50,
};

//Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First reducer action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//reducer function
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         noOfCakes: state.noOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         noOfIceCreams: state.noOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated Store", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
