import {catalogo} from './utilidades'

function abrirCarrinho(){
 document.querySelector('#carrinho').classList.add('right-[0px]')
 document.querySelector('#carrinho').classList.remove('right-[-360px]')

   
}


function fecharCarrinho(){
    document.querySelector('#carrinho').classList.remove('right-[0px]')
 document.querySelector('#carrinho').classList.add('right-[-360px]')
}




 export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.querySelector("#fechar-carrinho");
    const botaoAbrirCarrinho = document.querySelector("#abrir-carrinho");
  
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  }



  export function adcionarAoCarrinho(idProduto){
    const produto=catalogo.find((p)=>p.id===idProduto)
    const containerProdutosCarrinho=document.getElementById("produtos-carrinho")

    
    const cartaoProdutoCarrinho=`
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
    <div id="cabecalho-carrinho" class="flex justify-between m-4">
      <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark "></i>
      </button>
    </div>
    <img src="./assets/img/${produto.imagem}" alt=""
     class="h-24"
    >
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">${produto.nome}</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>


    </div>
   
  </article>
    `
    containerProdutosCarrinho.innerHTML+=cartaoProdutoCarrinho
  }