/////////////////////////////// 03. React Basics /////////////////////////////////
// - React Key Concepts
// 1. Don't touch the dom, I will do it - using Virtual Dom.
// Imperative vs Declarative paradiagm
// Directly changes the dom by documentbyid.innerhtml etc. We have to manage a lot of edge cases. That's bad :/
// Decalrative: We tell it this is the state of the our app & React automatically just does it.
// In Simple Words, we give the state & it updated dom in the best way possible by itself.

// 2. Component Architecture
// Basically, we have components for every thing in react. We join these components to make a big app like a lego house ;)

// 3. Uni-Directional Data Flow
// Basically, data flows from top to bottom. One way Only. To makes error debugging easy & also react Data Flow Easy :)

// 4. UI-Library
// Basically, React is just a ui library. We can use it anywhere for UI. It's not complete frameWork. we can use it on Cross-Platform :)

// setState, useState is Asynchronous
// setState, useState is Asynchronous bcz react batches these set states calls so that it can determine what the most optimal strategy for re-rendering the website is going to be. what do I mean by this. Well, lets say you imagine that you have an application where you have a lot of diffrent components and then perhaps through one interaction, one button click, you are actually updating the states in multiple components. In that case, React doesn't want to just completely isolate and do all those diffrent updates independently. React wants to figure out if it can stack these together, or maybe there's a more optimal way of updating these components so that it is more performance. That's all react is doing under the hood for us. So, as a result It's an asynchronous call.

// Functional Components & Class Components
// In class components, when re-renders happen it will only run the render method in which we have return but in functional Components, In re-render all the function runs again. It's not only return ftn.

// UseState returns two values [value, setValue], So Re-renders happens when the value changes, React is smart enough to know that when the value changes. It doesn't re-render when u call setValue ftn, it re-renders when value changes. If the value is same it is not going to re-render i.e if you have value "a" and then you change it back to "a". It will not re-render.

// Dom & Virtual Dom
// Basically, React under the hood makes the javascript tree copy of realDom called Virtual Dom. Because it doesn't want to make any changes directly to the real dom bcz its any expensive process.

// So, when a changing happens or State changes, React takes the snapShot of the virtual Dom and makes a copy of Virtual DOM - Virtual Dom Copy.
// After that react batches all the states call on the basis of it's speed. After batching, It apply all these changes in the Virtual Dom Copy in a Optimal way possible. After applying all those changes, it compare the virtual Dom Copy with the snapShot of Virtual Dom. After Comparing, it apply all those changes (which are present b/w snapshot & VirtualDom Copy) to the Real Dom. That's why react is most Optimal & has more speed.

// REACT, REACT DOM, JSX
// JSX - it is a syntax extension to JavaScript. Basically, it's a syntatic Sugar. JSX allows us to write html in the react.
// REACT -  When we create a component in react using jsx, React under the hood is using Rect.createElement Syntax. When the engine compiles our code, it converts all our code to the Rect.createElement Syntax.
// REACT DOM - ReactDom is where we render our app compoent code.

// When we add or remove an element in React, it reflows the dom tree. But, if we just change the value of a node, then it will only update that node. React is that smart. We can check this behaviour by going to Rendering in developer tools and then clicking the paint flashing. :)

/////////////////////// 05 Routing + React-Router ////////////////
// React Router Outlet - is used for nesting components.
// To show a nested component we first go to the outside component and import outlet from react-router-dom. Then where we want to show the inner component, we just write </Outlet>.

///////////////////// 07. React Context For State Management //////////////
// Only those components will re-render which are using UseContext Hook, if something from the context store changes.
// Note: if some value say "a" changes in the context Store, then all components will re-render that are using UseContext. But it does't mean that it will re-render anything in dom, because it only will if jsx values update on the basis of this value ("a" in this case). However, what u still need to think about is the fact that all of the code up untill that return statement will re-render.

/////////////////// 12 Deploying With Netlify /////////////////////////////
// How to solve the netlify Error "Resources not found for this page" (Route would be nested route in this case like /shops/jackets etc) ?
// So, To solve this problem. We first have to understand web server.
// When we build an app, it create a static website/build folder. The netlify host this build folder on it's sever. So, whenever user tries to access base route "/", what happens is that this browser actually makes a request to the netlify web server that's hosting our build script. Web server checks if it has any resources for slash "/" endpoint, So it has it will return us the index html which has javascript & css.
// So, when we try to hit a route other than "/" like "/shop/jackets", netlify checks on its server that if it has any resources for that route, but it doesn't have any resource to serve for that route. that's why it gives us as Error.
// Netlify only has index.html which is for "/" route.
// Also, there you should understand the concept of single page app. Basically, our index.html has all its routes so whenever we hit a route it generates the html & css code for that route and render that code.

// So, in order to fix this, what we need to do is we need to to say, oh, whenever you request a resource for any end point at all, "always send index.html".

// So, to implement this in code we should make redirects file. In redirects file, we should should tell netlify that for every endpoint hit You should return index.html bcz index.html will see the route and then will genrate the code according to it.

///////////////////////////// 13. Reducers ///////////////////////////////////////////
// CartContext = { cartItems: [], cartCount: 0, cartTotal: 0} & CartReducer = { cartItems: [], cartCount: 0, cartTotal: 0}
// They both are same but difference is that cart Reducer use actions to update the state. Action is an object that has two values, 1. Type: String 2. Payload: anthing (optional).

// Reducers are realy just these object representations of these values that recieve action, and then these actions in turn will update the values inside of the reducer object.
// In Simple, reducer is a simple object which recieve action (object) { type, payload(optional)} and on the basis of action, it will update the state. It's just a pattern reducer follow. We use reducer rather than updating the states using useState, useEffect.

// Note: We should use Reducer when we need to update more than 1 value by a single action, else we should use simple set State or what your team uses.
// Reducer is best bcz it store the states in a single place and also update the state using actions only.

///////////////////////////// 14 Redux ///////////////////////////////////////////
// CONTEXT API vs REDUX
// 1. Accessibilty - Redux is a global state management, that's why it has to wrap the entire application while in context, we can wrap some parts/portion of application.
// 2. Data Flow - Redux has a root reducer which is made by adding reducer A,B,C. So, that reducer can pass states to all components 1,2,3. And any component can dispatch a action, and any individual reducer can update it's state on the base of action. while Let's consider Context api with reducers, So consider Components 1,2 are wrapped around context A with reducer A, and Component 3 is wrapped with reducer B. So in this case, Component 1,2 can take states only from reducer A and can update same reducer A and Component 3 can take states from only reducer B and can update same reducer Only. - Notes: Just see the diagram for this, it would be easy to understand man.

// One thing to remember, in case of redux - key thing actions pass to every single reducer So that means that every single reducer by default needs to return the previous state if none of the cases matched to the type.

// What Trigger useSelector
// Whenever any action fire and as long as a reducer updates, it does not matter which part of the reducer your are listening into. Every single component that has a use selector will re-run. Now, whether or not this triggers a re-render is going to be up to how we code out our structure. So, we are going too tackle this topic first before we dive into anything else regarding all of these diffrent logs.

// The component will re-render only when useSelector returns a new Value as compared to the prev Value. (means its on new memory) etc.

// Memorization - is the process in which you cache the previous value of something so that if the input has not changed, then just return back the same output.
