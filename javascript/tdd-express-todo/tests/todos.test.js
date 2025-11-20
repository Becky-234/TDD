const request = require('supertest')
const app = require('../app');
const { text } = require('express');


describe('GET /todos', () => {
    test('Initially returns empty list', async () => {
        const res = await request(app).get("/todos");
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    });
})


describe('POST /todos', () => {
    test('Creates a new todo item', async () => {
        const res = await request(app)
        .post('/todos')
        .send({ text: 'Buy milk'});

        expect(res.status).toBe(201)
        expect(res.body.text).toBe("Buy milk")
        expect(res.body.completed).toBe(false)
    })
})

// how to test update
// Create the item
// Update the item
// See if the value you sent in the update is what is there
describe('PATCH /todo/:id', () => {
    test('mark an item as completed', async () => {
       const todo = (await request(app)
       .post('/todos')
       .send({text: 'Buy coffee'})).body; 
    
        const res = await request(app).patch(`/todos/${todo.id}`)
        expect(res.status).toBe(200)
        expect(res.body.completed).toBe(true);
    });


    test('requesting an object that does not exist throws 404', async () => {
        let id = 900223
        const res = await request(app).patch(`/todos/${id}`)
        expect(res.status).toBe(400)
        // todo check to the body to have the error
    })

    
});


// TODO: Write tests for delete
