import"./hoisted.B9xPAaD-.js";import"./hoisted.C0xP8dBu.js";import"./navigation.Bz95h8j7.js";import"./index.es.B1RiJbf6.js";import"./jwt.M546E6_Y.js";import"./resource-progress.ClJBolsy.js";import"./http.B-35sOsF.js";import"./roadmap.SDi3zlny.js";import"./index.Bhz7cRIx.js";import"./index.CEvxOxeV.js";import"./page.C3ddTGlS.js";import"./popup.CdCAhVM2.js";import"./dom.DTPLKm7E.js";class r{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(e){const i=e.target.value.trim().toLowerCase();if(!i){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${i}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const c=new r;c.init();document.querySelectorAll("[faq-question]").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(i=>{i.classList.add("hidden")});const e=o.nextElementSibling;e&&e.classList.remove("hidden")})});
