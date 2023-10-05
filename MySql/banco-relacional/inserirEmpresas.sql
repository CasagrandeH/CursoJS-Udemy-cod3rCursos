alter table empresas modify cnpj varchar(14);

insert into empresas 
    (nome, cnpj)
values 
    ("Bradesco", 22537326000195),
    ("Cielo", 57095261000150),
    ("Vale", 47022065000100);

select * from empresas;
select * from cidades;

-- serve para descrever os campos da tabela
desc empresas;

insert into empresas_unidades 
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);