import Articles from './components/Articles'
import ArticleProvider from './components/context';
import './App.css';
import AddArticle from './components/AddArticle';
import { useRef, useEffect } from 'react';

function App() {

  // reference is an object which contains the property 'current'
  // changes in the value (ref.current) do not cause a rerender as with changes in state
  // changes are happening immediately (asyncronous)
  // while with state changes will show after rendering
  const reference = useRef(0)// accepts an initial value

  const inputRef = useRef() // reference to the input element. it's an object
  // has the property 'current' which contains the current value

  useEffect(() => {
    
    console.log('Reference inside useeffect', inputRef)

    inputRef.current.focus()
  
  }, [])
  

  console.log('Reference:', inputRef)// .current is undefined

  const handleClick = () => {
    
    // do not update the reference outside a hook or outside a cb function
    // a functional component should return an output or call some hook
    reference.current += 1

    console.log('reference after clicking is', reference.current)
  }

  return (
    <div className="App">
      <ArticleProvider>
        <input ref={inputRef} type='text'/>
        <AddArticle/>
        <Articles />
        <button onClick={handleClick}>Useref button {reference.current}</button>
      </ArticleProvider>
    </div>
  );
}

export default App;
