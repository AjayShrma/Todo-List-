
var ul =  document.getElementById('list');
var li;




var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);
               

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);



function addItem(){
    var input = document.getElementById('input');
    var item = input.value;  
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)



    if (item === '') {
        var p = document.createElement('p');
        var t = document.createTextNode("Enter your todo!")

        p.appendChild(t);
        document.getElementById('empty').appendChild(p);
         
        setTimeout(() => {
           p.className='visual2'; 
        }, 1500);
        return false;

        //add a p tag and assign a value of "enter your todo"
    } else {
        //create li
        li = document.createElement('li');

        //create checbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
      
        //create label

        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

    //add these elemnts on web page

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    
    
     setTimeout(() => {
        li.className = 'visual';
     }, 2);

    input.value = '';

    }


}


function removeItem(){
    li = ul.children
for (let index = 0; index < li.length; index++) {
    while ( li[index] && li[index].children[0].checked) {

        ul.removeChild(li[index])
    }
    
}


}