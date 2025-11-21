from flask import Flask, jsonify, request
import time
todos = [] 

def create_app():
    app = Flask(__name__)
    
    @app.get("/todos")
    def get_todos():
        return jsonify(todos)


    @app.post("/todos")
    def add_todo():
        body = request.get_json()
        todo = {
            "id": int(time.time() *100),
            "text": body['text'],
            "completed": False
        }  
        todos.append(todo)
        return jsonify(todo), 201
    
    @app.patch("/todos/<id>")
    def update_todo(id):
        id = int(id)
        for item in todos:
            if item['id'] == id:
                item["completed"] = True
                return jsonify(item)
        
        # Write to the db
        # { record: created}
        return jsonify({'error': "Not found"}), 404
    
    return app
