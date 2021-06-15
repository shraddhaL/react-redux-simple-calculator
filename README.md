# react-redux-basic-calculator
This is a simple calculator for doing basic mathematical operations.[+,-,*,/]

**Scripts:**

In the project directory, you can run:
```
npm start
```

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.


The page will reload if you make edits.##

You will also see any lint errors in the console.



## I will read you through the code:


* App.js takes you to <CalculatorContainer> container, which first has <Display> component that will display output or the expression and then another container that is <InputContainer>.
  
  
* InputContainer maps the inputs array (that has values of keypad to be dispalyed) to <Operand> component, so that you dont need to create buttons manually for each operand and operator.
  
  
* Display component returns the expression or the total based on state, initially it displays '0'.
  

* Operand component calls the reducer based on the button clicked, either '=' i.e. for evaluation or if button clicked is an operand or operator, action  dispatched is addInput.
  
  
* In reducer addInput, checks for payload and adds it into respective array of operand or operator, and also it adds the payload into expression array.
  
  
* On dispatching evaluate action, reducer checks action type that is EVALUTE and then iterates over the expression array, it first check if current value in array is operand, if it is ... it check if that is operand1 or operand2, it checks if next value of expression array is next digit of operand or not, if it is, it adds to op1/op2 string (it will basically concatenate them for eg. 9+""+2=> 92 which is a string not a number). But if current value in array is operator it added to op.
  
* After iterating, it checks which operation is to be performed using switch case and it continues to calculate the total.
  
