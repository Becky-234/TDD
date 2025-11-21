import unittest
from src.create_app import create_app


class TodoTests(unittest.TestCase):
    
    def setUp(self):
        self.app = create_app().test_client()
        
    def test_get_todos_initially_empty(self):
        res = self.app.get('/todos');
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.get_json(), [])

    def test_post_todos(self):
        res = self.app.post("/todos", json={"text": "Buy milk"})
        
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertEqual(data['text'], "Buy milk")
        self.assertFalse(data['completed'])
        
    def test_updating_todo(self):
        created = self.app.post("/todos", json={
            "text": "Walk the dog"
        }).get_json()
        todo_id = created["id"]
        res = self.app.patch(f"/todos/{todo_id}")
        print(res.get_json())
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.get_json()['completed'], True)
        
    
        

if __name__ == "__main__":
    unittest.main()
