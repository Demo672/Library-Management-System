const book = [
   { title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'Mystery' },
   { title: "Death: An Inside Story", author: "Sadhguru", genre:"Spirituality"},
   { title: "Diary of a Wimpy Kid", author: "Jeff Kinney", genre: "Children's Comedy" },
   { title: "The Hidden Hindu", author: "Akshat Gupta", genre: "Mythological Fiction"},
   { title: "Do It Today", author: "Darius Foroux" ,genre: "Self-Help"},
   { title: "Zero to One: Notes on Startups, or How to Build the Future", author: "Peter Thiel and Blake Masters", genre: "Business & Economics" },
   { title: "The Wit & Wisdom of Ratan Tata", author: "Ratan Tata", genre: "Self-Help"}
]



function display_list(){
    localStorage.setItem('arr', JSON.stringify(book))
    const data = localStorage.getItem('arr')
    let load_data = JSON.parse(data) || [];

    let list = document.getElementById('bookList');
    list.innerHTML = ''; 

    load_data.forEach((book) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${book.title}</h3> by <span><b>${book.author}</b> - Genre: <b>${book.genre}</b></span>`;
        list.appendChild(listItem);
    });
}

function book_submit(e) {
    e.preventDefault();
    
    let btitle = document.getElementById("title").value;
    let bauthor = document.getElementById("author").value;
    let bgenre = document.getElementById("genre").value;

   
    let obj = { 
        title: btitle,
        author: bauthor,
        genre: bgenre
    };

    const datafromstorage = localStorage.getItem('arr');
    let arr = JSON.parse(datafromstorage) || [];
    arr.push(obj);

    localStorage.setItem('arr', JSON.stringify(arr));

   
    update_table();
}

function update_table() {
    const datafromstorage = localStorage.getItem('arr');
    let arr = JSON.parse(datafromstorage) || [];

    let list = document.getElementById('bookList');
    list.innerHTML = ''; 

    arr.forEach((book) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${book.title}</h3> by <span>${book.author} - Genre: ${book.genre}</span>`;
        list.appendChild(listItem);
    });
}