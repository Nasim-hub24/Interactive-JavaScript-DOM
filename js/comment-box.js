
console.log('file connect successfully')

document.getElementById('post').addEventListener('click', function()
    {
        // STEP--2 : GET THE TEXT WRITTEN IN THE COMMENT TEXT AREA
        const commentBox = document.getElementById('comment-here');
        const newComment = commentBox.value;

        // STEP--3 : GET THE PARENT NODE WHERE TO PUBLISH
        const container = document.getElementById('commentContainer')

        // CREATE A COMMENT P AND SET THE INNER TEXT
        const commentElement = document.createElement('p')
        commentElement.innerText = newComment;
        commentElement.classList.add('comment');

        // STEP--5 : APPEND THE NEW P TAG TO THE PARENT NODE
        container.appendChild(commentElement);

        // STEP--6 : CLEAN THE TEXT AREA
        commentBox.value = '';

    }

)
