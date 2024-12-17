// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту
//  метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при 
//  натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.




// const bankAccount = {
//     ownerName: "kirill",

//     accountNumber: 1123,

//     balance: 150,
   
  
  
//     deposit() {
        
//       const depoz = prompt("скільки грошей добавтити грошей на акаунт");

//       bankAccount.balance = bankAccount.balance + Number(depoz);
//       return alert(`Ваш баланс тепер  ${bankAccount.balance} грн`);
//     },
  
//     withdraw() {
//       const neDepoz = prompt("скільки грошей зняти");

//       bankAccount.balance = bankAccount.balance - Number(neDepoz);

//       return alert(`Ваш баланс тепер ${bankAccount.balance} грн`);
//     },


//   };


//  console.log(bankAccount.depoz());

//  console.log(bankAccount.neDepoz());



// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", 
// якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 
// градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести 
// повідомлення “температура нижче 0 градусів Цельсія” і навпаки


// const weather = {
//   temperature: 0,
//   humidity: 0,
//   windSpeed: 0,

//   yourTemperature() {


//     const input = prompt("яка у вас температура ");

//     weather.temperature = input;
//     if (weather.temperature > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// console.log(weather.yourTemperature())




// Створіть об’єкт "user", якbq буде мати 
// властивості "name", "email", "password". Додайте метод "login", який буде
//  перевіряти правильність
//  введеного email та password.
//   Використайте інпути для запису значень властивостей в об’єкт




// const user = {
//   name: "",
//   email: "",
//   password: "",

//   login() {
//     const userName = prompt("ведіть імя для авторизації");

//     user.name = userName;

//     const emailChek = prompt("Ведіть свою почту");

//     user.email = emailChek;

//     const passwordChek = prompt("тепер пароль від почьти ");

//     user.password = passwordChek;

//     console.log(user.email);

//     console.log(user.password);

//     return user.name;
//   },
// };

// console.log(user.login());


// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
// Додайте до об'
// єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо
//  рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. 
// Якщо метод повернув "true" то змінити колір тексту поля title на зелений.




const movie = {
  title: "",
  director: 0,
  year: 0,
  rating: 0,

  movieRating(star) {
    const userName = prompt("ведіть імя для авторизації");

        movie.rating = userName;
    

    if (this.rating >= 8) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(movie.movieRating(movie.rating));