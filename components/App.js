const App = () => {
  //Alternative way of styling, directly in the component
  const pStyle = {
    color: "blue",
    fontSize: "20pt",
  };

  //React lingo to track a variable, without this we won't be able to display the trackedDbArray in our <p></p>
  //We're not actually putting these into an array, instead we're deconstructing an array we get back from useState which contains
  //our tracked variable (which we instantly name trackedDbArray) set to the value we put into useState as well as a method (which we name setDbArray) we can use to
  //set the tracked variable. Without using that method react won't know that the variable has been updated and redraw all the places where we use it
  const [trackedDbArray, setDbArray] = React.useState([]);

  //Saving the array by using the stringify which converts it to a simple string
  //Some types cant be stringified, most notably for us the Date() object so you'd need to first convert that into a string you can parse yourself later
  const saveArray = () => {
    window.localStorage.setItem("myArray", JSON.stringify(loadedArray));
    alert("saved");
    //I clear the array after just to prove that it's empty after saving
    loadedArray = [];
  };

  //Loading is supereasy, just .parse it into the correct
  const loadArray = () => {
    loadedArray = JSON.parse(window.localStorage.getItem("myArray"));
    //Bonus, set the array to also display on screen
    setDbArray(loadedArray);
    alert("loaded");
  };

  //If we do .push on our whole array we get the whole array put in like [item, item, item, [item, item, item]]
  //Instead we can use .map which essentially is "for every item in this array, do this" (in our case push them into the loaded to give it some more data)
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
      <button onClick={appendArray}>append Array</button>
      <button onClick={printArray}>print Array</button>
      <button onClick={clearArray}>clear Array</button>
      <a href="./second.html">
        <button>go to second page </button>
      </a>
      <p>Current State: {JSON.stringify(trackedDbArray)}</p>
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
