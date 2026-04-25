
//console.log('connect successfully ')

const allList = document.getElementsByTagName('li')
console.log(allList)
for(const lists of allList)
{
    console.log(lists.innerText)
    lists.style.backgroundColor = 'lightblue'
    lists.style.borderRadius = '15px'
    lists.style.margin = '10px'
}

const names = document.getElementsByClassName('name')
console.log(names)
for(const list of names)
{
    console.log(list.innerText)
    list.style.color = 'blue'
}

