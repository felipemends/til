select idPlayer,
  descCountry,
  case
    when descCountry = 'br' then 'huehue'
    when descCountry in ('ar', 'pe', 'uy') then 'manito'
    when descCountry in ('ca', 'us') then 'greengo'
    else 'sla'
  end as nacionalidade
FROM tb_players