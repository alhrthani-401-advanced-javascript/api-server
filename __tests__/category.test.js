'use strict';

require('@code-fellows/supergoose');

const category = require('../lib/models/categories/categories-collection');

describe ('Category Model', ()=> {
    it('it can create()', async ()=> {
        const categoryObj ={
        "name": "cat1",
        "display_name": "category1",
        "description": "category one"};

        const result = await category.create(categoryObj);
        Object.keys(categoryObj).forEach(key=> {
            expect(result[key]).toEqual(categoryObj[key]);
        });
    });

    it('it can get()', async ()=> {
          const categoryObj ={
        "name": "cat1",
        "display_name": "category1",
        "description": "category one"};

        const result = await category.create(categoryObj);
        const records = await category.get(result._id); // []
        Object.keys(categoryObj).forEach(key=> {
            expect(records[0][key]).toEqual(categoryObj[key]);
        });
    });

    it('it can delete()', async ()=> {
          const categoryObj ={
        "name": "cat1",
        "display_name": "category1",
        "description": "category one"};

        const result = await category.create(categoryObj);
        const records = await category.delete(result._id); // []
        Object.keys(categoryObj).forEach(key=> {
            expect(records[key]).toEqual(categoryObj[key]);
        });
    });

    // add update and delete tests
    
});