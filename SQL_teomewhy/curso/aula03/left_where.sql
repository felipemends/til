select t2.descMapName,
  count(distinct t2.idLobbyGame) as qtdePartidas

from tb_players as t1

left join tb_lobby_stats_player as t2
on t1.idPlayer = t2.idPlayer

where t1.descCountry = 'br'

group by t2.descMapName
order by count(distinct t2.idLobbyGame) desc