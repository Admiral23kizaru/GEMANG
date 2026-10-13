<template>
  <div class="page">
    <SiteNav active="process" />
    <main>
      <section class="process-hero">
        <div class="shell">
          <p class="eyebrow">Working approach</p>
          <div class="hero-grid">
            <div>
              <h1 class="page-title">Clear work. <em>Visible progress.</em></h1>
              <p class="intro">Good work is more than a finished screen. I turn a real operational need into a tested, documented system that people can use and maintain.</p>
              <div class="button-row">
                <a class="button primary" :href="base + 'contact/'">Start a conversation &#8599;</a>
                <a class="button ghost" :href="base + 'projects/'">View proof of work</a>
              </div>
            </div>
            <dl class="engagement-card" aria-label="Four delivery stages">
              <div v-for="stage in stages" :key="stage.number">
                <dt>{{ stage.number }}</dt>
                <dd><strong>{{ stage.title }}</strong><span>{{ stage.summary }}</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section class="workflow-section">
        <div class="shell">
          <header class="section-heading"><p class="eyebrow">Delivery loop</p><h2>From the actual problem<br />to a dependable handoff.</h2></header>
          <ol class="workflow-list">
            <li v-for="step in workflow" :key="step.number">
              <span class="step-number">{{ step.number }}</span>
              <div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div>
              <ul><li v-for="item in step.outputs" :key="item">{{ item }}</li></ul>
            </li>
          </ol>
        </div>
      </section>

      <section class="standards-section">
        <div class="shell standards-layout">
          <div class="standards-copy"><p class="eyebrow">What stays consistent</p><h2>Built with accountability in mind.</h2><p>Whether the work is a web system, mobile workflow, QA engagement, or IT support task, the goal is the same: make the next step clear for the people who use and maintain it.</p></div>
          <div class="standards-grid"><article v-for="standard in standards" :key="standard.title"><span>{{ standard.code }}</span><h3>{{ standard.title }}</h3><p>{{ standard.text }}</p></article></div>
        </div>
      </section>

      <section class="evidence-section">
        <div class="shell">
          <header class="section-heading evidence-heading"><p class="eyebrow">Evidence, not promises</p><h2>Inspect the work directly.</h2><p>Live systems, QA documentation, and credentials are linked here so the work can be evaluated on its own merits.</p></header>
          <div class="evidence-grid">
            <a v-for="item in evidence" :key="item.title" class="evidence-card" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noreferrer' : undefined"><span class="evidence-code">{{ item.code }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><b>{{ item.action }} <span aria-hidden="true">&#8599;</span></b></a>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { base } from '../data/portfolio'

const stages = [
  { number: '01', title: 'Understand', summary: 'Goals, users, constraints' },
  { number: '02', title: 'Build', summary: 'Focused, maintainable delivery' },
  { number: '03', title: 'Verify', summary: 'QA, fixes, and validation' },
  { number: '04', title: 'Handoff', summary: 'Documentation and next steps' },
]

const workflow = [
  { number: '01', title: 'Frame the work', text: 'I start with the people using the system, the workflow that needs improvement, and the outcome that matters. That gives the work a practical boundary before implementation starts.', outputs: ['Shared scope', 'Priority workflows', 'Clear next step'] },
  { number: '02', title: 'Implement in visible pieces', text: 'Features are built around the actual process instead of disconnected screens. I keep the work understandable and share progress while the system takes shape.', outputs: ['Working increments', 'Relevant stack choices', 'Source control'] },
  { number: '03', title: 'Test the paths people rely on', text: 'I use manual QA, regression checks, and documentation to verify behavior before handoff. Issues are recorded clearly, fixed, and rechecked.', outputs: ['Test scenarios', 'Defect notes', 'Regression checks'] },
  { number: '04', title: 'Leave a usable handoff', text: 'A delivery is stronger when the next person can operate it. I provide the context, setup details, and practical follow-through needed after launch.', outputs: ['Usage guidance', 'Technical notes', 'Support context'] },
]

const standards = [
  { code: 'A', title: 'Plain communication', text: 'Status, tradeoffs, and next actions are explained directly, without hiding the technical details that affect the work.' },
  { code: 'B', title: 'QA is part of delivery', text: 'Testing is not a final decoration. It is part of building reliable flows, documenting defects, and confirming fixes.' },
  { code: 'C', title: 'Practical documentation', text: 'Notes are written for the user, client, or teammate who needs to continue operating the system after delivery.' },
  { code: 'D', title: 'Security-aware choices', text: 'Authentication, data handling, and deployment are considered early, with security checks applied where they matter.' },
]

const evidence = [
  { code: 'LIVE 01', title: 'Fingerling Online Ordering Platform', text: 'A live ordering experience for certified fingerling suppliers and customers in Tangub City.', action: 'Open live system', href: 'https://fingerlings.vercel.app/', external: true },
  { code: 'LIVE 02', title: 'Ozamiz Schools QR-ID Attendance System', text: 'A QR-based attendance and ID verification workflow for school operations.', action: 'Open live system', href: 'http://58.69.118.16:85/qrid/', external: true },
  { code: 'QA 03', title: 'QA case study', text: 'Testing evidence, verified fixes, and a risk report from the AI-CAKE QA portfolio.', action: 'Read QA notes', href: `${base}qa/`, external: false },
  { code: 'CERT 04', title: 'Credentials', text: 'Data science and cyber threat management certificates, plus a QA testing portfolio.', action: 'View credentials', href: `${base}certifications/`, external: false },
]
</script>

<style scoped>
.process-hero{padding:105px 0 82px;border-bottom:1px solid var(--line);background:radial-gradient(circle at 84% 18%,rgba(82,231,255,.09),transparent 25rem)}.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:80px;align-items:end}.page-title{margin-bottom:23px}.engagement-card{margin:0;border:1px solid var(--line-strong);background:linear-gradient(150deg,rgba(18,27,39,.95),rgba(9,13,19,.96));box-shadow:inset 0 1px rgba(255,255,255,.025)}.engagement-card>div{display:grid;grid-template-columns:64px 1fr;gap:17px;padding:20px;border-bottom:1px solid var(--line)}.engagement-card>div:last-child{border-bottom:0}.engagement-card dt{font:500 .7rem var(--mono);letter-spacing:.09em;color:var(--lime);padding-top:3px}.engagement-card dd{margin:0;display:grid;gap:5px}.engagement-card strong{font-size:1rem}.engagement-card span{font-size:.78rem;color:var(--muted)}.workflow-section{padding:100px 0}.section-heading h2{font-size:clamp(2.7rem,5.2vw,5.4rem);letter-spacing:-.085em;line-height:.91;margin:18px 0 0}.workflow-list{padding:0;margin:54px 0 0;list-style:none;border-top:1px solid var(--line)}.workflow-list>li{display:grid;grid-template-columns:110px minmax(230px,.75fr) minmax(260px,1fr);gap:34px;padding:29px 0;border-bottom:1px solid var(--line)}.step-number{font:500 .7rem var(--mono);color:var(--cyan);letter-spacing:.08em;padding-top:6px}.workflow-list h3{font-size:1.35rem;margin:0 0 9px;letter-spacing:-.045em}.workflow-list p{margin:0;color:var(--muted);font-size:.87rem;line-height:1.6}.workflow-list ul{list-style:none;padding:0;margin:2px 0 0;border-left:1px solid var(--line);padding-left:20px}.workflow-list li li{font:.7rem var(--mono);color:#dce6f1;padding:5px 0}.workflow-list li li:before{content:'+';color:var(--lime);margin-right:8px}.standards-section{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:100px 0;background:rgba(82,231,255,.03)}.standards-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:90px}.standards-copy h2{font-size:clamp(2.4rem,4vw,4.4rem);line-height:.95;letter-spacing:-.075em;margin:17px 0}.standards-copy>p:last-child{max-width:440px;color:var(--muted)}.standards-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.standards-grid article{min-height:196px;padding:20px;border:1px solid var(--line);background:var(--panel)}.standards-grid span,.evidence-code{font:.62rem var(--mono);letter-spacing:.08em;color:var(--cyan)}.standards-grid h3{margin:33px 0 9px;font-size:1.05rem;letter-spacing:-.035em}.standards-grid p{font-size:.78rem;line-height:1.55;color:var(--muted);margin:0}.evidence-section{padding:101px 0}.evidence-heading{display:grid;grid-template-columns:.95fr 1.05fr;column-gap:80px;align-items:end}.evidence-heading .eyebrow{grid-column:1/-1}.evidence-heading h2{margin-top:18px}.evidence-heading>p:last-child{margin:0;max-width:470px;color:var(--muted);font-size:.91rem}.evidence-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:47px}.evidence-card{min-height:288px;padding:21px;border:1px solid var(--line);background:linear-gradient(150deg,rgba(16,22,32,.86),rgba(10,14,20,.93));display:flex;flex-direction:column;transition:border-color .18s ease,transform .18s ease,background .18s ease}.evidence-card:hover{transform:translateY(-4px);border-color:var(--cyan);background:linear-gradient(150deg,rgba(20,31,43,.93),rgba(10,14,20,.97))}.evidence-card h3{font-size:1.2rem;letter-spacing:-.045em;line-height:1.05;margin:42px 0 12px}.evidence-card p{font-size:.79rem;line-height:1.55;color:var(--muted);margin:0}.evidence-card b{font:.68rem var(--mono);letter-spacing:.03em;color:var(--lime);margin-top:auto;padding-top:20px}.evidence-card b span{font-size:.95rem}@media(max-width:900px){.hero-grid,.standards-layout{grid-template-columns:1fr;gap:45px}.workflow-list>li{grid-template-columns:74px 1fr}.workflow-list>li>ul{grid-column:2}.evidence-heading{grid-template-columns:1fr;gap:22px}.evidence-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:580px){.process-hero,.workflow-section,.standards-section,.evidence-section{padding:73px 0}.workflow-list{margin-top:37px}.workflow-list>li{grid-template-columns:48px 1fr;gap:16px;padding:24px 0}.workflow-list ul{padding-left:15px}.standards-grid,.evidence-grid{grid-template-columns:1fr}.standards-grid article{min-height:auto}.evidence-card{min-height:230px}.engagement-card>div{grid-template-columns:47px 1fr;padding:17px}}
</style>
