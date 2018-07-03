import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
   constructor() {
      this.lazyImages = $('.lazyload');
      this.siteHeader = $('.site-header');
      this.headerTriggerElement = $('.large-hero__title');
      this.pageSections = $('.page-section');
      this.headerLinks = $('.primary-nav a');

      this.createHeaderWaypoint();
      this.createPageSectionWaypoint();
      this.addSmoothScrolling();
      this.refreshWaypoint();
   }

   // refresh waypoint when image.lazyload loaded
   // lazyload makes waypoint position outdated, because image loaded on-demand
   refreshWaypoint(){
      this.lazyImages.load(function() {
         Waypoint.refreshAll();
      });
   }

   // make smooth scrolling when user click navigation link
   addSmoothScrolling() {
      this.headerLinks.smoothScroll();
   }

   // Make navbar background darker and logo smaller when scrolling bottom
   createHeaderWaypoint() {
      let that = this;
      new Waypoint({
         element: this.headerTriggerElement[0],
         handler: function(direction) {
            if(direction == "down") {
               that.siteHeader.addClass('site-header--dark');
            } else {
               that.siteHeader.removeClass('site-header--dark');
            }
         }
      });
   }

   // Make navigation link update sync with visible page section
   createPageSectionWaypoint() {
      let that = this;

      this.pageSections.each(function() {
         let currentPageSection = this;
         new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
               if(direction == "down"){
                  let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                  that.headerLinks.removeClass('is-current-link');
                  $(matchingHeaderLink).addClass('is-current-link');
               }
            },
            offset: "18%"
         });

         new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
               if(direction == "up"){
                  let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                  that.headerLinks.removeClass('is-current-link');
                  $(matchingHeaderLink).addClass('is-current-link');
               }
            },
            offset: "-40%"
         });
      });
   }
}

export default StickyHeader;