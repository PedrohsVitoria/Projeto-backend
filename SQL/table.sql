CREATE DATABASE pdv ;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL 
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);
INSERT INTO categorias(descricao)
VALUES
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor INTEGER NOT NULL,
    categoria_id INTEGER REFERENCES categorias(id)
);


CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) unique not null,
    cpf VARCHAR(100) unique not null,
    cep VARCHAR(10),
    rua VARCHAR(100),
    numero INTEGER,
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado VARCHAR(100)
);

CREATE TABLE pedidos(
	id SERIAL PRIMARY KEY, 
  cliente_id INT REFERENCES clientes(id),
  observacao text, 
  valor_total int not null 
);

CREATE TABLE pedido_produtos (
    id SERIAL PRIMARY KEY,
    pedido_id INT REFERENCES pedidos(id),
    produto_id INT REFERENCES produtos(id),
    quantidade_produto INT NOT NULL , 
    valor_produto INT NOT NULL 
);

ALTER TABLE produtos ADD COLUMN produto_imagem varchar(255);