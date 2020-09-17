'use strict';

require('@code-fellows/supergoose');

const product = require('../lib/models/products/products-collection');

describe ('Product Model', ()=> {
  it('it can create()', async ()=> {
    const productObj = {'name': 'prod 1',
      'category':'cat1',
      'display_name': 'product 1',
      'description': 'product one'};

    const result = await product.create(productObj);
    Object.keys(productObj).forEach(key=> {
      expect(result[key]).toEqual(productObj[key]);
    });
  });

  it('it can get()', async ()=> {
    const productObj = {'name': 'prod 1',
      'category':'cat1',
      'display_name': 'product 1',
      'description': 'product one'};

    const result = await product.create(productObj);
    const records = await product.get(result._id); // []
    Object.keys(productObj).forEach(key=> {
      expect(records[0][key]).toEqual(productObj[key]);
    });
  });

  it('it can delete()', async ()=> {
    const productObj = {'name': 'prod 1',
      'category':'cat1',
      'display_name': 'product 1',
      'description': 'product one'};

    const result = await product.create(productObj);
    const records = await product.delete(result._id); // []
    Object.keys(productObj).forEach(key=> {
      expect(records[key]).toEqual(productObj[key]);
    });
  });

  // add update and delete tests
    
});