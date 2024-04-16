'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Server test', () => {
  test('Default route is working', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('default route is working!');
  });
});
