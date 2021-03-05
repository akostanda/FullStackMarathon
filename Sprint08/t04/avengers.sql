use ucode_web;

SELECT heroes.name, SUM(powers.points) FROM heroes JOIN powers ON heroes.id = powers.hero_id
    GROUP BY heroes.id
    ORDER BY SUM(powers.points) DESC LIMIT 1;

SELECT heroes.name, SUM(powers.points) FROM heroes JOIN powers ON heroes.id = powers.hero_id
    WHERE powers.type = 'defense'
    GROUP BY heroes.id
    ORDER BY SUM(powers.points) LIMIT 1;

SELECT heroes.name, SUM(powers.points) FROM heroes
    JOIN powers ON heroes.id = powers.hero_id
    JOIN teams ON heroes.id = teams.hero_id
    WHERE teams.name = 'Avengers'
    GROUP BY heroes.id having COUNT(teams.hero_id) = 1
    ORDER BY SUM(powers.points) DESC;

SELECT teams.name, SUM(powers.points) FROM teams JOIN powers ON teams.hero_id = powers.hero_id
    WHERE teams.name = 'Avengers' OR teams.name = 'Hydra'
    GROUP BY teams.name
    ORDER BY SUM(powers.points);