select idLobbyGame,
  idPlayer,
  date(dtCreatedAt) as dtDAP,
  count(distinct idPlayer) as DAP -- DAP = Daily Active Players
from tb_lobby_stats_player
group by date(dtCreatedAt)
order by date(dtCreatedAt)
limit 100