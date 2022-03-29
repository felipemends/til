-- Qual o winrate dos assinantes Plus vs Premium?
with Tb_subs as (
  select idPlayer,
    case
      when idMedal = 1 then "Premium"
      else "Plus"
    end SubType
  from tb_players_medalha
  where idMedal in (1, 3)
    and flActive = 1
  group by 1,
    2
),
tb_winrate as (
  select t1.idPlayer,
)