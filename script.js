//shopping list code

const input = document.querySelector('input');
const form = document.querySelector('form');
const removeItemButton = document.querySelector('li button');
var items_list = []

//adds list item
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

//remove list item button
document.addEventListener("click", (event) => {
  if (event.target.closest(".button-remove-item")) {
    const item = event.target.closest("li");
    itemText = item.querySelector("p").textContent;

    item.classList.remove("item");
    item.classList.add("removed-item");
    items_list = items_list.filter(text => text !== itemText);
    messageRemovedItem(item)
    }  
});

//adds removed item message
function messageRemovedItem(item) {
  item.innerHTML = `
    <img id="removed-img-1" src="/icons/warning-circle-filled.png" alt="ponto de exclamação">
    <p>O item foi removido da lista</p>
    <img id="removed-img-2" src="/icons/delete-small.png" alt="">
  `;

  item.classList.add("fade-out-effect");
  
  setTimeout(() => {
    item.remove();
  }, 2000);
}

//makes item the lists last when checked and move it up when unchecked
document.addEventListener("change", (event) => {
  if (event.target.classList.contains("checkbox")) {
    const item = event.target.closest("li");
    const ul = document.querySelector("ul");

    if (event.target.checked) {
      // Move the item to the end of the list (after all checked items)
      ul.appendChild(item);
    } else {
      // Move the item above all checked items
      const checkedItems = Array.from(ul.children).filter(child => child.querySelector("input.checkbox").checked);
      const firstCheckedItem = checkedItems[0];

      if (firstCheckedItem) {
        // If there are checked items, move the current item above the first checked item
        ul.insertBefore(item, firstCheckedItem);
      } else {
        // If there are no checked items, move it to the start of the list
        ul.prepend(item);
      }
    }
  }
});