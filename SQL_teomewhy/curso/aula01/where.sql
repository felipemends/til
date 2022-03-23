select idPlayer,
       dtBirth

from tb_players

where descCountry = 'ar'
and dtBirth is not null