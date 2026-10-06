const publications = [
 {year:2025,type:'journal',title:'Psychological Impact of Internet Blackouts: A Case Study with Machine Learning-Based Stress Analysis',authors:'M. A. Islam, T. Islam, G. Hossain, and M. M. Hossain',venue:'IEEE Access',pages:'pp. 83505–83527'},
 {year:2025,type:'journal',title:'Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: A Comprehensive Case Study',authors:'M. A. Islam, Md. S. Hasan, N. Imam-Ur-Rashid, Md. M. Hasan, J. A. Chowdhury, M. R. Sohan, N. A. Jahan, and M. M. Hossain',venue:'IEEE Access',pages:'pp. 52658–52682'},
 {year:2026,type:'review',title:'The Technology Preparedness Paradox during Natural Disasters: A Qualitative Meta-Analysis',authors:'M. A. Islam, J. Marx, L. Liu, and O. Turel',venue:'European Journal of Information Systems',pages:''},
 {year:2026,type:'review',title:'Digital Activism during an Internet Blackout: Temporal Dynamics of the 2024 Bangladesh Quota Movement',authors:'M. A. Islam, J. Marx, L. Liu, and O. Turel',venue:'European Conference on Information Systems',pages:''},
 {year:2026,type:'review',title:'Mental Health Resilience through Social Media: Temporal Dynamics of Ex-Tropical Cyclone Alfred',authors:'M. A. Islam, J. Marx, L. Liu, and O. Turel',venue:'European Conference on Information Systems (ECIS)',pages:''},
 {year:2025,type:'conference',title:'Digital Mental Health Resilience During Natural Disasters: A Scoping Review and Research Agenda',authors:'M. A. Islam, J. Marx, L. Liu, and O. Turel',venue:'36th Australasian Conference on Information Systems (ACIS)',pages:'pp. 1–20'},
 {year:2025,type:'conference',title:'Mental Health Evaluation during Internet Blackouts: A Machine Learning Approach',authors:'T. Islam, T. Islam, M. A. Islam, and T. R. Sakib',venue:'IET Conference Proceedings · 2024:30',pages:'pp. 541–547'},
 {year:2025,type:'conference',title:'Air Pollution Prediction and Classification with a Hybrid ANN-LSTM Model in Modern Cities: A Comparative Study',authors:'M. A. Islam, M. R. Sohan, G. J. Rayhan, M. S. I. Khairul, A. A. Noman, and M. H. Nadid',venue:'IET Conference Proceedings · 2024:30',pages:'pp. 580–585'},
 {year:2025,type:'conference',title:'Mental Health Evaluation during Internet Blackouts: A Case Study of Bangladesh Quota Movement',authors:'M. A. Islam and T. Islam',venue:'ITM Web of Conferences · Volume 72',pages:'pp. 1–18'},
 {year:2024,type:'conference',title:'Enhanced Solar Radiation Prediction with Machine Learning: A Comprehensive Analysis of Meteorological Data Using Random Forest',authors:'M. A. Islam and M. R. Sohan',venue:'15th International Conference on Computing Communication and Networking Technologies (ICCCNT)',pages:'pp. 1–6'},
 {year:2024,type:'conference',title:'Exploring Classification of Vehicles Using Horn Sound Analysis: A Deep Learning-Based Approach',authors:'M. A. Islam, M. R. Sohan, Md. S. Hasan, T. S. Rafa, and A. Jawad',venue:'23rd International Symposium INFOTEH-JAHORINA',pages:'pp. 1–6'},
 {year:2024,type:'conference',title:'Enhancing Power Transmission Line Fault Detection with a Hybrid ANN-SVM Machine Learning Model: A Comparative Study',authors:'M. A. Islam, M. R. Sohan, M. H. Nadid, T. S. Rafa, and A. Jawad',venue:'International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS)',pages:'pp. 1–6'},
 {year:2023,type:'conference',title:'Sound Pollution Monitoring System and Awareness Creation in Modern Cities: A Case Study',authors:'M. A. Islam, M. R. Sohan, A. Jawad, H. R. Sourid, and M. M. Hossain',venue:'International Conference on Advances in Electronics, Communication, Computing and Intelligent Information Systems (ICAECIS)',pages:'pp. 637–642'}
];
let activeFilter='all';
const list=document.querySelector('#publication-list');
const search=document.querySelector('#publication-search');
function element(tag,className,text){const node=document.createElement(tag);node.className=className;node.textContent=text;return node;}
function renderPublications(){
 const query=search.value.trim().toLowerCase();
 const matches=publications.filter(p=>(activeFilter==='all'||p.type===activeFilter)&&[p.title,p.authors,p.venue,p.year].join(' ').toLowerCase().includes(query));
 list.replaceChildren();
 for(const p of matches){
  const row=element('article','paper','');row.append(element('span','paper-year',String(p.year)));
  const body=element('div','paper-body','');
  const status=p.type==='review'?'Under review':p.type==='journal'?'Journal article':'Conference paper';
  body.append(element('span','paper-status'+(p.type==='review'?' review':''),status),element('h3','',p.title),element('p','paper-authors',p.authors),element('p','paper-venue',p.venue+(p.pages?' · '+p.pages:'')));row.append(body);
  if(p.type!=='review'){const link=element('a','paper-link','Find on Scholar ↗');link.href='https://scholar.google.com/scholar?q='+encodeURIComponent('"'+p.title+'"');link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Find '+p.title+' on Google Scholar');row.append(link);}
  list.append(row);
 }
 if(!matches.length)list.append(element('p','empty','No publications match. Try another search or select All work.'));
 document.querySelector('.results').textContent=matches.length+' of '+publications.length+' works';
}
document.querySelector('.publication-controls').hidden=false;
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});renderPublications();}));
search.addEventListener('input',renderPublications);renderPublications();
const menu=document.querySelector('.menu'),navigation=document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
const copy=document.querySelector('#copy-email');copy.hidden=false;
copy.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('mohammadariful.islam.1@unimelb.edu.au');status.textContent='Email address copied.';}catch{status.textContent='Please select and copy the email address above.';}});


