import React, { useState } from 'react'


function App() {
const [count, setCount] = useState(0)
  const initial = 0 
  function minusCount() {
    setCount(count -1)
  }
  function addCount() {
    setCount(count +1)
  }
  function resetCount () {
    setCount(initial)
  }


  return (
    <>
    <h1>Book List</h1>
    <button onClick={minusCount}>Search Author</button>
    <button onClick={addCount}>Search Title</button>
    <button onClick={resetCount}>Search ISBN</button>
    </>
  );
}

export default App;
