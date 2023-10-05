create table if not exists prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED UNIQUE KEY,
    PRIMARY KEY (id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
)