function PropsComponent(props) {
  return (
    <div>
      <h3>I am a {props.brand}!</h3>
      <p>
        Props are arguments passed into React components. Props are passed to
        components via HTML attributes.
      </p>
    </div>
  );
}

function Doodly() {
  return (
    <>
      <h3>What is a deedly?</h3>
      <PropsComponent brand="Doodly-doo" />
    </>
  );
}

const myElement = <PropsComponent brand="Ford" />;

export default Doodly;
