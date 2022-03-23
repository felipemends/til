select descCountry,
  count(*) as qtdeLinhas,
  count(distinct idPlayer) as qtdePlayers
from tb_players
group by descCountry
order by count(distinct idPlayer) desc