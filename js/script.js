
function newItem() {

    //Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(document.createTextNode(inputValue));

    if (inputValue === '') {
        alert('You must write something')
    } else {
        let list = $('#list');
        list.append(li);
    }
}