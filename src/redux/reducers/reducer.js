import { ADD_INPUT } from '../types/Creators_type'
import { EVALUATE } from '../types/Creators_type'
let initialState = {
    expression: [],
    operand: [],
    operator: [],
    total: null
}
let op2,op1,op = null;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT:
            if (['+','-','*','/'].includes(action.operand)) {
                return {
                    ...state,
                    expression: [...state.expression, action.operand],
                    operator: [...state.operator, action.operand],
                    total: null
                }
            } else {
                return {
                    ...state,
                    expression: [...state.expression, action.operand],
                    operand: [...state.operand, action.operand],
                    total: null
                }
            }

        case EVALUATE:
            let op1_true = 1,currentop;
              for (let i = 0; i < state.expression.length; i++){
                currentop = state.expression[i];
                if (state.operand.includes(currentop)) {
                    if (op1_true === 1) {
                        op1 = currentop
                        while (state.operand.includes(state.expression[i+1])){ // next value in array is included in array?
                            op1=op1+state.expression[i+1] // both operands are string so they dont get evaluated
                            i++;
                        }
                        op1_true = 0
                    } else {
                        op2 = currentop
                        while (state.operand.includes(state.expression[i+1])){ 
                            console.log("inside="+state.expression[i+1])
                            console.log("before op is now ="+op2)
                            op2=op2+state.expression[i+1]
                            console.log("inside op is now ="+op2)
                            i++;
                        }
                    }
                } else if (state.operator.includes(currentop)) {
                    op = currentop
                }
              }

            switch (op) {
                case '+':state.total =parseInt(op1)+parseInt(op2); break;
                case '-':state.total =parseInt(op1)-parseInt(op2);console.log(parseInt(op1)-parseInt(op2)); break;
                case '*':state.total =parseInt(op1)*parseInt(op2); break;
                case '/':state.total =parseInt(op1)/parseInt(op2); break;
                default:
                    break;
            }
            //for each elemet in array put in op and then evaluate and total:
            op1=null;
            op2=null;
            console.log(state.total)
            return {
                ...state,
                expression:[],
                operator:[],
                operand: [],
                total: state.total

            }
        default: return state
    }
}

export default reducer