import fingerlings from '../assets/fingerlings-live.png'
import qrid from '../assets/qrid-live.png'

export const base = import.meta.env.BASE_URL

export const projects = [
  { title:'Fingerling Online Ordering Platform', category:'Commerce platform', image:fingerlings, description:'A digital ordering experience connecting certified fingerling suppliers and customers in Tangub City.', live:'https://fingerlings.vercel.app/', source:'https://github.com/Jasfer2xp/Fingerling-Online-Ordering-Platform', stack:['Vue','Laravel','MySQL','JavaScript','CSS'] },
  { title:'Ozamiz Schools QR-ID Attendance System', category:'Education system', image:qrid, description:'QR-based attendance and ID verification workflow designed for school operations.', live:'http://58.69.118.16:85/qrid/', source:'https://github.com/Admiral23kizaru/scanner-prod', stack:['Nuxt','PHP','MySQL','HTML','CSS','JavaScript'] },
]

export const skills = [
  { group:'Web systems', accent:'cyan', note:'Interfaces and application delivery', items:[
    {name:'HTML5',icon:'html5'},{name:'CSS3',icon:'css3'},{name:'JavaScript',icon:'javascript'},{name:'Vue',icon:'vue'},{name:'Nuxt',icon:'nuxt'},
  ] },
  { group:'Backend & automation', accent:'lime', note:'Business logic, APIs and workflow design', items:[
    {name:'PHP',icon:'php'},{name:'Laravel',icon:'laravel'},{name:'Python',icon:'python'},{name:'Django',icon:'django'},{name:'n8n',icon:'n8n'},{name:'Rule-based AI',icon:'rule-ai'},
  ] },
  { group:'Data & delivery', accent:'orange', note:'Data layers, collaboration and infrastructure', items:[
    {name:'MySQL',icon:'mysql'},{name:'PostgreSQL',icon:'postgresql'},{name:'Firebase',icon:'firebase'},{name:'Git',icon:'git'},{name:'GitHub',icon:'github'},{name:'Docker',icon:'docker'},
  ] },
  { group:'Mobile applications', accent:'violet', note:'Cross-platform mobile application development', items:[
    {name:'Ionic',icon:'ionic'},{name:'Capacitor',icon:'capacitor'},{name:'React Native',icon:'reactnative'},{name:'Expo Go',icon:'expo'},
  ] },
  { group:'Quality & security', accent:'red', note:'Verification, documentation and security awareness', items:[
    {name:'Manual QA',icon:'qa'},{name:'Regression testing',icon:'regression'},{name:'Test documentation',icon:'documentation'},{name:'Kali Linux',icon:'kalilinux'},
  ] },
  { group:'IT support & operations', accent:'cyan', note:'Hands-on systems support for people and teams', items:[
    {name:'Hardware troubleshooting',icon:'hardware'},{name:'Software configuration',icon:'configuration'},{name:'Network setup',icon:'network'},{name:'System administration',icon:'system'},{name:'Computer reformatting',icon:'reformat'},{name:'Microsoft Office',icon:'office'},{name:'Google Workspace',icon:'workspace'},{name:'Office correspondence',icon:'correspondence'},
  ] },
]

export const certificates = [
  {title:'Introduction to Data Science',issuer:'Cisco Networking Academy',date:'02 Aug 2026',file:'documents/introduction-to-data-science-certificate.pdf',note:'Certificate ID: b65431e2-ebba-41cb-9bb2-7f07005c55f7'},
  {title:'Cyber Threat Management',issuer:'Certificate document supplied',date:'05 Aug 2026',file:'documents/cyber-threat-management-certificate.pdf',note:'Issued to Aaron Ryo Gemang'},
  {title:'AI-CAKE QA Testing Portfolio',issuer:'Quality assurance case study',date:'05 Oct 2026',file:'documents/ai-cake-qa-testing-portfolio.pdf',note:'Testing evidence, verified fixes, and risk report'},
]
