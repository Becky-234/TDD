# test_fizzbuzz.py
from fizzbuzz import fizzbuzz

def test_return_fizz_for_1():
    assert fizzbuzz(1) == "fizz"
    
    
def test_return_buzz_for_2():
    assert fizzbuzz(2) == "buzz"


def test_return_buzz_for_3():
    assert fizzbuzz(3) == 'fizz'



def test_returns_buzz_for_1000():
    assert fizzbuzz(1000) == 'buzz'


def test_returns_buzz_for_1000000000():
    assert fizzbuzz(1000000000) == 'buzz'


def test_returns_buzz_for_1000000001():
    assert fizzbuzz(1000000001) == 'fizz'
