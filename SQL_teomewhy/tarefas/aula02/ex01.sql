select idPlayer,
  avg(100 * qtHs / qtKill) as txHs
from tb_lobby_stats_player
group by idPlayer
order by avg(100 * qtHs / qtKill) desc