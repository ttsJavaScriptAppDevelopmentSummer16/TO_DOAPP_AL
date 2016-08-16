var list = document.getElementById('To_Do_List')

document.getElementById('add').onclick = function() {
    var newitem = document.getElementById('NewItem').value;
    var add = document.createElement('li');
    add.innerHTML = newitem;
    list.appendChild(add);
    document.getElementById('NewItem').value = '';

    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].onclick = function() {
        this.innerHTML = this.innerText.strike();
        setTimeout(function() {this.parentNode.removeChild(this)}.bind(this),1000
      )}}};

var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {
    this.innerHTML = this.innerText.strike();
    setTimeout(function() {this.parentNode.removeChild(this)}.bind(this),1000
  )}};
