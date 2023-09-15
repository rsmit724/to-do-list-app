function newItem() {

    //1. add new items to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    //2. Crossing out an item from the list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //3. Adding the delete button:
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // adding the delete class from css
    crossOutButton.on('click', deleteListItem)
        function deleteListItem() { 
        li.addClass('delete')
    };

}

