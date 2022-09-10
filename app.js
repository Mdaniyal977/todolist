var edit;
function addItem(){
    //Targeting Element
    var input = document.getElementById('input')
    var ul = document.getElementById('list')
    
    //Button and li Creation
    var li = document.createElement('li')
    var editbtn = document.createElement('button')
    var dltbtn = document.createElement('button')

    //Modifying Buttons
    editbtn.innerText = 'Edit'
    dltbtn.innerText = 'Delete'
    editbtn.setAttribute('onclick', 'editItem(event)')
    dltbtn.setAttribute('onclick', 'deleteItem(event)')

    //Storing Values
    li.innerHTML = input.value

    //Appending li and Buttons into DOM
    ul.appendChild(li)
    li.appendChild(editbtn)
    li.appendChild(dltbtn)

    //Clearing Input Value
    input.value = ''  
}
function deleteItem(event){
    //Targeting Element
    var li = event.target.parentElement
    var ul = li.parentElement

    //Deleting li
    ul.removeChild(li)
}
function editItem(event){
    
    var input = document.getElementById('input')
    var addBtn = document.getElementById('addbtn')
    var updateBtn = document.getElementById('updtbtn')
    var li = event.target.parentElement
    
    edit = li
    input.value = li.childNodes[0].nodeValue

    updateBtn.setAttribute('onclick', 'updateItem()')
    addBtn.style.display = 'none'
    updateBtn.style.display = 'inline'
    li.style.BackgroundColor = 'yellow' 
}
function updateItem(){
    var updateBtn = document.getElementById('updtbtn')
    var addbtn = document.getElementById('addbtn')
    var input = document.getElementById('input')

    edit.childNodes[0].nodeValue = input.value

    addbtn.style.display = 'inline'
    updateBtn.style.display = 'none'
    input.value= ''
}