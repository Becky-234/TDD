import requests

def get_user(id):
    response = requests.get(f"https://api.example.com/users/{id}")
    return response.json()

def multiply(a, b):
    return a * b

def area_of_rectangle(width, height):
    return multiply(width, height)
