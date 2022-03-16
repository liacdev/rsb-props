function PropsComponent(props) {
  return (
    <div>
      <h2>I am a {props.brand}!</h2>
      <p>
        Props are arguments passed into React components. Props are passed to
        components via HTML attributes.
      </p>
    </div>
  );
}

const myelement = <PropsComponent brand="Ford" />;

export default PropsComponent;
