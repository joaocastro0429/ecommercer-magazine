import {catalogo} from './utilidades'
import {adcionarAoCarrinho} from './menu-carrinho'

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2 flex flex-col p-2 shadow-xl 
        shadow-slate-400  rounded-lg justify-between group ' id="card-produto-${produtoCatalogo.id}">
      <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        style="height: 300px"
        class="group-hover:scale-110 duration-300 my-3 rounded-lg"
      />
      <p class='marca'>${produtoCatalogo.marca}</p>
      <p>${produtoCatalogo.nome}</p>
      <p>$${produtoCatalogo.preco}</p>
      <button id='adicionar-${produtoCatalogo.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200' 
      ><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
      }

      for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener('click',()=>adcionarAoCarrinho(produtoCatalogo.id))
      }
      

}


 
