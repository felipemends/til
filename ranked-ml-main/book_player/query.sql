select idPlayer,
  count(distinct idLobbyGame) as qtPartidas,
  count(distinct date(dtCreatedAt)) as qtDias,
  1.0 * count(distinct idLobbyGame) / count(distinct date(dtCreatedAt)) as mediaPartidasDia
from tb_lobby_stats_player
where dtCreatedAt < '2022-02-01'
  and dtCreatedAt > date('2022-02-01', '-30 day')
group by idPlayer