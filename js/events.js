
/**
 * there are three different types of EVENT handling in JS
 * 1-- inline HTML event (HTML ar modday directly event bosanu)
 * 2-- JS event property (using JS code)
 * 3-- addEventListener() [best practice]
 */


console.log('external file');

// akta fuction banisi than HTML code a giay ONCLICK a function name ta bosi disi 
function changebackground()
{
    document.body.style.backgroundColor = 'lightblue';
}

// akta fuction banisi than HTML code a giay ONCLICK a function name ta bosi disi 
function orderplace()
{
    document.body.style.backgroundColor = 'yellow'
}