function Popular() {
  const getPopular = async () => {
    const api = await fetch(
      ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
  };
  return <div>popular</div>;
}

export default Popular;
