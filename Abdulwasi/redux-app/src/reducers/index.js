import multTheNumber from "./multDiv";
import changeTheNumber from "./upDown";

import { combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber, multTheNumber
});

export default rootReducer;