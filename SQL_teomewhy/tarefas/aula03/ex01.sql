-- Qual o winrate dos assinantes Plus vs Premium?
select t1.idPlayer,
  t1.flWinner,
  t2.idMedal,
  t2.flActive
from tb_lobby_stats_player as t1
  left join tb_players_medalha as t2 on t1.idPlayer = t2.idPlayer
  left join tb_medalha as t3 on t2.idMedal = t3.idMedal
where t3.idMedal in ('Membro Plus', 'Membro Premium')
limit 100