use ucode_web;

SELECT heroes.name, teams.name FROM heroes LEFT OUTER JOIN teams ON heroes.id = teams.hero_id;

SELECT heroes.name, powers.name FROM heroes RIGHT JOIN powers ON heroes.id = powers.hero_id;

SELECT heroes.name, powers.name, teams.name  FROM heroes JOIN powers ON heroes.id = powers.hero_id
                                                         JOIN teams ON heroes.id = teams.hero_id;