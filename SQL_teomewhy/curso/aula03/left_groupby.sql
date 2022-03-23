select t1.descCountry,
    t2.descMapName,
    count(distinct t2.idLobbyGame) as qtPartidas

from tb_players as t1

left join tb_lobby_stats_player as t2
on t1.idPlayer = t2.idPlayer

group by t1.descCountry,
 t2.descMapName

order by t1.descCountry,count(distinct t2.idLobbyGame) desc