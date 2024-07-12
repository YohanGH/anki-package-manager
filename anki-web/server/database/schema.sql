CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(50) NOT NULL,
    email VARCHAR(125) NOT NULL,
    password VARCHAR(150) NOT NULL
);

CREATE TABLE categorie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE deck (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    id_categorie INT,
    id_user INT,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id),
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE commentaire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    id_deck INT,
    FOREIGN KEY (id_deck) REFERENCES deck(id)
);
