function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


let myLibrary = [];

//constructor//
function Book(name, author, pages) {
        this.name = name
        this.author = author
        this.pages = pages
        this.info = name + " by " + author + ", " + pages + " pages,"
}
//!! need to add read status document.querySelector('#accept').checked  will return false or true//


//function that adds book to library, and adds constructor to each book that takes input from the form, it also makes the form disappear and logs everything//
function addBookToLibrary() {
    const book = new Book(document.getElementById("title").value,
                            document.getElementById("author").value,
                            document.getElementById("pages").value); 
    document.getElementById("myForm").style.display = "none";
    myLibrary.push(book);
    console.log(myLibrary)
   
    //wipe div before making new divs//
    var list = document.getElementById('displaycard');
    while (list.lastChild) {
        list.removeChild(list.lastChild);
    }

    display()
};


//function that loops through the array and displays each on a card// 
function display() {
    var list = document.getElementById('displaycard');
    myLibrary.forEach((Book, i) => {

        //appends new div//
        let div = document.createElement('div');
        div.setAttribute('id', 'theDiv');
        div.style.cssText = 'color: white; font-size: 15px; margin: 10px;';
        div.addEventListener('click', () => console.log(i));
        //onclick or identify which index from mylibrary. Can identify it as myLibrary[0]//


        //title//
        let title = document.createTextNode(Book.info);
        title.className = "divtitle"

        //checkbox//
        var checkbox = document.createElement('input');
        checkbox.id = 'check';
        checkbox.type = 'checkbox';
        checkbox.textContent = 'played?';

        var label = document.createElement('label')
        label.htmlFor = 'played?';
        label.appendChild(document.createTextNode('    played?'));
        //!! need too check to see if its clicked/returns true or false, log as a global var and make a prototype of it// 


        //button to remove//
        var button1 = document.createElement('button');
        button1.id = 'add';
        button1.textContent = '-';
        button1.className = 'btn1';
        button1.onclick = function(){
            list.removeChild(div)
        }

        //appending everything//    
        var fragment = document.createDocumentFragment();
        fragment.appendChild(div);
        div.appendChild(button1);
        div.appendChild(title);
        div.appendChild(label);
        div.appendChild(checkbox);
        list.appendChild(fragment);
    })
};
