import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  console.log(count)

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;