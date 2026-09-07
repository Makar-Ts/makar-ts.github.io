import { animate, utils } from "./animejs/modules/index.js";

const id = (i) => document.getElementById("pv_"+i);

export default function initProjectViewer() {
  const core = document.getElementById('project_viewer');
  const view = core.querySelector('.view');
  let opened = false;
  /** @type {HTMLElement} */
  const container = view.querySelector('.project-viewer-container');


  window.addEventListener('resize', () => {
    if (!opened) return;

    view.style.width = (window.innerWidth - 80) + "px";
    view.style.height = (window.innerHeight - 80) + "px";
  })


  /**
   * 
   * @param {Element} elem 
   */
  const openView = async (elem) => {
    /** @type {DOMRect} */
    const rect = elem.getBoundingClientRect();


    await (await import(`./../projects/${elem.id}/load.js`))
      .default(document.getElementById('project_viewer_container'))

    container.style.display = "none";

    id("title").innerText = elem.id;

    view.style.opacity = 0;
    view.style.left = rect.left+"px";
    view.style.top = rect.top+"px";
    view.style.width = rect.width+"px";
    view.style.height = rect.height+"px";
    core.style.display = "block";

    animate(core, {
      '--before-opacity': { to: 0.6, delay: 200 },
      duration: 400
    })

    animate(view, {
      opacity: { to: 1, duration: 200 },
      left:   { to: "40px", delay: 200 },
      top:    { to: "40px", delay: 200 },
      width:  { to: window.innerWidth - 80, delay: 200 },
      height: { to: window.innerHeight - 80, delay: 200 },
      duration: 600,
      onComplete: () => {
        container.style.opacity = 0;
        container.style.display = null;
        animate(container, {
          opacity: { to: 1, duration: 200 },
        })
      }
    })

    opened = true;
  }

  const closeView = () => {
    animate(container, {
      opacity: { to: 0, duration: 200 },
      onComplete: () => container.style.display = "none",
    })

    animate(core, {
      '--before-opacity': { to: 0, delay: 400 },
      duration: 600
    })

    animate(view, {
      height: { to: 72, delay: 200, duration: 200 },
      opacity: { to: 0, delay: 400 },
      duration: 600,
      onComplete: () => core.style.display = null,
    })

    opened = false;
  }

  
  for (let elem of document.querySelectorAll('.project')) {
    elem.onclick = (e) => {
      e.preventDefault();
      openView(elem).then()
    };
  }

  id('close').onclick = () => closeView();
}