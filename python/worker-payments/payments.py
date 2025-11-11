def payment(worker_type, hours):
    rates = {
        's4': 1500,
        's6': 25000,
        'univ': 35000
    }
    
    if worker_type in rates:
        return rates[worker_type] * hours
    else:
        raise ValueError("Invalid worker type")


def payment2(worker_type, hours):
    try:
        rate = {'s4': 15000, 's6': 25000, 'univ': 35000}[worker_type]
    except KeyError:
        raise ValueError("Invalid worker type")
    return rate * hours
