import { utils } from './animejs/modules/index.js';
import { getGitHubUserInfo } from './github.js';
import { getByPath, setByPath } from './helpers/byPath.js';
import { hideLoader, showLoader } from './loader.js';
import * as css from './helpers/css.js';
import { formatRepo } from './helpers/formatRepo.js';
import { TABS, initTabs } from './tabs.js';

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
      spanClass: 'mgc_discord_fill',
      name: 'Discord',
      link: 'https://discord.com/users/makargrom',
    },
    {
      spanClass: 'mgc_mail_fill',
      name: 'Mail',
      link: 'mailto:addlove.makar+github@gmail.com',
    },
    {
      spanClass: 'mgc_github_fill',
      name: 'GitHub',
      link: 'https://github.com/Makar-Ts',
    },
  ],

  repo: [
    "Makar-Ts/ToLLMView",
    "Makar-Ts/BetterMS",
  ].map(r => formatRepo(output.repos.find(v => v.full_name == r))),

  tabs: TABS,
}
console.log(data);

// for of loops
for (let elem of utils.$('[repeat]')) {
  let n = elem.getAttribute('repeat');
  const base = elem.innerHTML;

  if (Number.isNaN(Number(n)))
    n = (getByPath(data, n) ?? []).length;
  else
    n = Number(n);

  const out = [];
  for (let i=0; i<n; i++) out.push(base.replace(/\{index\}/g, i));

  elem.innerHTML = out.join('');
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