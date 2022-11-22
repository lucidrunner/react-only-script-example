const App = () => {
  //Alternative way of styling, directly in the component
  const pStyle = {
    color: "blue",
    fontSize: "20pt",
  };

  return (
    <div>
      <CounterButton text="Hi!" />
      <p style={pStyle}>Hello World!</p>
      <CounterButton useBlue="true" />
    </div>
  );
};
