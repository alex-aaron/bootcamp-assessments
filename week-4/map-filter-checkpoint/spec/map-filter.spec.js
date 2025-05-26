console.log(cart);

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
        assert.deepEqual(Array.isArray(filterByCategory(cart, e.category)), true);
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

  
});