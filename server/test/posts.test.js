const axios = require('axios');
const postsService = require('../service/postsService');
const crypto = require('crypto');




const generate = function () {
  return crypto.randomBytes(20).toString('hex');
};


const request = function (url, method, data) {
  return axios({
    url, method, data
  });
};

// testes da tabela cliente 
test('should get posts', async function () {
  //given -dado que
  const post1 = await postsService.savePost({ nome: generate(), email: generate() });
  const post2 = await postsService.savePost({ nome: generate(), email: generate() });
  const post3 = await postsService.savePost({ nome: generate(), email: generate() });

  //when - qndo acontecer
  const response = await request(
    'http://localhost:5080/posts',
    'get'
  );
  const posts = response.data;
  const posts1 = await postsService.getPost(posts.id)
  //then - entao
  console.log(post1.nome, posts1.nome)
  expect(post1.nome).toBe(posts1.nome);
  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);


});

test('Should save a post', async function () {
  const data = { nome: generate(), email: generate() };
  console.log('http://localhost:5080/posts', 'post', data)
  const response = await request('http://localhost:5080/posts', 'post', data);
  const post = response.data;
  expect(post.nome.trim()).toBe(data.nome);
  expect(post.email.trim()).toBe(data.email);
  await postsService.deletePost(post.id);
});

test('Should update a post', async function () {


  const data = {
    nome: generate(),
    email: generate(), cpf: 321, celular: '2515511', rg: '5165511', cep: 515, id: 168
  };
  await request(`http://localhost:5080/posts/${data.id}`, 'put', data);

  const updatedpost = await postsService.getPost(data.id)

  expect(updatedpost.nome.trim()).toBe(data.nome);

});
//fim 


//testes referente a tabela produto 

test('Should save a product fornedor 1', async function () {
  
  const response = await request('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider', 'get');
  const post = response.data
  const idfornecedor = 1;
  post.forEach(post2 => {
    const nome = { nome: post2.nome, preco: post2.preco, descricao: post2.descricao, fornecedor: idfornecedor, categoria: post2.categoria, imagem: post2.imagem, material: post2.material, departamento: post2.departamento }

    postsService.fornecedo1tdp(nome)

  });


});


test('Should save a product fornedor 2', async function () {
  const response = await request('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider', 'get');
  const post = response.data
  const idfornecedor = 2;
  post.forEach(post2 => {
    const nome = { nome: post2.name, preco: post2.price, descricao: post2.description, fornecedor: idfornecedor, categoria: post2.details.adjective, imagem: post2.gallery, material: post2.details.material, departamento: "" }

    postsService.fornecedo1tdp(nome)

  });


});


test.only('should  all test venda', async function () {
  
  
  const post1 = { idProduto: 8, idcliente: 10, qntidadeProduto: 3, produto:"",valorTotal:0, nomeCliente: "", valorproduto:""};
  const response = await request(`http://localhost:5080/posts/${post1.idcliente}`, 'get');
  response.data.forEach(post2 => {
    post1.nomeCliente = post2.nome;
  });

  const postsss = await request(`http://localhost:5080/produto/${post1.idProduto}`,'get');
 post1.produto =postsss.data.nome;
  post1.valorproduto=postsss.data.preco;
  post1.valorTotal=post1.qntidadeProduto*post1.valorproduto;

  
 
  await postsService.postVenda(post1);

});