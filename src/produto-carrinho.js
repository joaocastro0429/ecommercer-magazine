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
