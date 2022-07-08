const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const carState = {
  cars: ["BMW"],
  count: 1,
};

const getCars = () => {
  return {
    type: "GET_CARS",
  };
};
const setCar = (car) => {
  return {
    type: "SET_CAR",
    payload: car,
  };
};

const carReducer = (state = carState, action) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
      };
    case "SET_CAR":
      return {
        cars: [...state.cars, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const store = createStore(carReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCars());
store.dispatch(setCar("Toyota"));

