/**
 * Part One of the jQuery DOM Practice
 */
// Step 1
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Let’s get ready to party with jQuery!');

    //Step 2 - Add image-center Class to all images
    $('img').addClass('image-center');

    //Step 3 - Remove Last paragraph in the article
    $('article').find('p:last').remove();

    //Step 4 - Set the font size of the title to be a random pixel size 0 - 100
    let myRan = Math.floor(Math.random() * 100);
    $('#title').css('font-size', myRan + 'px');

    //Step 5 - Add an item to the list
    $('<li>What was I saying?</li>').appendTo('aside ol');

    //Step 6 - Empty the aside and put a paragraph element in its place
    $('aside').empty();
    $('<p>Scratch that; the list is silly. I am apologizing for the list’s existence.</p>').appendTo('aside');


    //Step 7 - When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
    $('input').on('keyup', function () {
        let r = $('input').eq(0).val();
        let g = $('input').eq(1).val();
        let b = $('input').eq(2).val();
        console.log(`${r}, ${g}, ${b}`);
        $('body').css('background-color', 'rgb(' + r + ',' + + g + ',' + + b + ')');
    })

    //Step 8 - Add an event listener so that when you click on the image, it is removed from the DOM.
    $('img').on('click', function () {
        $(this).fadeOut(1000, function () {
            $(this).remove();
        });
    });


});