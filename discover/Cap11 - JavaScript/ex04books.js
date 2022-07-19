const booksByCategories = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter"
      }
    ]
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      }
    ],
  },
]

const totalCategories = booksByCategories.length

console.log("O total de categorias é: ",totalCategories)

for(let category of booksByCategories) {
  console.log('Total de livros da categoria:', category.category, `são ${category.books.length}`)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategories) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('Total de autores:', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = [];

  for(let category of booksByCategories) {
    for(let book of category.books) {
      if(book.author == author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')
booksOfAuthor('Stephen R. Covey')