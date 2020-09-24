const { v4: uuidv4 } = require('uuid');

class DbClient {
  recipes = {};

  getRecipe(id) {
    return this.recipes[id];
  }

  getRecipes() {
    return Object.values(this.recipes);
  }

  addRecipe(fields) {
    const id = uuidv4();
    this.recipes[id] = { ...fields, id };
    return this.recipes[id];
  }

  updateRecipe(fields) {
    this.recipes[fields.id] = { ...this.recipes[fields.id], ...fields };
    return this.recipes[fields.id];
  }

  deleteRecipe(id) {
    delete this.recipes[id];
    return id;
  }
}

module.exports = DbClient;
