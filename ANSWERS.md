- [ ] Why would you use class component over function components (removing hooks from the question)?
Use functional components if you are writing a presentational component which doesn’t have its own state or needs to access a lifecycle hook. Otherwise you can stick to class components

- [ ] Name three lifecycle methods and their purposes.
The Birth/Mounting Phase
This is the phase when the component is being built out from the ground up. A few things are happening here: Whatever initial data you want access to will be defined on the constructor of this phase

Growth/Updating Phase
In the Growth/Updating phase you’re updating compnent data.

Death/Un-mounting Phase
Again, self-explanatory, but the unmounting phase includes removing the component from the screen.

Component is removed from the screen.
componentWillUnmount is called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?
Building your own Hooks lets you extract component logic into reusable functions.
Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more, you can build Hooks that are just as easy to use as React’s built-in features.

- [ ] Why is it important to test our apps?
too find bugs early and have confidence in our code as we write it. Also to impress employeers :)