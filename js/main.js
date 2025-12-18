import { utils } from './animejs/modules/index.js';
import { getGitHubUserInfo } from './github.js';
import { getByPath, setByPath } from './helpers/byPath.js';
import { hideLoader, showLoader } from './loader.js';
import * as css from './helpers/css.js';
import { formatRepo } from './helpers/formatRepo.js';
import { TABS, initTabs } from './tabs.js';
import { getBadge } from './helpers/getBadge.js';

showLoader()

const output = await getGitHubUserInfo('Makar-Ts');

hideLoader();

const data = {
  ...output,
  companyName: output.user.company.slice(1),
  companyLink: 'https://github.com/'+output.user.company.slice(1),
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
    job: '<a href="https://metrocraft36.com/" fmain hover>Metrocraft 2036</a>',
    learning: [`NextJS`, `Angular`, `NestJS`].map(v => `<img src="${getBadge(v)}">`).join(""),
    confident: [`JavaScript`, `TypeScript`, `React`, `Node.js`].map(v => `<img src="${getBadge(v)}">`).join(""),
  },

  repo: [
    "HayatBattleshipCalculator",
    "EurekaGRPcConnector",
    "ToLLMView",
    "SocialWebFormatter",
    "BetterMS",
    "DiscordChannel2Text-Exporter",
    "CTS_Database",
  ].map(r => formatRepo(output.repos.find(v => v.name == r))),

  tabs: TABS,
}
console.log(data);


// for of loops
let elem = document.querySelector('[repeat]:not([resolved])');
while (elem) {
  let [ n, id ] = elem.getAttribute('repeat').split(';');
  id = id ?? 'index';
  const base = elem.innerHTML;

  if (Number.isNaN(Number(n)))
    n = (getByPath(data, n) ?? []).length;
  else
    n = Number(n);

  const out = [];
  for (let i=0; i<n; i++) out.push(base.replaceAll(new RegExp(`\\{${id}\\}`, 'g'), i));

  elem.innerHTML = out.join('');
  elem.setAttribute('resolved', '');

  elem = document.querySelector('[repeat]:not([resolved])');
}


// if
for (let elem of utils.$('[if]')) {
  const attr = elem.getAttribute('if');

  const negated = attr.startsWith('!');
  const d = getByPath(data, negated ? attr.slice(1) : attr);

  if (!d != negated) {
    elem.remove();
  }
}


// value mappings
for (let elem of utils.$('[data-value]')) {
  const setters = elem.getAttribute('data-value').split(';');

  for (let control of setters) {
    const [get, set] = control.split('->');

    setByPath(elem, set, getByPath(data, get));
  }
}


// tabs
initTabs();
