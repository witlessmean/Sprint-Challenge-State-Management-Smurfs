1. What problem does the context API help solve?
state management

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are used to update state after being dispatched to reducers which hold state. The store holds all the state in the application. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state of the entire application, where the state is centered, component state is the state of a single component. application state for more advanced and larger projects. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

middleware which lets us use async functions / functions inside of our action creators. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. The idea of a store containing all the state i need is interesting to me. I do think however that context API might be more suited for smaller applications. 