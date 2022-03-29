with tb_lobbies as (
  select *,
    idPlayer,
    row_number() over (
      partition by idPlayer
      order by idLobbyGame
    ) as numeroLinha
  from tb_lobby_stats_player
  order by idPlayer
)
select *
from tb_lobbies
where numeroLinha <= 3