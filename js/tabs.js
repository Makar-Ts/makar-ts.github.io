import { animate, spring, utils } from "./animejs/modules/index.js";

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


const container = utils.$('#tabs')[0];
container.style.setProperty('--tab-amount', TABS.length);


function initTabs() {
  let currentTab = 1;

  const changeTabs = (tab) => {
    let cur = currentTab;
    currentTab = tab;
    
    
    animate(container, {
      '--tab-current': currentTab,
      ease: spring({ bounce: .3 }),
      duration: 100,
    });


    animate(TABS[cur-1].container, {
      opacity: 0,
      translateY: '40px',
      duration: 200,
      onComplete: () => {
        TABS[cur-1].container.style.display = 'none';
        TABS[currentTab-1].container.style = '';
      }
    });


    
    animate(TABS[currentTab-1].container, {
      opacity: { from: 0, to: 1 },
      translateY: { from: '-20px', to: '0px' },
      duration: 200,
      delay: 200
    })
  };

  for (let i in TABS) {
    const tabButton = document.getElementById(TABS[i].bid);
    
    tabButton.onclick = () => changeTabs(Number.parseInt(i) + 1);


    TABS[i].container = document.getElementById(TABS[i].id);
    if (currentTab != (Number.parseInt(i) + 1)) TABS[i].container.style.display = 'none'
  }

  changeTabs(1);
}


export { TABS, initTabs };