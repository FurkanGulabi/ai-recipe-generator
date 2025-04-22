interface RecipeSuggestion {
  title: string;
  description: string;
  action: string;
}

// Export the full list
export const allRecipeSuggestions: RecipeSuggestion[] = [
  {
    title: "Spaghetti Carbonara",
    description: "Classic Roman pasta dish with eggs, cheese, and pancetta.",
    action: "give me a classic Spaghetti Carbonara recipe",
  },
  {
    title: "Beef Stroganoff",
    description: "Tender beef strips in a creamy mushroom sauce.",
    action: "give me a Beef Stroganoff recipe served over egg noodles",
  },
  {
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    action: "give me a Caesar Salad recipe, maybe add grilled chicken",
  },
  {
    title: "Margherita Pizza",
    description:
      "Simple pizza with tomatoes, mozzarella, basil, and olive oil.",
    action: "give me a homemade Margherita Pizza recipe",
  },
  {
    title: "Chicken Noodle Soup",
    description: "Comforting soup with chicken, noodles, and vegetables.",
    action: "give me a comforting Chicken Noodle Soup recipe",
  },
  {
    title: "Tacos al Pastor",
    description: "Marinated pork tacos with pineapple and onions.",
    action: "give me an authentic Tacos al Pastor recipe",
  },
  {
    title: "Vegetable Stir-Fry",
    description:
      "Quick and healthy stir-fry with mixed vegetables and tofu/chicken.",
    action: "give me a quick Vegetable Stir-Fry recipe with tofu",
  },
  {
    title: "French Onion Soup",
    description: "Rich soup with caramelized onions and melted cheese.",
    action: "give me a classic French Onion Soup recipe with lots of cheese",
  },
  {
    title: "Shrimp Scampi",
    description: "Shrimp sautéed with garlic, butter, white wine, and pasta.",
    action: "give me a Shrimp Scampi recipe served over linguine",
  },
  {
    title: "Pulled Pork Sandwich",
    description: "Slow-cooked pork in BBQ sauce served on a bun.",
    action: "give me a smoky Pulled Pork Sandwich recipe with coleslaw",
  },
  {
    title: "Ratatouille",
    description: "French Provençal stewed vegetable dish.",
    action: "give me a traditional Ratatouille recipe",
  },
  {
    title: "Fish and Chips",
    description: "Battered and fried fish with French fries.",
    action: "give me a crispy Fish and Chips recipe with tartar sauce",
  },
  {
    title: "Pad Thai",
    description:
      "Thai stir-fried noodles with shrimp/chicken, peanuts, and lime.",
    action: "give me an easy Pad Thai recipe with shrimp",
  },
  {
    title: "Lasagna Bolognese",
    description: "Layered pasta dish with meat sauce, béchamel, and cheese.",
    action: "give me a rich Lasagna Bolognese recipe",
  },
  {
    title: "Greek Salad",
    description:
      "Salad with tomatoes, cucumbers, olives, feta cheese, and onions.",
    action: "give me a fresh Greek Salad recipe with a lemon vinaigrette",
  },
  {
    title: "Chicken Parmesan",
    description:
      "Breaded chicken cutlet topped with marinara sauce and cheese.",
    action: "give me a Chicken Parmesan recipe served with spaghetti",
  },
  {
    title: "Miso Soup",
    description:
      "Traditional Japanese soup with miso paste, tofu, and seaweed.",
    action: "give me a simple Miso Soup recipe",
  },
  {
    title: "Beef Wellington",
    description: "Pâté-coated beef fillet wrapped in puff pastry.",
    action: "give me a showstopper Beef Wellington recipe",
  },
  {
    title: "Clam Chowder",
    description: "Creamy soup with clams, potatoes, and onions.",
    action: "give me a New England Clam Chowder recipe",
  },
  {
    title: "Falafel Wrap",
    description:
      "Fried chickpea patties in pita bread with tahini sauce and vegetables.",
    action: "give me a Falafel Wrap recipe with tahini sauce",
  },
  {
    title: "Gumbo",
    description: "Louisiana stew with meat/shellfish, okra, and rice.",
    action: "give me a seafood Gumbo recipe",
  },
  {
    title: "Sushi Rolls (Maki)",
    description: "Rice and fillings wrapped in seaweed.",
    action: "give me a recipe for simple Sushi Rolls (Maki)",
  },
  {
    title: "Shepherd's Pie",
    description: "Ground meat pie with a mashed potato topping.",
    action: "give me a comforting Shepherd's Pie recipe",
  },
  {
    title: "Pho",
    description: "Vietnamese noodle soup with broth, herbs, and meat.",
    action: "give me a beef Pho recipe",
  },
  {
    title: "Caprese Salad",
    description: "Simple Italian salad with mozzarella, tomatoes, and basil.",
    action: "give me a Caprese Salad recipe with balsamic glaze",
  },
  {
    title: "Biryani",
    description: "Mixed rice dish with spices, meat/vegetables.",
    action: "give me a chicken Biryani recipe",
  },
  {
    title: "Chili con Carne",
    description:
      "Spicy stew containing chili peppers, meat, tomatoes, and beans.",
    action: "give me a hearty Chili con Carne recipe",
  },
  {
    title: "Croque Monsieur",
    description: "Grilled ham and cheese sandwich, often topped with béchamel.",
    action: "give me a classic Croque Monsieur recipe",
  },
  {
    title: "Paella",
    description:
      "Spanish rice dish with saffron, seafood/meat, and vegetables.",
    action: "give me a seafood Paella recipe",
  },
  {
    title: "Ramen",
    description: "Japanese noodle soup with various toppings.",
    action: "give me a pork Ramen recipe",
  },
  {
    title: "Cobb Salad",
    description:
      "Garden salad with chicken, bacon, egg, tomatoes, avocado, and blue cheese.",
    action: "give me a loaded Cobb Salad recipe",
  },
  {
    title: "Chicken Alfredo",
    description: "Pasta dish with chicken and creamy Alfredo sauce.",
    action: "give me a creamy Chicken Alfredo recipe",
  },
  {
    title: "Hummus with Pita",
    description: "Chickpea dip served with pita bread.",
    action: "give me a homemade Hummus recipe with warm pita",
  },
  {
    title: "Beef Bourguignon",
    description: "French beef stew braised in red wine.",
    action: "give me a slow-cooked Beef Bourguignon recipe",
  },
  {
    title: "Tiramisu",
    description: "Italian coffee-flavored dessert.",
    action: "give me an authentic Tiramisu recipe",
  },
  {
    title: "Apple Pie",
    description: "Pie with a spiced apple filling.",
    action: "give me a classic Apple Pie recipe with a lattice crust",
  },
  {
    title: "Cheesecake",
    description: "Sweet dessert consisting of one or more layers.",
    action: "give me a New York style Cheesecake recipe",
  },
  {
    title: "Brownies",
    description: "Rich, chocolatey baked squares.",
    action: "give me a fudgy Brownies recipe",
  },
  {
    title: "Pancakes",
    description: "Flat cakes, often thin and round, prepared from batter.",
    action: "give me a fluffy Pancakes recipe",
  },
  {
    title: "Waffles",
    description: "Leavened batter cooked between two patterned plates.",
    action: "give me a crispy Waffles recipe",
  },
  {
    title: "Guacamole",
    description: "Avocado-based dip, spread, or salad.",
    action: "give me a simple Guacamole recipe",
  },
  {
    title: "Salsa",
    description: "Spicy tomato-based sauce.",
    action: "give me a fresh Pico de Gallo Salsa recipe",
  },
  {
    title: "Quesadillas",
    description:
      "Tortilla filled primarily with cheese, sometimes meats and spices.",
    action: "give me a cheesy Chicken Quesadillas recipe",
  },
  {
    title: "Macaroni and Cheese",
    description: "Cooked macaroni pasta and a cheese sauce.",
    action: "give me a baked Macaroni and Cheese recipe",
  },
  {
    title: "Meatloaf",
    description:
      "Dish of ground meat formed into a loaf shape, then baked or smoked.",
    action: "give me a classic Meatloaf recipe with glaze",
  },
  {
    title: "Pot Roast",
    description: "Braised beef dish.",
    action: "give me a tender Pot Roast recipe with vegetables",
  },
  {
    title: "Fried Chicken",
    description:
      "Chicken pieces coated with seasoned flour or batter and deep-fried.",
    action: "give me a crispy Southern Fried Chicken recipe",
  },
  {
    title: "Deviled Eggs",
    description:
      "Hard-boiled eggs, shelled, cut in half, and filled with the egg yolk mixed with other ingredients.",
    action: "give me a classic Deviled Eggs recipe",
  },
  {
    title: "Potato Salad",
    description: "Salad dish made from boiled potatoes.",
    action: "give me a creamy Potato Salad recipe",
  },
  {
    title: "Coleslaw",
    description:
      "Salad consisting primarily of finely shredded raw cabbage with a salad dressing.",
    action: "give me a crunchy Coleslaw recipe",
  },
];

// Export the shuffle function
export function getRandomElements<T>(arr: T[], n: number): T[] {
  if (n > arr.length) {
    throw new Error("Cannot select more elements than available in the array.");
  }

  // Create a copy to avoid modifying the original array
  const result = arr.slice();

  // Fisher-Yates (Knuth) Shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements
  }

  return result.slice(0, n);
}

// Export the type
export type { RecipeSuggestion };
