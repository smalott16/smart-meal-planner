DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
DROP TABLE IF EXISTS pantry_ingredients CASCADE;
CREATE TABLE pantry_ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  spoonacular_ingredient_id INTEGER NOT NULL,
  quantity NUMERIC DEFAULT 0,
  measure VARCHAR(255)
);
DROP TABLE IF EXISTS meal_lists CASCADE;
CREATE TABLE meal_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  day_of_week VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  spoonacular_id INTEGER NOT NULL,
  meal VARCHAR(255) NOT NULL
);
DROP TABLE IF EXISTS grocery_list_items CASCADE;
CREATE TABLE grocery_list_items (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_name VARCHAR(255) NOT NULL,
  quantity NUMERIC DEFAULT 0,
  measure VARCHAR(255),
  spoonacular_item_id INTEGER NOT NULL
);
