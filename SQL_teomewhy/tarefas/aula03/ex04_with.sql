with tb_tribo as (
  select t1.idPlayer,
    min(1) as flTribo
  from tb_players_medalha as t1
  where t1.idMedal in (8, 37)
    and t1.flActive = 1
  group by idPlayer
),
tb_Hs as (
  select
)