dotaDraft.factory('HeroesFactory', function HeroesFactory() {
    var factory = {};
    factory.radientStrHeroes = [
        {
            name: 'Alchemist',
<<<<<<< HEAD
            portriat: '../css/images/Str/Radient/Alchemist.png',
=======
            portriat: 'http://imattice.github.io/css/images/Str/Radient/Alchemist.png',
>>>>>>> master
            gif: '',
            roles: [
                'Carry',
                'Durable',
                'Utility',
            ],
            playstyle: 'Alchemist farms items for other heroes. Stepping outside your comfort zone happy hour strong and confident foodie. Hiking I\'m pretty laid-back quizzo medical school I enjoy, I enjoy outdoorsy Portlandia home brewing fixing up my house. My favorite word is watching a movie bored at home passionate about Sunday funday foreign films.My dogs Indian food fitness I don\'t take myself too seriously. My height and shoulders Indian food I\'m looking for beach days there\'s no such thing as a typical Friday night, if you like my profile only looking for something casual medical school loyal vegetarian. I don\'t really like talking about myself home brewing grilling self-deprecating humor self-deprecating humor I\'m a good listener.',
            friends: [
                {   name: 'Io',
                    icon: '../css/images/Str/Radient/Io.png',
                    description: 'With Greevel\'s Greed, Alchemist has the potential to print gold faster than any other hero. Coupled with other farming items such as Hand of Midas, Battle Fury, or Radiance, Alch will outfarm any hero in the early and mid game.', },
                {   name: 'Doom',
                    icon: '../css/images/Str/Dire/Doom.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Puck',
                    icon: '../css/images/Int/Radient/Puck.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Silencer',
                    icon: '../css/images/Int/Radient/Silencer.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Tiny',
                    icon: '../css/images/Str/Radient/Tiny.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
            ],
            foes: [
                {   name: 'Ancient Apparition',
                    icon: '../css/images/Int/Dire/Ancient_Apparition.png',
                    description: 'With Greevel\'s Greed, Alchemist has the potential to print gold faster than any other hero. Coupled with other farming items such as Hand of Midas, Battle Fury, or Radiance, Alch will outfarm any hero in the early and mid game.', },
                {   name: 'Bane',
                    icon: '../css/images/Int/Dire/Bane.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Puck',
                    icon: '../css/images/Int/Radient/Puck.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Silencer',
                    icon: '../css/images/Int/Radient/Silencer.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
                {   name: 'Doom',
                    icon: '../css/images/Str/Dire/Doom.png',
                    description: 'Alchemist has incredible recovery under the effects of his ultimate, often healing faster than a single (or even two or three) hero can damage him.', },
            ],
        },
        {
            name: 'Beastmaster',
            portriat: '../css/images/Str/Radient/Beastmaster.png',
        },
        {
            name: 'Brewmaster',
            portriat: '../css/images/Str/Radient/Brewmaster.png',
        },
        {
            name: 'Bristleback',
            portriat: '../css/images/Str/Radient/Bristleback.png',
        },
        {
            name: 'Centaur Warrunner',
            portriat: '../css/images/Str/Radient/Centaur_Warrunner.png',
        },
        {
            name: 'Clockwerk',
            portriat: '../css/images/Str/Radient/Clockwerk.png',
        },
        {
            name: 'Dragon Knight',
            portriat: '../css/images/Str/Radient/Dragon_Knight.png',
        },
        {
            name: 'Earth Spirt',
            portriat: '../css/images/Str/Radient/Earth_Spirit.png',
        },
        {
            name: 'Earthshaker',
            portriat: '../css/images/Str/Radient/Earthshaker.png',
        },
        {
            name: 'Huskar',
            portriat: '../css/images/Str/Radient/Huskar.png',
        },
        {
            name: 'Io',
            portriat: '../css/images/Str/Radient/Io.png',
        },
        {
            name: 'Kunkka',
            portriat: '../css/images/Str/Radient/Kunkka.png',
        },
        {
            name: 'Legion Commander',
            portriat: '../css/images/Str/Radient/Legion_Commander.png',
        },
        {
            name: 'Omniknight',
            portriat: '../css/images/Str/Radient/Omniknight.png',
        },
        {
            name: 'Phoenix',
            portriat: '../css/images/Str/Radient/Phoenix.png',
        },
        {
            name: 'Sven',
            portriat: '../css/images/Str/Radient/Sven.png',
        },
        {
            name: 'Timbersaw',
            portriat: '../css/images/Str/Radient/Timbersaw.png',
        },
        {
            name: 'Tiny',
            portriat: '../css/images/Str/Radient/Tiny.png',
        },
        {
            name: 'Treant Protector',
            portriat: '../css/images/Str/Radient/Treant_Protector.png',
        },
        {
            name: 'Tusk',
            portriat: '../css/images/Str/Radient/Tusk.png',
        },
    ]
    factory.direStrHeroes = [
        {
            name: 'Abaddon',
            portriat: '../css/images/Str/Dire/Abaddon.png',
        },
        {
            name: 'Axe',
            portriat: '../css/images/Str/Dire/Axe.png',
        },
        {
            name: 'Chaos Knight',
            portriat: '../css/images/Str/Dire/Chaos_Knight.png',
        },
        {
            name: 'Doom',
            portriat: '../css/images/Str/Dire/Doom.png',
        },
        {
            name: 'Lifestealer',
            portriat: '../css/images/Str/Dire/Lifestealer.png',
        },
        {
            name: 'Lycan',
            portriat: '../css/images/Str/Dire/Lycan.png',
        },
        {
            name: 'Magnus',
            portriat: '../css/images/Str/Dire/Magnus.png',
        },
        {
            name: 'Night Stalker',
            portriat: '../css/images/Str/Dire/Night_Stalker.png',
        },
        {
            name: 'Pudge',
            portriat: '../css/images/Str/Dire/Pudge.png',
        },
        {
            name: 'Sand King',
            portriat: '../css/images/Str/Dire/Sand_King.png',
        },
        {
            name: 'Slardar',
            portriat: '../css/images/Str/Dire/Slardar.png',
        },
        {
            name: 'Spirit Breaker',
            portriat: '../css/images/Str/Dire/Spirit_Breaker.png',
        },
        {
            name: 'Undying',
            portriat: '../css/images/Str/Dire/Undying.png',
        },
        {
            name: 'Wraith King',
            portriat: '../css/images/Str/Dire/Wraith_King.png',
        },
    ]

    factory.radientAgiHeroes = [
        {
            name: 'Anti-Mage',
            portriat: '../css/images/Agi/Radient/Anti-Mage.png',
        },
        {
            name: 'Bounty Hunter',
            portriat: '../css/images/Agi/Radient/Bounty_Hunter.png',
        },
        {
            name: 'Drow Ranger',
            portriat: '../css/images/Agi/Radient/Drow_Ranger.png',
        },
        {
            name: 'Ember Spirit',
            portriat: '../css/images/Agi/Radient/Ember_Spirit.png',
        },
        {
            name: 'Gyrocopter',
            portriat: '../css/images/Agi/Radient/Gyrocopter.png',
        },
        {
            name: 'Juggernaut',
            portriat: '../css/images/Agi/Radient/Juggernaut.png',
        },
        {
            name: 'Lone Druid',
            portriat: '../css/images/Agi/Radient/Lone_Druid.png',
        },
        {
            name: 'Luna',
            portriat: '../css/images/Agi/Radient/Luna.png',
        },
        {
            name: 'Mirana',
            portriat: '../css/images/Agi/Radient/Mirana.png',
        },
        {
            name: 'Morphling',
            portriat: '../css/images/Agi/Radient/Morphling.png',
        },
        {
            name: 'Naga Siren',
            portriat: '../css/images/Agi/Radient/Naga_Siren.png',
        },
        {
            name: 'Phantom Lancer',
            portriat: '../css/images/Agi/Radient/Phantom_Lancer.png',
        },
        {
            name: 'Riki',
            portriat: '../css/images/Agi/Radient/Riki.png',
        },
        {
            name: 'Sniper',
            portriat: '../css/images/Agi/Radient/Sniper.png',
        },
        {
            name: 'Templar Assassin',
            portriat: '../css/images/Agi/Radient/Templar_Assassin.png',
        },
        {
            name: 'Troll Warlord',
            portriat: '../css/images/Agi/Radient/Troll_Warlord.png',
        },
        {
            name: 'Ursa',
            portriat: '../css/images/Agi/Radient/Ursa.png',
        },
        {
            name: 'Vengeful Spirit',
            portriat: '../css/images/Agi/Radient/Vengeful_Spirit.png',
        },
    ]
    factory.direAgiHeroes = [
        {
            name: 'Bloodseeker',
            portriat: '../css/images/Agi/Dire/Bloodseeker.png',
        },
        {
            name: 'Broodmother',
            portriat: '../css/images/Agi/Dire/Broodmother.png',
        },
        {
            name: 'Clinkz',
            portriat: '../css/images/Agi/Dire/Clinkz.png',
        },
        {
            name: 'Faceless Void',
            portriat: '../css/images/Agi/Dire/Faceless_Void.png',
        },
        {
            name: 'Medusa',
            portriat: '../css/images/Agi/Dire/Medusa.png',
        },
        {
            name: 'Meepo',
            portriat: '../css/images/Agi/Dire/Meepo.png',
        },
        {
            name: 'Nyx Assassin',
            portriat: '../css/images/Agi/Dire/Nyx_Assassin.png',
        },
        {
            name: 'Phantom Assassin',
            portriat: '../css/images/Agi/Dire/Phantom_Assassin.png',
        },
        {
            name: 'Razor',
            portriat: '../css/images/Agi/Dire/Razor.png',
        },
        {
            name: 'Shadow Fiend',
            portriat: '../css/images/Agi/Dire/Shadow_Fiend.png',
        },
        {
            name: 'Slark',
            portriat: '../css/images/Agi/Dire/Slark.png',
        },
        {
            name: 'Spectre',
            portriat: '../css/images/Agi/Dire/Spectre.png',
        },
        {
            name: 'Terrorblade',
            portriat: '../css/images/Agi/Dire/Terrorblade.png',
        },
        {
            name: 'Venomancer',
            portriat: '../css/images/Agi/Dire/Venomancer.png',
        },
        {
            name: 'Viper',
            portriat: '../css/images/Agi/Dire/Viper.png',
        },
        {
            name: 'Weaver',
            portriat: '../css/images/Agi/Dire/Weaver.png',
        },
    ]

    factory.radientIntHeroes = [
        {
            name: 'Chen',
            portriat: '../css/images/Int/Radient/Chen.png',
        },
        {
            name: 'Crystal Maiden',
            portriat: '../css/images/Int/Radient/Crystal_Maiden.png',
        },
        {
            name: 'Disruptor',
            portriat: '../css/images/Int/Radient/Disruptor.png',
        },
        {
            name: 'Enchantress',
            portriat: '../css/images/Int/Radient/Enchantress.png',
        },
        {
            name: 'Jakiro',
            portriat: '../css/images/Int/Radient/Jakiro.png',
        },
        {
            name: 'Keeper of the Light',
            portriat: '../css/images/Int/Radient/Keeper_of_the_Light.png',
        },
        {
            name: 'Lina',
            portriat: '../css/images/Int/Radient/Lina.png',
        },
        {
            name: 'Nature\'s Prophet',
            portriat: '../css/images/Int/Radient/Natures_Prophet.png',
        },
        {
            name: 'Ogre Magi',
            portriat: '../css/images/Int/Radient/Ogre_Magi.png',
        },
        {
            name: 'Oracle',
            portriat: '../css/images/Int/Radient/Oracle.png',
        },
        {
            name: 'Puck',
            portriat: '../css/images/Int/Radient/Puck.png',
        },
        {
            name: 'Rubick',
            portriat: '../css/images/Int/Radient/Rubick.png',
        },
        {
            name: 'Shadow Shaman',
            portriat: '../css/images/Int/Radient/Shadow_Shaman.png',
        },
        {
            name: 'Silencer',
            portriat: '../css/images/Int/Radient/Silencer.png',
        },
        {
            name: 'Skywrath Mage',
            portriat: '../css/images/Int/Radient/Skywrath_Mage.png',
        },
        {
            name: 'Storm Spirit',
            portriat: '../css/images/Int/Radient/Storm_Spirit.png',
        },
        {
            name: 'Techies',
            portriat: '../css/images/Int/Radient/Techies.png',
        },
        {
            name: 'Tinker',
            portriat: '../css/images/Int/Radient/Tinker.png',
        },
        {
            name: 'Windranger',
            portriat: '../css/images/Int/Radient/Windranger.png',
        },
        {
            name: 'Zeus',
            portriat: '../css/images/Int/Radient/Zeus.png',
        },

    ]
    factory.direIntHeroes = [
        {
            name: 'Ancient Apparition',
            portriat: '../css/images/Int/Dire/Ancient_Apparition.png',
        },
        {
            name: 'Bane',
            portriat: '../css/images/Int/Dire/Bane.png',
        },
        {
            name: 'Batrider',
            portriat: '../css/images/Int/Dire/Batrider.png',
        },
        {
            name: 'Dark Seer',
            portriat: '../css/images/Int/Dire/Dark_Seer.png',
        },
        {
            name: 'Dazzle',
            portriat: '../css/images/Int/Dire/Dazzle.png',
        },
        {
            name: 'Death Prophet',
            portriat: '../css/images/Int/Dire/Death_Prophet.png',
        },
        {
            name: 'Enigma',
            portriat: '../css/images/Int/Dire/Enigma.png',
        },
        {
            name: 'Invoker',
            portriat: '../css/images/Int/Dire/Invoker.png',
        },
        {
            name: 'Leshrac',
            portriat: '../css/images/Int/Dire/Leshrac.png',
        },
        {
            name: 'Lich',
            portriat: '../css/images/Int/Dire/Lich.png',
        },
        {
            name: 'Lion',
            portriat: '../css/images/Int/Dire/Lion.png',
        },
        {
            name: 'Necrophos',
            portriat: '../css/images/Int/Dire/Necrophos.png',
        },
        {
            name: 'Outworld Devourer',
            portriat: '../css/images/Int/Dire/Outworld_Devourer.png',
        },
        {
            name: 'Pugna',
            portriat: '../css/images/Int/Dire/Pugna.png',
        },
        {
            name: 'Queen of Pain',
            portriat: '../css/images/Int/Dire/Queen_of_Pain.png',
        },
        {
            name: 'Shadow Demon',
            portriat: '../css/images/Int/Dire/Shadow_Demon.png',
        },
        {
            name: 'Visage',
            portriat: '../css/images/Int/Dire/Visage.png',
        },
        {
            name: 'Warlock',
            portriat: '../css/images/Int/Dire/Warlock.png',
        },
        {
            name: 'Winter Wyvern',
            portriat: '../css/images/Int/Dire/Winter_Wyvern.png',
        },
        {
            name: 'Witch Doctor',
            portriat: '../css/images/Int/Dire/Witch_Doctor.png',
        },

    ]

    return factory;
})
