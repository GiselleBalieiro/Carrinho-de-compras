let valorTotal;
limpar ();

function adicionar () {
    //recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById ('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split ('R$')[1];
    let quantidade = document.getElementById ('quantidade').value;

    //calcular o preço = subtotal
    let preco = quantidade * valorUnitario;
   
    //adicionar no carrinho 
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul"> = R$${preco}</span>
  </section>`;
  
    //atualizar o valor total da compra

    valorTotal = valorTotal + preco;
    let total = document.getElementById ('valor-total');
    total.textContent = `R$${valorTotal}`;
    document.getElementById ('quantidade').value = 0;
}

function limpar () {
    valorTotal = 0;
    document.getElementById ('lista-produtos').innerHTML = '';
    document.getElementById ('valor-total').textContent = 'R$ 0';
}