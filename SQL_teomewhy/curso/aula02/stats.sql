select idPlayer,
  avg(flWinner) as winRate,
  count(distinct idLobbyGame) as qtLobbys
from tb_lobby_stats_player
where qtHs > 5
group by idPlayer
having qtLobbys >= 10
order by winRate desc