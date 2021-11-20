import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DayMealsItem from '../components/DayMealsItem'
import DayMeals from '../components/DayMeals'
import GroceryList from '../components/GroceryList'
import GroceryListItem from '../components/GroceryListItem'
import Counter from '../components/Counter'

storiesOf("DayMealsItem", module)
  .add("Base", () => <DayMealsItem />)

storiesOf("DayMeals", module)
  .add("Base", () => <DayMeals />)

storiesOf("GroceryList", module)
  .add("Base", () => <GroceryList />)
  .add("GroceryListItem", () => <GroceryListItem />)
  .add("Counter", () => <Counter />)
