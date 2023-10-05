select * from estados 

select nome, sigla from estados

select 
    Sigla, 
    nome as "Nome do Estado"   
from estados
where regiao = "sul"

select 
    nome,
    regiao,
    populacao
from estados
where populacao <= 10
order by populacao desc -- desc faz com que seja ordernado em ordem decrescente!