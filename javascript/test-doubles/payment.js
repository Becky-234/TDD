class TestDoubles {
  constructor() {}

  processPayment(amount, phone, reason) {
    // call the MTN/Airtel API

    let result = mtn.processPayment(amount, phone, reason);
  }

  async getUser(id) {
    const res = await fetch(`https://api.example.com/users/${id}`);
    return res.json();
  }

  pushPoison(ml) {
    // it would poison into someone's vein
    // read read rate
    // read breathing rate
  }

  multiply(a, b) {
    return a * b;
  }

  areaOfRectangle(width, height) {
    return multiply(width, height);
  }
}


module.exports = TestDoubles
