
/**
 * there are three different types of EVENT handling in JS
 * 1-- inline HTML event (HTML ar modday directly event bosanu)
 * 2-- JS event property (using JS code)
 * 3-- addEventListener() [best practice]
 */


console.log('external file');

// OPTION NUMBER TWO TO HANDLE EVENTS

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

// OPTION NUMBER THREE (BEST)
const change = document.getElementById('btn')
change.onclick = function makeChange()
{
    document.body.style.backgroundColor = 'orange';
}

const card = document.getElementById('add')
card.onclick = function yourCard()
{
    document.body.style.backgroundColor = 'gray';
}

// OPTION NUMBER FOUR MOSTLY USE

document.getElementById('make-btn').addEventListener('click',
    function purple ()
    {
        console.log('event handle success fully ');
    }
)

document.getElementById('teal-btn').addEventListener('click', 
    function makeChange ()
    {
        document.body.style.backgroundColor = 'teal';
    }
)