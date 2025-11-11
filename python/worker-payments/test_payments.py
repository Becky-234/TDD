from payments import payment


def test_1hr_s4_payment():
    assert payment('s4', 1) == 15000
    
def test_5hr_s4_payment():
    assert payment('s4', 5) == 75000


def test_1hr_s6_payment():
    assert payment('s6', 1) == 25000
    
def test_10hr_s6_payment():
    assert payment('s6', 10) == 250000


def test_1hr_univ_payment():
    assert payment('univ', 1) == 35000

def test_2hr_univ_payment():
    assert payment('univ', 2) == 70000
