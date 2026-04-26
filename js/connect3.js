
//console.log('file connected');

// EASIER TO CREATE HTML
const bookSection = document.createElement('section');

bookSection.innerHTML = `
<h1> book i love </h1>

<ul>
    <li> number 1 </li>
    <li> number 2 </li>
</ul>
`
const mainContainer = document.getElementById('main-container');
mainContainer.appendChild(bookSection);