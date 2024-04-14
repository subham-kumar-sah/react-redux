Redux has 3 core concepts: State, Action, Reducer

--> State: Manages/Contains the states of our aplication.
--> Action: It describes the changes which is to be performed in states.
--> Reducer: It evetually carries out the transaction based on the action inside state.

Redux runs on 3 main prnciples:

--> State of your entire application is stored as a single object tree inside store.
--> The only way to change the state is to dispatch action and object describing what happened(with the help of "type" property as string constants).
--> To specify how the state is transformed by action we write pure reducers.

Redux Store Responsibilityies:
--> Holds application state.(with the help of reducer method)
--> Allows access to store via the getState() method.
--> Allows state to be updated via the dispatch() method.(By passing action to it)
--> Register listeners via the subscribe() method with the help of listeners.
--> Handles unregistering of the listners with the help of the subccribe method.

Middleware:

--> It is the suggested way to extend the redux custom functionality.
--> It basically provides the third-party extension points between dispatching an action and the moment it reaches the reducer.
--> It is mainly used for logging, crash reporting, performing async tasks, etc.
--> We use redux-logger for logging in our application.
--> We pass middleware to the createstore method along with reducer an also pass logger as argument to the middleware.
--> Redux-thunk is used for making our code asynchronous by defining async action creators i.e return a function instead of an action object.
--> The inner function which it returns gets dispatch method as parameter.

Note:
--> Action creator is a function that retuns an action.
--> Reducer is a function that accepts action and state as arguments and returns the next state of the application.
--> In order to make our application more scalable we integrate multiple reducers for our store with different initial states and then combine them together to pass to the store(as store can receive one reducer as agrument).
--> Although we can have multiple properties in a single object but that makes our state and also reducer function more complex.(We can also do this by this way).
--> When we dispatch an action, both the reducers will receive that action, but the differnce is one of them acts on that action while the other ignores it.
--> Actions(dispatch method call) are by default synchronous in nature.
