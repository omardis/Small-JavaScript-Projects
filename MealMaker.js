const menu = {
 _courses: {
   appetizers: [],
   mains: [],
   desserts: [],
 },
 get appetizers() {
     return this._courses.appetizers;
 },
  get mains() {
     return this._courses.mains;
 },
  get desserts() {
     return this._courses.desserts;
 },
 set appetizers(appetizers) {
     this._courses.appetizers = appetizers;
 },

 set mains(mains) {
     return this._courses.mains = mains;
 },
 set desserts(desserts) {
     return this._courses.desserts = desserts;
 },

 get courses() {
   return {
     appetizers: this.appetizers,
     mains: this.mains,
     desserts: this.desserts,
   };
 },

  addDishToCourse  (courseName, dishName, dishPrice)  {
   const dish = {
     name: dishName,
     price: dishPrice,
   };
   this._courses[courseName].push(dish);
 },

getRandomDishFromCourse (courseName)  {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
 },

 generateRandomMeal ()  {
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
   const totalPrice = appetizer.price + main.price + dessert.price;

   return `Your meal is ${appetizer.name} as appetizer, ${main.name} as your main plate and for dessert, ${dessert.name}. Your total is ${totalPrice}`;
 }

};

menu.addDishToCourse('appetizers', 'Popcorn', 30);
menu.addDishToCourse('appetizers', 'Chips', 45);
menu.addDishToCourse('appetizers', 'Cheese', 10);

menu.addDishToCourse('mains', 'Soup', 13);
menu.addDishToCourse('mains', 'Salad', 12);
menu.addDishToCourse('mains', 'Hamburguer', 18);

menu.addDishToCourse('desserts', 'Chocolate Icecream', 12);
menu.addDishToCourse('desserts', 'Cake', 12);
menu.addDishToCourse('desserts', 'Vanilla Cake', 13);

const meal = menu.generateRandomMeal();
console.log(meal);