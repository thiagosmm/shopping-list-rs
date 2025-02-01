//código para funcionamento da lista de compras
const input = document.querySelector('input');
const form = document.querySelector('form');
var items_list = []

//adiciona item a lista
form.onsubmit = (event) => {
  event.preventDefault();

  if (input.value === '') {
    return;
  }
  else if (items_list.includes(input.value)) {
    alert('Item já adicionado na lista');
    return;
  }

  const text = input.value;
  items_list.push(text);

  const item = document.createElement('li');
  item.classList.add("item");

  item.innerHTML = `
    <input class="checkbox" type="checkbox">
    <p>${text}</p>
    <img class="trash-can-img" src="/icons/icon delete.png" alt="imagem de lixo para deletar item">
  `;

  document.querySelector("ul").appendChild(item);
  input.value = '';
}

//botão de remover item da lista

//apaga a mensagem de remoção de item