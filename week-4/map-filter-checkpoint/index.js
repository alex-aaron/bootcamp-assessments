// Data
const cart = [
  {
    item: "ErgoFit Wired Earbuds",
    quantity: 2,
    price: 21.99,
    category: "Electronics",
    reviews: [
      {
        rating: 5,
        text: 'Great noise cancelling feature!'
      },
      {
        rating: 5,
        text: "Love these!"
      }
    ]
  },
  {
    item: "McCormick Hot Chicken Seasoning",
    quantity: 1,
    price: 5.95,
    category: "Grocery and Gourmet Food",
    reviews: [
      {
        rating: 5,
        text: "Made dinner with this as soon as delivered. Delicious!"
      },
      {
        rating: 4,
        text: "It's a tad salty, but otherwise great."
      }
    ]
  },
  {
    item: "Micro USB to USB-A Cable",
    quantity: 1,
    price: 8.55,
    category: 'Electronics',
    reviews: [
      {
        rating: 1,
        text: "Wrong cable ends. I'm initiating a return."
      },
      {
        rating: 1,
        text: "Product description is incorrect."
      }
    ]
  },
  {
    item: "Men's Hooded Puffer Jacket",
    quantity: 1,
    price: 60.26,
    category: 'Clothing, Shoes & Jewelry',
    reviews: [
      {
        rating: 1,
        text: 'The sizing seems really small for an extra large.'
      },
      {
        rating: 3,
        text: 'Well-made jacket, but the sizing runs small.'
      }
    ]
  },
  {
    item: "Luxardo Gourmet Cocktail Maraschino Cherries",
    quantity: 2,
    price: 23.74,
    category: "Grocery and Gourmet Food",
    reviews: [
      {
        rating: 5,
        text: "You can really taste the difference with these."
      },
      {
        rating: 4,
        text: "Package was slightly damaged, but cherries are delicious."
      }
    ]
  },
];

// #1
const filterByCategory = function(){
  
};

// #2
const mapProductsAndReviews = function(array, position){
  return array.map((p) => {
    let index;
    position === 'first' ? index = 0 : index = p.reviews.length - 1;
    return `${p.item} (${p.reviews[index].text})`;
  });
};

// #3
const filterByReview = function(array, rating){
  return array.filter((p) => {
    return p.reviews.filter(r => r.rating === rating).length;
  });
};