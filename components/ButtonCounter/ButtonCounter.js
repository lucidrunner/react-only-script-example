const CounterButton = (props) => {
  //This is how we set state in react. By doing this we now have this saved in the memory of the component and can manipulate it and it will remember it (as long as we don't fully reload the page)
  const [currentCount, setCurrentCount] = React.useState(0);
  //We can also define other functions inside our component and let them do stuff
  //In this case this increments the counter
  const handleClick = () => {
    setCurrentCount(currentCount + 1);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="components\ButtonCounter\ButtonCounter.css"
      />
      {/* ^ Ugly way of applying stylesheets to all these components but it works. */}
      <button className={`counter-button`} onClick={handleClick}>
        Click Me! {props.text}
        {/* ^ anything passed into the function is stored in the props with the name it is passed in with */}
      </button>
      <p>{currentCount}</p>
      {/* Note above^ we can use a {variable} to display it, combined with state this means we can  */}
    </div>
  );
};

const buttonContainer = document.querySelector("#button_counter_container");
const root = ReactDOM.createRoot(buttonContainer);
root.render(<CounterButton />);
console.log("ran the ButtonCounter script");
//^ So, the FULL script with this is only run once during import in the html.
//The method above is run once for every component though
