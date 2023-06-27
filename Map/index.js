// ### Map ### //

// objeto que armazena key-value

const loja = new Map([

["Blusa",15],
["Casaco",100],
["Short",50],
["Meia",5]

]);

loja.forEach((value,key) => console.log(`${key} $${value}`));

// pegar a key usando o get

let carrinho = 0;

carrinho += loja.get("Blusa");
carrinho += loja.get("Meia");

console.log(carrinho);

// adicionar um item usando o set
loja.set("Bone");

console.log(loja);

// deletar delete e a key
loja.delete("Bone");

console.log(loja);

// checkar se tem o item no map
console.log(loja.has("Bone"));

// ver tamanho do map
console.log(loja.size);
