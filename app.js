/*
A function passed into the jQuery object runs on document.ready,
 which occurs after the DOM has been loaded.

Why is this useful?
External JavaScript files in the <head> of a document
are generally downloaded earlier than JavaScript files included in the <body>. 
JavaScript files are also executed immediately at their location in the document,
 which means they can't access any DOM elements that come after their <script> tag in the DOM. 
 This leads to some interesting situations.

Imagine you're building a website and you've got a script you want to run against some
DOM elements in the page. If you include your script in the <head> normally, 
 it will run as soon as it's downloaded, which will occur before the DOM has built the
elements you want your script to run against. So your script wouldn't be able to do anything.

You could include your script at the bottom of the <body>,
but that would mean that the download could potentially start later in the load process,
slowing down the initial page render.

So what can you do?

Pass your function into the jQuery object, like so:

function someFunction() {
    // Do interesting things
}
$(someFunction)
or

$(function(){
    // Do interesting things
})
Now, you can include your script in the <head> and it won't 
run until the DOM has been built and the elements that you want to manipulate are on the page.
*/