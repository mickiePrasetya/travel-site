class Person {
   constructor(fullname, favColor) {
      this.name = fullname;
      this.favoriteColor = favColor;
   }

   greet(){
      console.log("Hi there, my name is " + this.name + " and my favorite color is" + this.favoriteColor + ".");
   }
}

// module.exports = Person;

// using export ES6
export default Person;