import { Country } from '../types/enums'
import type { DataLink } from '../types/link'
import type { Player } from '../types/player'
import type { Stats } from '../types/stats'
import type { Team } from '../types/team'
import type { Tournament } from '../types/tournament'
import type { Trophy } from '../types/trophy'

export const MOCK_STATS: Record<string, Stats> = {
	aleksib: {
		id: 1, adr: 62.1, kills: 8200, deaths: 8400, assists: 3100, fpr: 0.58,
		utilityDamage: 22.4, kr: 0.6, entrySuccess: 40.3, clutchSuccess: 45.7,
		headshot: 38.9, flashSuccess: 52.3,
	},
	b1t: {
		id: 2, adr: 75.8, kills: 11800, deaths: 9700, assists: 2200, fpr: 0.7,
		utilityDamage: 14.5, kr: 0.72, entrySuccess: 52.1, clutchSuccess: 54.3,
		headshot: 64.5, flashSuccess: 38.2,
	},
	im: {
		id: 3, adr: 79.6, kills: 6100, deaths: 5400, assists: 1400, fpr: 0.75,
		utilityDamage: 11.9, kr: 0.77, entrySuccess: 58.4, clutchSuccess: 57.2,
		headshot: 49.1, flashSuccess: 37.0,
	},
	wonderful: {
		id: 4, adr: 78.9, kills: 2600, deaths: 2100, assists: 620, fpr: 0.74,
		utilityDamage: 8.4, kr: 0.79, entrySuccess: 47.6, clutchSuccess: 55.0,
		headshot: 36.2, flashSuccess: 30.5,
	},
	makazze: {
		id: 5, adr: 84.2, kills: 2100, deaths: 1750, assists: 480, fpr: 0.75,
		utilityDamage: 9.1, kr: 0.7, entrySuccess: 51.3, clutchSuccess: 48.9,
		headshot: 44.8, flashSuccess: 33.1,
	},
	apex: {
		id: 6, adr: 58.3, kills: 9400, deaths: 9100, assists: 3300, fpr: 0.55,
		utilityDamage: 24.1, kr: 0.56, entrySuccess: 38.9, clutchSuccess: 42.0,
		headshot: 35.4, flashSuccess: 55.6,
	},
	zywoo: {
		id: 7, adr: 85.7, kills: 13600, deaths: 10000, assists: 1900, fpr: 0.81,
		utilityDamage: 9.8, kr: 0.83, entrySuccess: 60.1, clutchSuccess: 67.9,
		headshot: 40.3, flashSuccess: 34.8,
	},
	flamez: {
		id: 8, adr: 80.4, kills: 5900, deaths: 5000, assists: 1300, fpr: 0.77,
		utilityDamage: 12.6, kr: 0.79, entrySuccess: 56.7, clutchSuccess: 58.1,
		headshot: 46.9, flashSuccess: 39.0,
	},
	mezii: {
		id: 9, adr: 71.2, kills: 5700, deaths: 4900, assists: 1600, fpr: 0.68,
		utilityDamage: 17.3, kr: 0.7, entrySuccess: 46.5, clutchSuccess: 61.4,
		headshot: 41.5, flashSuccess: 44.2,
	},
	ropz: {
		id: 10, adr: 79.4, kills: 11200, deaths: 8900, assists: 2050, fpr: 0.74,
		utilityDamage: 15.3, kr: 0.75, entrySuccess: 54.0, clutchSuccess: 63.8,
		headshot: 53.1, flashSuccess: 40.0,
	},
	frozen: {
		id: 11, adr: 80.1, kills: 8600, deaths: 7300, assists: 1600, fpr: 0.77,
		utilityDamage: 10.4, kr: 0.79, entrySuccess: 57.3, clutchSuccess: 59.6,
		headshot: 44.7, flashSuccess: 32.9,
	},
	twistzz: {
		id: 12, adr: 78.8, kills: 12100, deaths: 9800, assists: 1750, fpr: 0.76,
		utilityDamage: 8.9, kr: 0.78, entrySuccess: 55.8, clutchSuccess: 56.4,
		headshot: 42.0, flashSuccess: 30.1,
	},
	jcobbb: {
		id: 13, adr: 72.5, kills: 2300, deaths: 2100, assists: 610, fpr: 0.69,
		utilityDamage: 13.7, kr: 0.71, entrySuccess: 49.8, clutchSuccess: 47.3,
		headshot: 40.6, flashSuccess: 36.4,
	},
	jboen: {
		id: 14, adr: 74.0, kills: 3400, deaths: 3100, assists: 900, fpr: 0.71,
		utilityDamage: 12.1, kr: 0.72, entrySuccess: 50.5, clutchSuccess: 49.7,
		headshot: 43.3, flashSuccess: 38.9,
	},
	neityu: {
		id: 15, adr: 70.9, kills: 3900, deaths: 3600, assists: 1050, fpr: 0.67,
		utilityDamage: 16.8, kr: 0.68, entrySuccess: 45.1, clutchSuccess: 46.2,
		headshot: 39.7, flashSuccess: 41.3,
	},
}

export const MOCK_PLAYERS: Player[] = [
	{
		id: 1, nick: 'Aleksib', firstname: 'Aleksi', surname: 'Virolainen',
		country: Country.Finland, dateOfBirth: '1997-05-03', teamId: 1,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/7-TvianW79yWk13gdw-Jc5.png?ixlib=java-2.1.0&w=400&s=f94eda5a77f332bc02821e6b845ca207',
		trophyIds: [102], stats: MOCK_STATS.aleksib,
	},
	{
		id: 2, nick: 'b1t', firstname: 'Valeriy', surname: 'Vakhovskiy',
		country: Country.Ukraine, dateOfBirth: '2003-01-05', teamId: 1,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/CgO3veixSYH5OMIePtwp1u.png?ixlib=java-2.1.0&w=400&s=1b5f0f326bf822540d59ae246c1b7e65',
		trophyIds: [101, 102], stats: MOCK_STATS.b1t,
	},
	{
		id: 3, nick: 'iM', firstname: 'Mihai', surname: 'Ivan',
		country: Country.Romania, dateOfBirth: '1999-05-16', teamId: 1,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/lWNcoOFOcHF3uIERANZRXh.png?ixlib=java-2.1.0&w=400&s=cd5df4d5e89df8cab0e4a7edd6db0d8b',
		trophyIds: [102], stats: MOCK_STATS.im,
	},
	{
		id: 4, nick: 'w0nderful', firstname: 'Ihor', surname: 'Zhdanov',
		country: Country.Ukraine, dateOfBirth: '2005-01-01', teamId: 1,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/OepRRBoc68iVojIfgK3JIA.png?ixlib=java-2.1.0&w=400&s=99dcc1115ffec1ed275a5cf4eacca825',
		trophyIds: [], stats: MOCK_STATS.wonderful,
	},
	{
		id: 5, nick: 'makazze', firstname: 'Drin', surname: 'Shaqiri',
		country: Country.Albania, dateOfBirth: '2006-12-21', teamId: 1,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/U6KmIKHcqg2OpMrNn-Aqk6.png?ixlib=java-2.1.0&w=400&s=420f1bcb0e6943b68fafb5e2d933197c',
		trophyIds: [], stats: MOCK_STATS.makazze,
	},

	{
		id: 6, nick: 'apEX', firstname: 'Dan', surname: 'Madesclaire',
		country: Country.France, dateOfBirth: '1993-02-22', teamId: 2,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/3M9h08qvl3YOsaRcAvKhs4.png?ixlib=java-2.1.0&w=400&s=c1acc9777d9e3165140548582e9bf1f5',
		trophyIds: [103], stats: MOCK_STATS.apex,
	},
	{
		id: 7, nick: 'ZywOo', firstname: 'Mathieu', surname: 'Herbaut',
		country: Country.France, dateOfBirth: '2000-11-09', teamId: 2,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/blnoWFtH8GUJZjhr8H0P4u.png?ixlib=java-2.1.0&w=400&s=dc0fe6bd817ef852f59185ccf6b6c868',
		trophyIds: [103], stats: MOCK_STATS.zywoo,
	},
	{
		id: 8, nick: 'flameZ', firstname: 'Shahar', surname: 'Shushan',
		country: Country.Israel, dateOfBirth: '2003-06-22', teamId: 2,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/LUQi5dX9boyO0uDadUGht5.png?ixlib=java-2.1.0&w=400&s=1c5c46fe41e79b19a69b479d8abbbb41',
		trophyIds: [103], stats: MOCK_STATS.flamez,
	},
	{
		id: 9, nick: 'mezii', firstname: 'William', surname: 'Merriman',
		country: Country.UnitedKingdom, dateOfBirth: '1998-10-15', teamId: 2,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/7GVUrVLAQkgnuovRkk5Bxw.png?ixlib=java-2.1.0&w=400&s=00b346853396c35e5889b00be2766c99',
		trophyIds: [], stats: MOCK_STATS.mezii,
	},
	{
		id: 10, nick: 'ropz', firstname: 'Robin', surname: 'Kool',
		country: Country.Estonia, dateOfBirth: '1999-12-22', teamId: 2,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/YQ9kQQ3aop1JZQE9xJ140r.png?ixlib=java-2.1.0&w=400&s=d4c7a00036511e25b4854ba3d3af80ca',
		trophyIds: [], stats: MOCK_STATS.ropz,
	},

	{
		id: 11, nick: 'frozen', firstname: 'David', surname: 'Čerňanský',
		country: Country.Slovakia, dateOfBirth: '2002-07-18', teamId: 3,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/aFuk-1yq3DatdhVa3kICms.png?ixlib=java-2.1.0&w=400&s=4a99190a6e6eabbfd799ec121c5f9c53',
		trophyIds: [], stats: MOCK_STATS.frozen,
	},
	{
		id: 12, nick: 'Twistzz', firstname: 'Russel', surname: 'Van Dulken',
		country: Country.Canada, dateOfBirth: '1999-11-14', teamId: 3,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/djeIpvmdjSQ_cOHzaomwxF.png?ixlib=java-2.1.0&w=400&s=db0b4311a3a465affa9da3e355cb78cb',
		trophyIds: [], stats: MOCK_STATS.twistzz,
	},
	{
		id: 13, nick: 'jcobbb', firstname: 'Jakub', surname: 'Pietruszewski',
		country: Country.Poland, dateOfBirth: '2004-01-27', teamId: 3,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/EEnQR7JP45ECDWPxft2zHF.png?ixlib=java-2.1.0&w=400&s=137010231f6f6b1db77e15f4235dea1f',
		trophyIds: [], stats: MOCK_STATS.jcobbb,
	},
	{
		id: 14, nick: 'JBOEN', firstname: 'Jason', surname: 'Boe Nielsen',
		country: Country.Denmark, dateOfBirth: '2000-01-01', teamId: 3,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/7mXOiZDRcCfuVomUVCmGz_.png?ixlib=java-2.1.0&w=400&s=b75e34e067442fcadd34d366e2277bf3',
		trophyIds: [], stats: MOCK_STATS.jboen,
	},
	{
		id: 15, nick: 'Neityu', firstname: 'Ryan', surname: 'Aubry',
		country: Country.France, dateOfBirth: '2001-01-01', teamId: 3,
		photo: 'https://img-cdn.hltv.org/playerbodyshot/z7Jeal58NVuDymx4F5O9D6.png?ixlib=java-2.1.0&w=400&s=71798505ba638781aff02d77bef9c9e4',
		trophyIds: [], stats: MOCK_STATS.neityu,
	},
]

export const MOCK_TEAMS: Team[] = [
	{
		id: 1,
		name: 'Natus Vincere',
		logo: 'https://upload.wikimedia.org/wikipedia/uk/d/df/Natus_Vincere_Logo.png?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original',
		players: MOCK_PLAYERS.filter(p => p.teamId === 1),
		trophies: [101, 102],
		country: Country.Ukraine,
	},
	{
		id: 2,
		name: 'Team Vitality',
		logo: 'https://upload.wikimedia.org/wikipedia/uk/6/64/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D1%96%D0%B1%D0%B5%D1%80%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%97_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%97_Team_Vitality.png?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original',
		players: MOCK_PLAYERS.filter(p => p.teamId === 2),
		trophies: [103],
		country: Country.France,
	},
	{
		id: 3,
		name: 'FaZe Clan',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Faze_Clan.svg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original',
		players: MOCK_PLAYERS.filter(p => p.teamId === 3),
		trophies: [],
		country: Country.UnitedStates,
	},
]

export const MOCK_TROPHIES: Trophy[] = [
	{
		id: 101,
		name: 'PGL Major Stockholm 2021',
		image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/PGL_Major_Stockholm_2021.png/250px-PGL_Major_Stockholm_2021.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
		team: MOCK_TEAMS[1], 
		tournamentId: 501,
		teamId: 1,
		winnerIds: [1, 2],
	},
	{
		id: 102,
		name: 'PGL Major Copenhagen 2024',
		image: 'https://img-cdn.hltv.org/eventlogo/awaDsLUuCqka6Q54efjwK9.png?ixlib=java-2.1.0&s=ac3bb776581548ccd0c490651a37968d',
		team: MOCK_TEAMS[1],
		tournamentId: 502,
		teamId: 1,
		winnerIds: [2, 3],
	},
	{
		id: 103,
		name: 'BLAST.tv Paris Major 2023',
		image: 'https://skins-cdn.hltv.org/sticker/0cTlzypatyVx67IVCWNMAo.webp',
		team: MOCK_TEAMS[2],
		tournamentId: 503,
		teamId: 2,
		winnerIds: [4],
	},
]

export const MOCK_TOURNAMENTS: Tournament[] = [
	{
		id: 501,
		title: 'PGL Major Stockholm 2021',
		prizepool: 2000000,
		mvp: MOCK_PLAYERS.find(p => p.nick === 's1mple'),
		winner: MOCK_TEAMS.find(t => t.id === 1),
		teams: MOCK_TEAMS,
		trophy: MOCK_TROPHIES[0],
	},
	{
		id: 502,
		title: 'PGL Major Copenhagen 2024',
		prizepool: 1250000,
		mvp: MOCK_PLAYERS.find(p => p.nick === 'jL'),
		winner: MOCK_TEAMS.find(t => t.id === 1),
		teams: MOCK_TEAMS,
		trophy: MOCK_TROPHIES[1],
	},
	{
		id: 503,
		title: 'BLAST.tv Paris Major 2023',
		prizepool: 1250000,
		mvp: MOCK_PLAYERS.find(p => p.nick === 'ZywOo'),
		winner: MOCK_TEAMS.find(t => t.id === 2),
		teams: [MOCK_TEAMS[1], MOCK_TEAMS[2]],
		trophy: MOCK_TROPHIES[2],
	},
]

export interface FooterSection {
	title: string
	links: DataLink[]
}

export const FOOTER_LINKS_DATA: FooterSection[] = [
	{
		title: 'Quick links',
		links: [
			{ title: 'Home', link: '/' },
			{ title: 'Services', link: '/services' },
			{ title: 'Insights', link: '/insights' },
			{ title: 'Portfolio', link: '/portfolio' },
			{ title: 'Blog', link: '/blog' },
			{ title: 'Join Us', link: '/careers' },
		],
	},
	{
		title: 'Industries',
		links: [
			{ title: 'About industries', link: '/industries' },
			{ title: 'Marketplaces', link: '/industries/marketplaces' },
			{ title: 'IoT', link: '/industries/iot' },
			{ title: 'Healthcare', link: '/industries/healthcare' },
			{ title: 'Social', link: '/industries/social' },
			{ title: 'Fintech', link: '/industries/fintech' },
			{ title: 'Artificial Intelligence', link: '/industries/ai' },
		],
	},
	{
		title: 'Insights',
		links: [
			{ title: 'Startup Insights', link: '/insights/startup-insights' },
			{ title: 'Startup Idea Stage', link: '/insights/idea-stage' },
			{ title: 'Startup Design Stage', link: '/insights/design-stage' },
			{ title: 'Startup Scaling Stage', link: '/insights/scaling-stage' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ title: 'Privacy Policy', link: '/privacy-policy' },
			{ title: 'Terms of Use', link: '/terms-of-use' },
			{ title: 'Cookies', link: '/cookies' },
		],
	},
]
