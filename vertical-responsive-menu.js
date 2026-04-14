'use strict';

var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );

  var subnavs = document.querySelectorAll('.menu--item__has_sub_menu');    
  
  for (var i = 0; i < subnavs.length; i++) {
    var link = subnavs[i].querySelector('.menu--link');
    if(link) {
      link.addEventListener('click', function (e) {
          var currentItem = e.currentTarget.closest('.menu--item');
          var isOpened = currentItem.classList.contains('menu--subitens__opened');
          
          for (var j = 0; j < subnavs.length; j++) {
             subnavs[j].classList.remove('menu--subitens__opened');          
          }
          
          if (!isOpened) {
              currentItem.classList.add('menu--subitens__opened');
          }
      }, false);
    }
  }
}, 100 );
