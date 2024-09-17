                                          // SISTEMA DE INVENTÁRIO PARA UMA LOJA

class Produto {
   constructor(nome,categoria,preco,qtdEstoque) {
      this.nome = nome;
      this.categoria = categoria;
      this.preco = preco;
      this.qtdEstoque = qtdEstoque
   }

}

class Mercado {
   constructor() {
      this.prateleiras = []
   }

   addProducts(produto) {
      this.prateleiras.push(produto)
   }

   addEstoque(qtd, produto) {
      if(!qtd || !produto) {
         return `ERROR! quantidade não informada ou o produto não tem em estoque`
      }

      let product = this.prateleiras.find(pdt => pdt.nome === produto)
      if(product) {
         product.qtdEstoque += qtd
         return `Foi adicionado ${qtd} mercadorias ao estoque do produto ${product.nome}`
      } else {
         return `O produto ${produto} não foi encontrado no estoque`
      }
   }

   searchProductName(nome) {
         return this.prateleiras.filter(produto => produto.nome.includes(nome))
      }

      calculateStock(produto) {
         if(!produto) {
            return "DIGITE O PRODUTO"
         }

         let verifyProduct = this.prateleiras.find(pdt => pdt.nome === produto)
         
         if(verifyProduct.qtdEstoque > 0) {
            let quantidade = verifyProduct.qtdEstoque
            let price = verifyProduct.preco
            return `O valor do estoque do produto ${produto} é de ${(quantidade * price).toFixed(2)}R$`

         } else if (verifyProduct.qtdEstoque === 0) {
            return `O estoque do produto ${produto} está em 0`
         }

          else {
            return `O produto ${produto} não existe no estoque`
         }
      }

   

   listProducts() {
      return this.prateleiras
   }
}


let produto1 = new Produto('Macarrão', 'Massas', 19.99, 10)
let produto2 = new Produto('Coca-Cola', 'Refrigerante', 8.99, 3)
let produto3 = new Produto('Mussarela', 'Frios', 2.99, 400)
let produto4 = new Produto('Trakinas', 'Bolachas', 1.99, 0)

const mercado = new Mercado

mercado.addProducts(produto1)
mercado.addProducts(produto2)
mercado.addProducts(produto3)
mercado.addProducts(produto4)

console.log(mercado.listProducts())
console.log(mercado.addEstoque(20, 'Trakinas'))
console.log(mercado.searchProductName('Trakinas'))
console.log(mercado.calculateStock('Macarrão'))
console.log(mercado.calculateStock('Trakinas'))