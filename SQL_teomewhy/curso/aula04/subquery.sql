select avg(qtDistMedalha) as avgQtdMedal,
  min(qtDistMedalha) as minQtd,
  max(qtDistMedalha) as maxQtd
from (
    select idPlayer,
      count(distinct idMedal) as qtDistMedalha
    from tb_players_medalha
    where flActive = 1
    group by idPlayer
    order by qtDistMedalha desc
  )