DROP DATABASE IF EXISTS HotMiles;

CREATE DATABASE HotMiles;

USE HotMiles;

CREATE TABLE admins (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    admin BOOLEAN NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

-- CREATE TABLE states (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(30) NOT NULL,
--     PRIMARY KEY(id)
-- ) ENGINE=INNODB;

-- CREATE TABLE citys (
--     id INT NOT NULL auto_increment,
--     name VARCHAR(30) NOT NULL,
--     state_id INT NOT NULL,
--     FOREIGN KEY (state_id)
--         REFERENCES states (id),
--     PRIMARY KEY(id)
-- ) ENGINE=INNODB;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    balance INT NOT NULL,
    address VARCHAR(50) NOT NULL,
    -- state_id INT NOT NULL,
    -- FOREIGN KEY (state_id)
    --     REFERENCES states (id),
	-- city_id INT NOT NULL,
    -- FOREIGN KEY (city_id)
    --     REFERENCES citys (id),
    -- PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    image VARCHAR(100),
	PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE usersProducts (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id),
	product_id INT NOT NULL,
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO HotMiles.states (name) VALUES
	("Rio de Janeiro"),
    ("São Paulo");

INSERT INTO HotMiles.citys (name, state_id) VALUES
	("Rio de Janeiro", 1),
    ("São Paulo", 2);
    
INSERT INTO HotMiles.users (name, password, email, balance, address, state_id, city_id) VALUES
	("Walace de Abreu Borges", "teste123@teste", "walacewab@gmail.com", 3800, "Rua dos Trabalhadores", 1, 1),
    ("Thiago T.Ramos ", "teste1234@teste", "thiagoramos@gmail.com", 5800, "Rua dos Testes", 2, 2);
    
INSERT INTO HotMiles.products (name, price, image) VALUES
	("Rio de Janeiro", 1500, "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"),
    ("São Paulo", 1300, "https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg");

    
    



