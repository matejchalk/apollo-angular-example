const { v4: uuidv4 } = require('uuid');
const { recipes } = require('./seed');

const randomDelay = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, Math.random() * 1000);
  });
};

class DbClient {
  recipes = recipes.reduce(
    (acc, recipe) => ({ ...acc, [recipe.id]: recipe }),
    {}
  );

  async getRecipe(id) {
    await randomDelay();
    return this.recipes[id];
  }

  async getRecipes() {
    await randomDelay();
    return Object.values(this.recipes);
  }

  async addRecipe(fields) {
    await randomDelay();
    const id = uuidv4();
    this.recipes[id] = { ...fields, id };
    return this.recipes[id];
  }

  async updateRecipe(fields) {
    await randomDelay();
    this.recipes[fields.id] = { ...this.recipes[fields.id], ...fields };
    return this.recipes[fields.id];
  }

  async deleteRecipe(id) {
    await randomDelay();
    delete this.recipes[id];
    return id;
  }
}

module.exports = DbClient;
