CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    razao_social VARCHAR(255),
    telefone VARCHAR(255),
    cnpj VARCHAR(255) UNIQUE,
    cep VARCHAR(255),
    estado VARCHAR(255),
    cidade VARCHAR(255),
    bairro VARCHAR(255),
    endereco VARCHAR(255),
    numero INT,
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255),
    materiais JSON,
    transporte JSON
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empresa INT,
    nome VARCHAR(255) NOT NULL,
    categoria JSON,
    q_minima VARCHAR(255),
    q_maxima VARCHAR(255)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    cpf VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);
