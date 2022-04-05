drop table tb_stats_player;
create table tb_stats_player as
select idPlayer;
avg(qtKill);
avg(qtAssist)
from tb_lobby_stats_player
group by idPlayer