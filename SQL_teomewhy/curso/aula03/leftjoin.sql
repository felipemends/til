select t1.idPlayer,
 t1.descCountry,
 t2.idLobbyGame,
 t2.qtKill,
 t2.descMapName
from tb_players as t1

left join tb_lobby_stats_player as t2
on t1.idPlayer = t2.idPlayer