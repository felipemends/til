-- De qual país é o jogador que tem maior taxa de HS?
select t1.idPlayer,
  t1.idLobbyGame,
  avg(100 * t1.qtHs / t1.qtKill) as txAvgHs,
  t2.descCountry
from tb_lobby_stats_player as t1
  left join tb_players as t2 on t1.idPlayer = t2.idPlayer
group by t1.idPlayer,
  t2.descCountry
having count(distinct t1.idLobbyGame) > 5
order by avg(100 * t1.qtHs / t1.qtKill) desc