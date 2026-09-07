import { animate, utils } from './animejs/modules/index.js';
import { getGitHubUserInfo } from './github.js';
import { getByPath, setByPath } from './helpers/byPath.js';
import { hideLoader, showLoader } from './loader.js';
import { formatRepo } from './helpers/formatRepo.js';
import { Tabs } from './tabs.js';
import { getBadge } from './helpers/getBadge.js';
import initProjectViewer from './projectViewer.js';
import datt from './datt.js';

showLoader()

const output = await getGitHubUserInfo('Makar-Ts');

hideLoader();

const PROJECTS = [
  "HayatBattleshipCalculator",
]

const REPOS = [
  "FunkyTreesEditor",
  "EurekaGRPcConnector",
  "ToLLMView",
  "BetterMS",
  "DiscordChannel2Text-Exporter",
  "CTS_Database",
]


const MAIN_PROJECTS = [
  "HayatBattleshipCalculator",
  "FunkyTreesEditor",
  "CTS_Database"
]


const TABS = [
  {
    title: 'Info',
    bid: 'tab_info_button',
    id: 'tab_info'
  },
  {
    title: 'Projects',
    bid: 'tab_projects_button',
    id: 'tab_projects'
  },
  // {
  //   title: 'Skills',
  //   bid: 'tab_skills_button',
  //   id: 'tab_skills'
  // }
]

const PROJECT_SUBTABS = [
  {
    title: 'Main',
    bid: 'projsub_tab_main_button',
    id: 'projsub_tab_main'
  },
  {
    title: 'Pet',
    bid: 'projsub_tab_pet_button',
    id: 'projsub_tab_pet'
  },
  {
    title: 'Other',
    bid: 'projsub_tab_other_button',
    id: 'projsub_tab_other'
  },
]


const data = {
  ...output,
  companyName: output.user.company ? output.user.company.slice(1) : "None",
  companyLink: output.user.company ? 'https://github.com/'+output.user.company.slice(1) : "/",
  reposLink: 'https://github.com/Makar-Ts?tab=repositories',

  socials: [
    {
      spanClass: 'mgc_telegram_fill',
      name: 'Telegram',
      link: 'https://t.me/makar_ts',
    },
    {
      spanClass: 'mgc_telegram_fill',
      name: 'Channel',
      link: 'https://t.me/recursion_limit',
    },
    {
      spanClass: 'mgc_discord_fill',
      name: 'Discord',
      link: 'https://discord.com/users/makargrom',
    },
    {
      spanClass: 'mgc_mail_fill',
      name: 'Mail',
      link: 'mailto:addlove.makar+github@gmail.com',
    },
  ],

  info: {
    description: `I'm a passionate and motivated junior developer focused on building modern web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I am currently expanding my expertise in full-stack development and am always open to new challenges and opportunities for growth.`,
    job: '<a href="https://guap.ru/en/" fmain hover>Student at SUAI (St. Petersburg State University of Aerospace Instrumentation)</a>',
    learning: [`NextJS`, `Angular`, `NestJS`].map(v => `<img src="${getBadge(v)}">`).join(""),
    confident: [`JavaScript`, `TypeScript`, `React`, `Node.js`].map(v => `<img src="${getBadge(v)}">`).join(""),
  },

  repo: [
    ...PROJECTS,
    ...REPOS,
  ].map(r => formatRepo(output.repos.find(v => v.name == r))),

  repoClasses: [
    ...PROJECTS.map(v => "container project"),
    ...REPOS.map(v => "container github"),
  ],

  projects: {
    
  },

  tabs: TABS,
  projsubTabs: PROJECT_SUBTABS,

}

data.projects = [
  {
    repo: data.repo.filter(r => MAIN_PROJECTS.includes(r.name)),
    repoClasses: data.repoClasses.filter((r, i) => MAIN_PROJECTS.includes(data.repo[i].name)),
  },
  {
    repo: data.repo.filter(r => !MAIN_PROJECTS.includes(r.name)),
    repoClasses: data.repoClasses.filter((r, i) => !MAIN_PROJECTS.includes(data.repo[i].name)),
  },
  {
    repo: [
      {
        link: "",
        updated: new Date("02.09.2026").toLocaleDateString('en-US', {
          dateStyle: "short"
        }),
        name: "Photography",
        description: "I'm into photography (mostly landscapes and architecture). Right now, I have a Canon 1100D, and most of my photos were taken with it. Click to see some of them.",
        license: 'none',
        language: '',
        languageBadge: getBadge("Photo"),
        topics: [],
      }
    ],
    repoClasses: [
      "container project"
    ],
  }
]


console.log(data);


datt(document, data)


// init
new Tabs(utils.$('#tabs')[0], TABS).init();
new Tabs(utils.$('#projsubTabs')[0], PROJECT_SUBTABS).init();
initProjectViewer();