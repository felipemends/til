select sum(flFacebook) as totalFB,
  sum(flTwitter) as totalTwitter,
  sum(flTwitch) as totalTwitch
from tb_players