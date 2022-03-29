select flTribo,
  avg(txHs) as avgTxHS
from (
    select t1.idPlayer,
      t1.qtKill,
      t1.qtHs,
      100.0 * t1.qtHS / t1.qtKill as txHS,
      coalesce(t2.flTribo, 0) as flTribo
    from tb_lobby_stats_player as t1
      left join (
        select t1.idPlayer,
          max(1) as flTribo
        from tb_players_medalha as t1
          left join tb_medalha as t2 on t1.idMedal = t2.idMedal
        where descMedal like '%tribo%'
          and t1.flActive = 1
        group by idPlayer
      ) as t2 on t1.idPlayer = t2.idPlayer
  )
group by flTribo