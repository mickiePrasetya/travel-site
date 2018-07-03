// const $ = require('jquery');
// var Person = require('./modules/Person');

// using ES6 import
// import Person from './modules/Person';

// class Adult extends Person {
//    payTaxes(){
//       console.log(this.name + " now owes $0 in taxes.");
//    }
// }

// alert("test5678");

// var john = new Person('John Doe', "blue");
// john.greet();

// var jane = new Adult('Jane Smith', "orange");
// jane.greet();
// jane.payTaxes();

// $('h1').css('color','red');

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
