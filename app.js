/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/

$(function() {
  $('img').attr('src', 'http://lorempixel.com/350/150/animals');
})

/*
I'm simply starting with the jQuery object and passing it an anonymous function.

The anonymous function changes the src of the one img on the page to the URL provided.
(Remember, $('img') grabs all of the images on the page, so this is a very bad selector. 
It works in this case because there's only one <img>, but normally you should use a much more
 specific selector.)

If I hadn't wrapped my .attr() function in the jQuery object, it would run as soon as it's loaded
in the <head> of the document, which occurs before the <img> tag appears on the page. So nothing 
would happen.

But by wrapping it up in the jQuery object, it runs when the DOM is ready and
I get to see a cute puppy instead!