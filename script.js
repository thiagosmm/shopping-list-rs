//código para funcionamento da lista de compras
const input = document.querySelector('input');
const form = document.querySelector('form');
const removeItemButton = document.querySelector('li button');
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
    <p for="item1">${text}</p>
    <button class="button-remove-item">
      <img class="trash-can-img" src="/icons/icon delete.png" alt="imagem de lixo para deletar item">
    </button>
  `;

  document.querySelector("ul").appendChild(item);
  input.value = '';
}

//botão de remover item da lista e adiconar estilo de item removido
document.addEventListener("click", (event) => {
  if (event.target.closest(".button-remove-item")) {
    const item = event.target.closest("li");
    item.classList.remove("item");
    item.classList.add("removed-item");
    item.innerHTML = `
    <img id="removed-img-1" src="/icons/warning-circle-filled.png" alt="ponto de exclamação">
    <p>O item foi removido da lista</p>
    <img id="removed-img-2" src="/icons/delete-small.png" alt="">
  `;
    setTimeout(() => {
      item.remove();
    }, 1000);
    }  
});
