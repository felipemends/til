select count(*),
  -- número de linhas
  count(distinct idPlayer),
  -- numero de playres distintos
  count(distinct descCountry) as qtCountry
from tb_players