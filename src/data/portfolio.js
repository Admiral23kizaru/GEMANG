import fingerlings from '../assets/fingerlings-live.png'
import qrid from '../assets/qrid-live.png'

export const base = import.meta.env.BASE_URL
export const projects = [
  { title:'Fingerling Online Ordering Platform', category:'Commerce platform', image:fingerlings, description:'A digital ordering experience connecting certified fingerling suppliers and customers in Tangub City.', live:'https://fingerlings.vercel.app/', source:'https://github.com/Jasfer2xp/Fingerling-Online-Ordering-Platform', stack:['Vue','Laravel','MySQL','JavaScript','CSS'] },
  { title:'Ozamiz Schools QR-ID Attendance System', category:'Education system', image:qrid, description:'QR-based attendance and ID verification workflow designed for school operations.', live:'http://58.69.118.16:85/qrid/', source:'https://github.com/Admiral23kizaru/scanner-prod', stack:['Nuxt','PHP','MySQL','HTML','CSS','JavaScript'] },
]

export const skills = [
  { group:'Web systems', accent:'cyan', note:'Interfaces and application delivery', items:[{name:'HTML5',mark:'5'},{name:'CSS3',mark:'3'},{name:'JavaScript',mark:'JS'},{name:'Vue',mark:'V'},{name:'Nuxt',mark:'N'}] },
  { group:'Backend & automation', accent:'lime', note:'Business logic, APIs and workflow design', items:[{name:'PHP',mark:'php'},{name:'Laravel',mark:'L'},{name:'Python',mark:'Py'},{name:'Django',mark:'Dj'},{name:'n8n',mark:'n8n'},{name:'Rule-based AI',mark:'AI'}] },
  { group:'Data & delivery', accent:'orange', note:'Data layers, collaboration and infrastructure', items:[{name:'MySQL',mark:'My'},{name:'PostgreSQL',mark:'Pg'},{name:'Firebase',mark:'F'},{name:'Git',mark:'G'},{name:'GitHub',mark:'GH'},{name:'Docker',mark:'D'}] },
  { group:'Mobile applications', accent:'violet', note:'Cross-platform mobile application development', items:[{name:'Ionic',mark:'Io'},{name:'Capacitor',mark:'C'},{name:'React Native',mark:'RN'},{name:'Expo Go',mark:'Ex'}] },
  { group:'Quality & security', accent:'red', note:'Verification, documentation and security awareness', items:[{name:'Manual QA',mark:'QA'},{name:'Regression testing',mark:'RT'},{name:'Test documentation',mark:'TD'},{name:'Kali Linux',mark:'K'}] },
  { group:'IT support & operations', accent:'cyan', note:'Hands-on systems support for people and teams', items:[{name:'Hardware troubleshooting',mark:'HW'},{name:'Software configuration',mark:'SC'},{name:'Network setup',mark:'NW'},{name:'System administration',mark:'SA'},{name:'Computer reformatting',mark:'RF'},{name:'Microsoft Office',mark:'MS'},{name:'Google Workspace',mark:'GW'},{name:'Office correspondence',mark:'OC'}] },
]

export const certificates = [
  {title:'Introduction to Data Science',issuer:'Cisco Networking Academy',date:'02 Aug 2026',file:'documents/introduction-to-data-science-certificate.pdf',note:'Certificate ID: b65431e2-ebba-41cb-9bb2-7f07005c55f7'},
  {title:'Cyber Threat Management',issuer:'Certificate document supplied',date:'05 Aug 2026',file:'documents/cyber-threat-management-certificate.pdf',note:'Issued to Aaron Ryo Gemang'},
  {title:'AI-CAKE QA Testing Portfolio',issuer:'Quality assurance case study',date:'05 Oct 2026',file:'documents/ai-cake-qa-testing-portfolio.pdf',note:'Testing evidence, verified fixes, and risk report'},
]
