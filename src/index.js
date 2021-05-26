import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const countModifier = (count = 0 , action) => {
  if(action.type === "ADD"){
    return count = count + 1;
  }else if(action.type === "MINUS"){
    return count = count - 1;
  }
  return count;
};

const onChange = () => {
  number.innerText = countStore.getState();
}

const countStore = createStore(countModifier);

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type : 'ADD'});
}

const handleMinus = () => {
  countStore.dispatch({type : 'MINUS'});
}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

