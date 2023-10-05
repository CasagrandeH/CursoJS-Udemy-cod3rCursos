update estados
set nome = 'Maranhão'
where sigla = 'MA';

update estados 
set nome = 'Parana', populacao = 11.32 
where sigla = 'PR';

SELECT 
    est.nome,
    sigla,
    populacao
FROM estados est
WHERE sigla in ('MA', 'PR') 
order by nome desc; 