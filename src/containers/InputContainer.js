import React from "react";
import Operand from "../components/Operand";

const InputContainer = () => {
  const inputs = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0,'+','-','*','/','='];
  
  return (
    <div>
      
      {inputs.map((i, index) => (  
          <Operand key={index} value={i}/>
        ))}
    </div>
  );
};

export default (InputContainer);