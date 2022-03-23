select idLobbyGame,
  idPlayer,
  qtKill,
  qtHS,
  round(100.0 * qtHs / qtKill, 2) as txHs
from tb_lobby_stats_player
where txHs > 50