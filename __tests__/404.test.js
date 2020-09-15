const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 module', () => {
    it('404 not found', () => {
        return mockRequest.get("/not found").then(result=>{
            expect(result.err).toHaveBeenCalled();
            expect(result.status).toBe(404);
        }).catch(err=> {
            console.log(err);
        });
    });
});