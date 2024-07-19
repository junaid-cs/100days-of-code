export const incNumber = () =>{
    return{
        type:"INCREMENT"
    }
}

export const decNumber = () =>{
    return{
        type:"DECREMENT"
    }
}
export const multNumber = (num) =>{
    return{
        type:"MULTIPLICATION",
        payload : num
    }
}

export const divNumber = () =>{
    return{
        type:"DIVISION"
    }
}