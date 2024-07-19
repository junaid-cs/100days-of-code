const initailState = 0;

const changeTheNumber = (state = initailState, action) =>{
    switch (action.type) {
        case "INCREMENT" : return state + 5;
        case "DECREMENT" : return state - 5;
        default : return state;
    }
}

export default changeTheNumber;