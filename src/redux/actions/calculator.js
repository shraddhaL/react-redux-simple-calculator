import {
    ADD_INPUT,
    EVALUATE
  } from '../types/Creators_type';

export const addInput = (operand) => {
    return{
        type: ADD_INPUT,
        operand
    }
}

export const evaluate = () => {
    return{
        type: EVALUATE
    }
}