const user = {
  name: "Emily",
  age: 20,
  city: "Kyiv",
  email: "emily@example.com",
  getInfo: function () {
    return `Ім'я користувача: ${this.name}, Вік: ${this.age}, Місто проживання: ${this.city}, Електронна пошта: ${this.email}  `;
  },
};
console.log(user.getInfo());
