const myShoppingList = new ShoppingList;

const getContentElem = document.getElementById('content');

const addItemsBtn = document.getElementById('addShoppingListItemButton');
addItemsBtn.addEventListener('click', addToShoppingList());

let newItemList = document.createElement("div")
newItemList.innerHTML = myShoppingList.render()
getContentElem.appendChild(newItemList)

function addToShoppingList(){
let getTitleValue = document.getElementsByName('Title').values
let getDescriptValue = document.getElementsByName('Description').values

if (getTitleValue && getDescriptValue){
  let newShoppingListItem = new ShoppingListItem(getTitleValue + getDescriptValue);
  return newShoppingListItem
}else{
   throw "error"
 }
}
