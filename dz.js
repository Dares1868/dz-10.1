const user = {
  name: "Kate",
  age: 20,
  city: "Kyiv",
  email: "kate@example.com",
  getInfo: function () {
    return `Ім'я користувача: ${this.name}, Вік: ${this.age}, Місто проживання: ${this.city}, Електронна пошта: ${this.email}  `;
  },
};
console.log(user.getInfo());
