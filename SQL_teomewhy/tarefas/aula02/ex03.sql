select descMapName,
  count(distinct idLobbyGame) as qtdePartidas,
  count(*) as qtdePartidasPlayers
from tb_lobby_stats_player
group by descMapName
order by qtdePartidas desc