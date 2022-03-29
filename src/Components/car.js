function Car(props) {
  return <h3>Hello, I am a {props.brand}</h3>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
export default Garage;
