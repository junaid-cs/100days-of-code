const initailState = 5;

const multTheNumber = (state = initailState, action) =>{
    switch (action.type) {
        case "MULTIPLICATION" : return state * 5;
        case "DIVISION" : return state / 5;
        default : return state;
    }
}

export default multTheNumber;