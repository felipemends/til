select descCountry,
  count(*),
  -- número de linhas
  count(distinct idPlayer),
  -- numero de playres distintos
  count(distinct descCountry) as qtCountry,
  avg(date('now') - date(dtBirth)) as idade,
  sum(flFacebook) as totalFB,
  sum(flTwitter) as totalTwitter,
  sum(flTwitch) as totalTwitch
from tb_players
group by descCountry