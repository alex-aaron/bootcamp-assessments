## Week 3 - Map, Filter Checkpoint

1. Create a function called `filterByCategory` that takes in two parameters - `array` & `category`; `array` represents an array of item objects; `category` represents a string of an item's category
(example: "Electronics"). This function should use the native filter method to return a new array of
only the item objects that match the input category.
```javascript

// example output
filterByCategory(cart, 'Electronics'); // => [ {ErgoFit Wired Earbuds}, {Micro USB to USB-A Cable} ]
```

2. Create a function called `mapProductsAndReviews` that takes in two parameters - `array` and `position`; `array` represents an array of item objects; `position` will be a string of either 'first' or 'last'. This function should use the native map method to return a new array of the item descriptions and either the first or last review in each item's reviews depending on the value of `position`. 
```javascript

// example
filterByCategory(cart, 'first');
/*
should return =>
[
  "ErgoFit Wired Earbuds (Great noise cancelling feature!)",
  "McCormick Hot Chicken Seasoning (Made dinner with this as soon as delivered. Delicious!)",
  "Micro USB to USB-A Cable (Wrong cable ends. I'm initiating a return.)",
  "Men's Hooded Puffer Jacket (The sizing seems really small for an extra large.)",
  "Luxardo Gourmet Cocktail Maraschino Cherries (You can really taste the difference with these.)" 
]
*/

// example
filterByCategory(cart, 'last')
/*
should return =>
[
  "ErgoFit Wired Earbuds (Love these!)",
  "McCormick Hot Chicken Seasoning (It's a tad salty, but otherwise great.)",
  "Micro USB to USB-A Cable (Product description is incorrect.)",
  "Men's Hooded Puffer Jacket (Well-made jacket, but the sizing runs small.)",
  "Luxardo Gourmet Cocktail Maraschino Cherries (Package was slightly damaged, but cherries are        delicious.)" 
]
*/
```

3. Create a function called `filterByReview` that takes in two parameters - `array` & `rating`; `array` is an array of item objects; `rating` is a number representing the item's rating from 1-5. This function
should use the native filter method to return a new array of only the items have at least one review with the input rating.