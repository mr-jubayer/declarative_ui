# Thinking about UI declaratively ( Design UI, Defining State )

- To Implement a UI and manage states always follow these steps:

1. Identify your component’s different visual states
   - _For ex_: A form that has it's (Empty - Typing - Submitting - Success/Error)
2. Determine what triggers those state changes ( make diagram )
   - _For ex_: The is two type of user trigger - 1. Typing 2. Click Submit
   - _But_: The computer will take more decision/trigger, like give "success" or "Error"
3. Represent the state in memory using _useState_
   - Represent all state in memory using useState for every needed state
4. Remove any non-essential state variables
   - Remove states those can manage using others state. Like we've three status > Submitting, success, Error.
     We can manage typing and empty state using others state.
5. Connect the event handlers to set the state

<hr>

Learn more: <br>
<a src="https://react.dev/learn/reacting-to-input-with-state"> React Doc Article </a>
<a src="https://reactive-accelarator.vercel.app/reactive-accelarator/React-js/module-3/declaretive-imperative"> Lws Doc Article </a>
