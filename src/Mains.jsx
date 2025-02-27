export default function Mains() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add ingredient"
          placeholder="e. g. oregano"
          type="text"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
