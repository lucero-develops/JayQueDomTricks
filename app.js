/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

var navList;
var firstItem;
var link;

navList = $('.nav-list');

firstItem = navList.childern().first();

link = firstItem.find('a');

link.attr('href', '#1');

