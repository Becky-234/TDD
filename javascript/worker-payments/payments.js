function payment(level, hours) {
    const rates = {
        s4: 15000,
        s6: 25000,
        univ: 35000
    }
    if (level === 's4') {
        return hours*rates['s4']
    }

    if (level === 's6') {
        return hours*rates['s6']
    }

    if (level === 'univ') {
        return hours*rates['univ']
    }
}

module.exports  = payment
