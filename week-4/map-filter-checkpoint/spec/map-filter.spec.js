describe("Map, Filter, ForEach Checkpoint", () => {

  describe("filterByCategory()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, 'filter');
    });
    afterEach(() => {
      Array.prototype.filter.restore();
    });

    const tests = [
      {category: 'Grocery and Gourmet Food', expected: [cart[1], cart[4]]},
      {category: 'Electronics', expected: [cart[0], cart[2]]},
      {category: 'Clothing, Shoes & Jewelry', expected: [cart[3]]}
    ];

    tests.forEach((e, i) => {
      it(`should return an array for test case ${i + 1}`, () => {
        assert.equal(Array.isArray(filterByCategory(cart, e.category)), true);
      })
    });

    tests.forEach((e, i) => {
      it(`should return an array correctly filtered based on the ${e.category} category`, () => {
        assert.deepEqual(filterByCategory(cart, e.category), e.expected);
      })
    });
    
    it('should invoke the filter method', () => {
      filterByCategory(cart, 'Electronics');
      Array.prototype.filter.called.should.be.true;
    });
  });

  describe("mapProductsAndReviews()", () => {
    it('should return an array', () => {
      assert.equal(Array.isArray(
        mapProductsAndReviews(cart, 'first')
      ), true);
    });
    it('should return a correct array of strings of product items and first reviews', () => {
      assert.deepEqual(
        mapProductsAndReviews(cart, 'first'), 
        [
          "ErgoFit Wired Earbuds (Great noise cancelling feature!)",
          "McCormick Hot Chicken Seasoning (Made dinner with this as soon as delivered. Delicious!)",
          "Micro USB to USB-A Cable (Wrong cable ends. I'm initiating a return.)",
          "Men's Hooded Puffer Jacket (The sizing seems really small for an extra large.)",
          "Luxardo Gourmet Cocktail Maraschino Cherries (You can really taste the difference with these.)" 
        ]
      );
    });
    it('should return a correct array of strings of product items and last reviews', () => {
      assert.deepEqual(
        mapProductsAndReviews(cart, 'last'),
        [
          "ErgoFit Wired Earbuds (Love these!)",
          "McCormick Hot Chicken Seasoning (It's a tad salty, but otherwise great.)",
          "Micro USB to USB-A Cable (Product description is incorrect.)",
          "Men's Hooded Puffer Jacket (Well-made jacket, but the sizing runs small.)",
          "Luxardo Gourmet Cocktail Maraschino Cherries (Package was slightly damaged, but cherries are delicious.)" 
        ]
      );
    });
  });
});
