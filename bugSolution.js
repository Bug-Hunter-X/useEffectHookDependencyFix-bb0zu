```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5');
      // Add cleanup function if needed
      return () => {
        // Perform cleanup actions here if necessary
      };
    }
  }, [count]); // Correct dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```