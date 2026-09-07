import { animate, spring, utils } from "./animejs/modules/index.js";

class Tabs {
  /**
   * @param {DOMTarget} container 
   * @param {{ title: string, bid: string, id: string }[]} tabs 
   */
  constructor(container, tabs) {
    this.container = container;
    this.tabs = tabs;
    this.currentTab = 1;

    this.container.style.setProperty('--tab-amount', this.tabs.length);
  }

  init() {
    const changeTabs = (tab) => {
      let cur = this.currentTab;
      this.currentTab = tab;
      
      animate(this.container, {
        '--tab-current': this.currentTab,
        ease: spring({ bounce: .3 }),
        duration: 100,
      });


      animate(this.tabs[cur-1].container, {
        opacity: 0,
        translateY: '40px',
        duration: 200,
        onComplete: () => {
          this.tabs[cur-1].container.style.display = 'none';
          this.tabs[this.currentTab-1].container.style.display = '';
        }
      });


      
      animate(this.tabs[this.currentTab-1].container, {
        opacity: { from: 0, to: 1 },
        translateY: { from: '-20px', to: '0px' },
        duration: 200,
        delay: 200
      })
    };

    for (let i in this.tabs) {
      const tabButton = document.getElementById(this.tabs[i].bid);
      tabButton.onclick = () => changeTabs(Number.parseInt(i) + 1);

      this.tabs[i].container = document.getElementById(this.tabs[i].id);
      if (this.currentTab != (Number.parseInt(i) + 1)) this.tabs[i].container.style.display = 'none'
    }

    changeTabs(1);
  }
}



export { Tabs };