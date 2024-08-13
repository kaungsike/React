import React from 'react'
import Faq from './Faq';

const FaqSection = () => {

    const faqs = [
        {
          id: 1,
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces, primarily used for creating single-page applications with reusable UI components."
        },
        {
          id: 2,
          question: "How do you create a new React component?",
          answer: "A new React component can be created as a function or a class. A functional component is created by defining a function that returns JSX. A class component is created by extending `React.Component` and defining a `render` method that returns JSX."
        },
        {
          id: 3,
          question: "What is JSX?",
          answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files, making it easier to create React components."
        },
        {
          id: 4,
          question: "What is the virtual DOM?",
          answer: "The virtual DOM is a lightweight representation of the actual DOM. React uses it to update the UI efficiently by only re-rendering parts of the DOM that have changed, instead of the entire page."
        },
        {
          id: 5,
          question: "How does state work in React?",
          answer: "State in React is an object that holds information about the component's current situation. It can change over time based on user actions, and when it changes, React re-renders the component to reflect the new state."
        },
        {
          id: 6,
          question: "What is the difference between props and state?",
          answer: "Props are inputs to a React component, used to pass data from one component to another. State is local to the component and can be changed within the component. Props are read-only, while state can be modified."
        },
        {
          id: 7,
          question: "How do you handle events in React?",
          answer: "Event handling in React is done by passing event handler functions as props to elements. These functions can be defined in the component and will be executed when the event occurs, such as a click or a form submission."
        },
        {
          id: 8,
          question: "What is a React hook?",
          answer: "React hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are `useState` for managing state and `useEffect` for side effects like data fetching."
        },
        {
          id: 9,
          question: "How do you manage side effects in React?",
          answer: "Side effects in React are managed using the `useEffect` hook. It allows you to perform actions like data fetching, subscriptions, or manually changing the DOM in response to state changes or component lifecycle events."
        },
        {
          id: 10,
          question: "What is React Router?",
          answer: "React Router is a library used for routing in React applications. It allows you to define multiple routes in your app and navigate between them without reloading the entire page, providing a seamless single-page application experience."
        }
      ];

  return (
    <div className='p-10'>
        <h1 className='text-4xl'>Faqs</h1>
        {
            faqs.map((faq) => {
                return (<Faq key={faq.id} faq={faq}/>)
            })
        }
    </div>
  )
}

export default FaqSection