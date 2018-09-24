const items = [1, 2, 3];
const copy = [];

items.forEach(function(item){
  copy.push(item*item);
});
console.log(copy);