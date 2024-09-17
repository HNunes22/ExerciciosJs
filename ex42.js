
// Criação da estrutura do livro com TITULO, AUTOR E ANO //

//------------------------------------------------------ //
class Livro {
    constructor(titulo,autor,ano,identificador) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.id = identificador;

    }
}

// ----------------------------------------------------- //

// Aqui está sendo criado a estrutura da biblioteca, adicionar livros, buscar livros e listar eles

// ---------------------------------------------------- //
class Biblioteca {
    constructor() {
        this.livros = [];
        this.emprestimo = [];
    }

    addBooks(livro) {
        this.livros.push(livro);
    }

    searchBookTitle(titulo) {
        return this.livros.filter(book => book.titulo.includes(titulo))
    }

    searchBookId(idd) {
        if(!idd) {
            console.log('ID INVALIDO')
            return []
        }
        
        const result = this.livros.filter(book => book.id === idd)
        
        if(result.length === 0) {
            console.log(`O id: ${idd}, não corresponde a nenhum livro`)
        } else {
            return result
        }

        }


    bookLending(livro) {
        if(!livro) {
            return `LIVRO NÃO INFORMADO`
        }        
        const verificarLivro = this.livros.findIndex(book => book.titulo === livro)
        
        if(verificarLivro !== -1) {
             const livroEmprestimo = this.livros[verificarLivro]

             const dataEmprestimo = new Date();
             const dataDevolucao = new Date(dataEmprestimo)
             dataDevolucao.setDate(dataEmprestimo.getDate() + 14)

             livroEmprestimo.dataEmprestimo = dataEmprestimo
             livroEmprestimo.dataDevolucao = dataDevolucao 

             this.emprestimo.push(livroEmprestimo)  
             this.livros.splice(verificarLivro, 1)
            return `Livro ${livro} emprestado com sucesso deve ser devolvido em ${dataDevolucao}`
            
        } else {
            return `O livro ${livro} já foi emprestado`
        }
        }


    bookReturn(livro){
        if(!livro) {
            return `LIVRO NÃO IDENTIFICADO`
        }

        const verificarIndex = this.emprestimo.findIndex(book => book.titulo === livro)
        
        if(verificarIndex !== -1) {
        const verificarEmprestimo = this.emprestimo[verificarIndex]

        const dataAtual = new Date()

        if(dataAtual > verificarEmprestimo.dataDevolucao) {
            return `Devolução atrasada, dia esperado de devolução ${verificarEmprestimo.dataDevolucao}`
        }

        this.livros.push(verificarEmprestimo)
        this.emprestimo.splice(verificarIndex, 1)
        return `Obrigado, livro ${livro} devolvido`
        } else {
            return `O livro ${livro} não é desta biblioteca`
        }
             
    }

    listBooksLending() {
        return this.emprestimo
    }


    listBooks() {
        return this.livros
    }


}
// ------------------------------------------------------------ //

 // A criação dos livros (TITULO, AUTOR, ANO, ID, GÊNERO)

const book1 = new Livro('As aventuras de Nunes', 'Hugo', 2024, 1)
const book2 = new Livro('Taxúsculo', 'Haddad', 2023, 2)
const book3 = new Livro('The cry', 'Lha-anna', 2020, 3)
const book4 = new Livro('50 tons de cegueira', 'Larissa C. Bea', 2021, 4)
const book5 = new Livro('Minha taxa favorita', 'Haddad', 2024, 5)
const book6 = new Livro('Padre na creche', 'Excobar', 2014, 6)

// ------------------------------------------------------------ //

// Variavel que guarda a biblioteca e suas funções //

const minhaBiblioteca = new Biblioteca

// ------------------------------------------------------------ //

// Adcionar livros na biblioteca, como se fosse em prateleiras

minhaBiblioteca.addBooks(book1)
minhaBiblioteca.addBooks(book2)
minhaBiblioteca.addBooks(book3)
minhaBiblioteca.addBooks(book4)
minhaBiblioteca.addBooks(book5)
minhaBiblioteca.addBooks(book6)
// ------------------------------------------------------------ //

// Listar todos os livros da biblioteca sem condições //

console.log(minhaBiblioteca.listBooks())

// ------------------------------------------------------------ //

// Procurar o Livro pelo ID 

console.log(minhaBiblioteca.searchBookId(2))

// Procurar o Livro pelo Titulo

 console.log(minhaBiblioteca.searchBookTitle('The cry'))

 // Emprestimo de livros

console.log(minhaBiblioteca.bookLending('The cry'))
console.log(minhaBiblioteca.bookLending('50 tons de cegueira'))
console.log(minhaBiblioteca.bookLending('Minha taxa favorita'))

// Listar livros emprestados

console.log(minhaBiblioteca.listBooksLending())

// Devolução de Livros

console.log(minhaBiblioteca.bookReturn('50 tons de cegueira'))
