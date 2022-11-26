const App = () => {
  //Alternative way of styling, directly in the component
  const pStyle = {
    color: "blue",
    fontSize: "20pt",
  };

  const saveArray = () => {
    window.localStorage.setItem("myArray", JSON.stringify(loadedArray));
    alert("saved");
    loadedArray = [];
  };

  const loadArray = () => {
    alert("loaded");
    loadedArray = JSON.parse(window.localStorage.getItem("myArray"));
  };

  const appendArray = () => {
    dbArray.map((item) => {
      loadedArray.push(item);
    });
  };

  const printArray = () => {
    console.log(loadedArray);
  };

  const clearArray = () => {
    alert("cleared");
    loadedArray = [];
  };

  return (
    <div>
      <CounterButton text="Hi!" />
      <p style={pStyle}>Hello World!</p>
      <CounterButton useGreen="1" />
      <button onClick={saveArray}>Save Array</button>
      <button onClick={loadArray}>Load Array</button>
      <button onClick={appendArray}>appendArray Array</button>
      <button onClick={printArray}>print Array</button>
      <button onClick={clearArray}>clear Array</button>
    </div>
  );
};

let loadedArray = [];

const dbArray = [
  "First level item",
  {
    name: "first level object",
    type: "first level object type",
  },
  {
    name: "second first level object",
    info: {
      deepinfo: "object in the second first level object",
    },
  },
  {
    name: "third first level object",
    type: "third first level object type",
  },
];
