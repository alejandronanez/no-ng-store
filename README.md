ngStore - Alejandro Nanez
===================

About
-------
Shoe store written on the client side. It was built by using different technologies such as:

 - Twitter Bootstrap 3 http://getbootstrap.com
 - Flatly Theme for Twitter Bootstrap http://bootswatch.com/flatly/
 - Store.js for LocalStorage https://github.com/marcuswestin/store.js/
 - Angular.js https://angularjs.org/
 - Grunt.js http://gruntjs.com/
 - Bower.io http://bower.io/
 - Angular UI Bootstrap http://angular-ui.github.io/bootstrap/
 - Underscore.js http://underscorejs.org/
 - Angular-Image-Zoom https://github.com/owlsomely/angular-image-zoom


----------

How it works
-------------

    npm install
    bower install
    grunt serve

open your browser on `http://0.0.0.0:9000`

This application stores all its information using HTML5 local storage with the keys "store" and "cart"

----------

Routes
------

Admin Area, for C.R.U.D operations on Stores and Products

### Admin ###

    /admin/stores/
    /admin/stores/:id
    /admin/stores/:id/products/
    /admin/stores/:id/products/:product_id

Public Area, for Shopping Cart

### Public Area ###

    /shopping-cart/
    /shopping-cart/stores/
    /shopping-cart/stores/:id
    /shopping-cart/stores/:id/products
    /shopping-cart/stores/:id/products/:product_id
    /shopping-cart/my-cart
    