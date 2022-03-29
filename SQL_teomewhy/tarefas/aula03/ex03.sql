select t1.idPlayer,
  t1.idLobbyGame,
  t1.descMapName,
  t2.descCountry
from tb_lobby_stats_player as t1
  left join tb_players as t2 on t1.idPlayer = t2.descCountry
where t2.descCountry = 'ar'