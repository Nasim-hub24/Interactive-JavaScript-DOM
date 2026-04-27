

document.getElementById('fastclick').addEventListener('click',
    function text()
    {
        const pageTitleElement = document.getElementById('pageTitle');
        console.log(pageTitleElement);
        pageTitleElement.innerText = 'title change successfully';
    }
)

document.getElementById('here').addEventListener('click',
    function ()
    {
        const eventTitle = document.getElementById('change')
        console.log(eventTitle);
        eventTitle.innerText = 'JS is really interesting'
    }
)