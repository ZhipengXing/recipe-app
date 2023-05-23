import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipe, SetRecipe] = useState({ ...initialFormData });

  const handleChange = ({ target }) => {
    const value = target.value;
    SetRecipe({
      ...recipe,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", recipe);
    createRecipe(recipe);
    SetRecipe({ ...initialFormData });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={recipe.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={recipe.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={recipe.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={recipe.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  type="url"
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={recipe.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
