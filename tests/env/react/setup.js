const { MeiliSearch } = require('meilisearch')

;(async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'masterKey',
  })

  const index = client.index('steam-video-games')

  const dataset = [
    {
      id: '10',
      name: 'Counter-Strike',
      description:
        'Play the worlds number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your teams success. Your teams success affects your role.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/10/header.jpg?t=1447887426',
      releaseDate: 'Nov 1 2000',
      recommendationCount: 68991,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '20',
      name: 'Team Fortress Classic',
      description:
        'One of the most popular online action games of all time Team Fortress Classic features over nine character classes -- from Medic to Spy to Demolition Man -- enlisted in a unique style of online team warfare. Each character class possesses unique weapons items and abilities as teams compete online in a variety of game play modes.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/20/header.jpg?t=1447350811',
      releaseDate: 'Apr 1 1999',
      recommendationCount: 2439,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '30',
      name: 'Day of Defeat',
      description:
        'Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of light/assault/heavy infantry sniper or machine-gunner class each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And as war rages players must work together with their squad to accomplish a variety of mission-specific objectives.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/30/header.jpg?t=1447350812',
      releaseDate: 'May 1 2003',
      recommendationCount: 2319,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '40',
      name: 'Deathmatch Classic',
      description:
        'Enjoy fast-paced multiplayer gaming with Deathmatch Classic (a.k.a. DMC). Valves tribute to the work of id software DMC invites players to grab their rocket launchers and put their reflexes to the test in a collection of futuristic settings.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/40/header.jpg?t=1447350812',
      releaseDate: 'Jun 1 2001',
      recommendationCount: 888,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '50',
      name: 'Half-Life: Opposing Force',
      description:
        'Return to the Black Mesa Research Facility as one of the military specialists assigned to eliminate Gordon Freeman. Experience an entirely new episode of single player action. Meet fierce alien opponents and experiment with new weaponry. Named Game of the Year by the Academy of Interactive Arts and Sciences.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/50/header.jpg?t=1447350813',
      releaseDate: 'Nov 1 1999',
      recommendationCount: 2934,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player', 'Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '60',
      name: 'Ricochet',
      description:
        'A futuristic action game that challenges your agility as well as your aim Ricochet features one-on-one and team matches played in a variety of futuristic battle arenas.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/60/header.jpg?t=1453942008',
      releaseDate: 'Nov 1 2000',
      recommendationCount: 1965,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '70',
      name: 'Half-Life',
      description:
        'Named Game of the Year by over 50 publications Valves debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/70/header.jpg?t=1447890508',
      releaseDate: 'Nov 8 1998',
      recommendationCount: 12486,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player', 'Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '80',
      name: 'Counter-Strike: Condition Zero',
      description:
        'With its extensive Tour of Duty campaign a near-limitless number of skirmish modes updates and new content for Counter-Strikes award-winning multiplayer game play plus over 12 bonus single player missions Counter-Strike: Condition Zero is a tremendous offering of single and multiplayer content.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/80/header.jpg?t=1447889920',
      releaseDate: 'Mar 1 2004',
      recommendationCount: 7067,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player', 'Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '130',
      name: 'Half-Life: Blue Shift',
      description:
        'Made by Gearbox Software and originally released in 2001 as an add-on to Half-Life Blue Shift is a return to the Black Mesa Research Facility in which you play as Barney Calhoun the security guard sidekick who helped Gordon out of so many sticky situations.',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/130/header.jpg?t=1447350816',
      releaseDate: 'Jun 1 2001',
      recommendationCount: 2219,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '220',
      name: 'Half-Life 2',
      description:
        '1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous immersive storytelling. Valves debut title wins more than 50 game-of-the-year awards on its way to being named Best PC Game Ever by PC Gamer and launches a franchise with more than eight million retail units sold worldwide.NOW. By taking the suspense challenge and visceral charge of the original and adding startling new realism and responsiveness Half-Life 2 opens the door to a world where the players presence affects everything around him from the physical environment to the behaviors even the emotions of both friends and enemies.The player again picks up the crowbar of research scientist Gordon Freeman who finds himself on an alien-infested Earth being picked to the bone its resources depleted its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people he cares about are counting on him.The intense real-time gameplay of Half-Life 2 is made possible only by Source® Valves new proprietary engine technology. Source provides major enhancements in:Characters: Advanced facial animation system delivers the most sophisticated in-game characters ever seen. With 40 distinct facial muscles human characters convey the full array of human emotion and respond to the player with fluidity and intelligence.Physics: From pebbles to water to 2-ton trucks respond as expected as they obey the laws of mass friction gravity and buoyancy.Graphics: Sources shader-based renderer like the one used at Pixar to create movies such as Toy Story® and Monsters Inc.® creates the most beautiful and realistic environments ever seen in a video game.AI: Neither friends nor enemies charge blindly into the fray. They can assess threats navigate tricky terrain and fashion weapons from whatever is at hand.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/220/header.jpg?t=1456860366',
      releaseDate: 'Nov 16 2004',
      recommendationCount: 35792,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '240',
      name: 'Counter-Strike: Source',
      description:
        'THE NEXT INSTALLMENT OF THE WORLDS # 1 ONLINE ACTION GAME Counter-Strike: Source blends Counter-Strikes award-winning teamplay action with the advanced technology of Source™ technology. Featuring state of the art graphics all new sounds and introducing physics Counter-Strike: Source is a must-have for every action gamer.',
      price: '19.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/240/header.jpg?t=1448314295',
      releaseDate: 'Nov 1 2004',
      recommendationCount: 53931,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '280',
      name: 'Half-Life: Source',
      description:
        'Winner of over 50 Game of the Year awards Half-Life set new standards for action games when it was released in 1998. Half-Life: Source is a digitally remastered version of the critically acclaimed and best selling PC game enhanced via Source technology to include physics simulation enhanced effects and more.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/280/header.jpg?t=1447350819',
      releaseDate: 'Jun 1 2004',
      recommendationCount: 2547,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '300',
      name: 'Day of Defeat: Source',
      description:
        'Day of Defeat offers intense online action gameplay set in Europe during WWII. Assume the role of infantry sniper or machine-gunner classes and more. DoD:S features enhanced graphics and sounds design to leverage the power of Source Valves new engine technology.',
      price: '9.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/300/header.jpg?t=1447350820',
      releaseDate: 'Jul 12 2010',
      recommendationCount: 7185,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '320',
      name: 'Half-Life 2: Deathmatch',
      description:
        'Fast multiplayer action set in the Half-Life 2 universe! HL2s physics adds a new dimension to deathmatch play. Play straight deathmatch or try Combine vs. Resistance teamplay. Toss a toilet at your friend today!',
      price: '4.99 $',
      image:
        'http://steam.meilisearch.dev/steam/apps/320/header.jpg?t=1447350821',
      releaseDate: 'Nov 1 2004',
      recommendationCount: 4328,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Multiplayer'],
      genres: ['Action'],
      misc: [],
    },
    {
      id: '340',
      name: 'Half-Life 2: Lost Coast',
      description:
        'Originally planned as a section of the Highway 17 chapter of Half-Life 2 Lost Coast is a playable technology showcase that introduces High Dynamic Range lighting to the Source engine.',
      price: '-',
      image:
        'http://steam.meilisearch.dev/steam/apps/340/header.jpg?t=1447350821',
      releaseDate: 'Oct 27 2005',
      recommendationCount: 4352,
      platforms: ['MacOS', 'Linux', 'Windows'],
      players: ['Single player'],
      genres: ['Action'],
      misc: [],
    },
  ]

  await index.updateSettings({
    searchableAttributes: ['name', 'description'],
    filterableAttributes: ['platforms', 'players', 'genres', 'misc'],
    sortableAttributes: ['recommendationCount'],
  })

  const response = await index.addDocuments(dataset)

  const task = await client.waitForTask(response.taskUid)
  console.log(task)
})()
