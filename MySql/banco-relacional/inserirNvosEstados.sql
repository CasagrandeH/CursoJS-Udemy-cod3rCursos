insert into estados (id, nome, sigla, regiao, populacao)
values 
    (69, 'Skyrim', 'SK', 'Norte', 9.7),
    (420, 'Ooo', 'OO', 'Sul', 20.05);

select id, nome, sigla, regiao, populacao from estados
where sigla in ('SK', 'OO')