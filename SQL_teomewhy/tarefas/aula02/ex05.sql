select date(dtCreatedAt) as dtDAP,
  count(distinct idPlayer) as DAP
from tb_lobby_stats_player
group by dtDAP
order by DAP desc