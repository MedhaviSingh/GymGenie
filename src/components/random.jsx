import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 1128537) {
        clearInterval(interval);
      } else {
        setCount(count + 999);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <p className='text-1xl'>
      {count.toLocaleString()} workout routines generated so far.
    </p>
  );
}

export default Counter;