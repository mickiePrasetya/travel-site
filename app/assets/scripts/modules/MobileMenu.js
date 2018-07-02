import $ from 'jquery';

class MobileMenu {
   constructor(){
      this.siteHeader = $(".site-header");
      this.menuIcon = $(".site-header__menu-icon");
      this.menuContent = $(".site-header__menu-content");
      this.events();
   }

   events() {
      this.menuIcon.click(this.toggleTheMenu.bind(this));
      // must use .bind(this) untuk mengarah ke this object pada class MobileMenu
      // kalau tidak (2)
   }

   toggleTheMenu(){
      // (2) this akan mengacu pada event Target, yaitu menuIcon
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      this.siteHeader.toggleClass('site-header--is-expanded');
      this.menuIcon.toggleClass('site-header__menu-icon--close-x');
   }
}

export default MobileMenu;