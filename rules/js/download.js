const url_lookup = {
  // Rules
  'league'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes.pdf',
  'quickstart'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-quickstart.pdf',
  'event'          : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-event.pdf',
  'errata'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-errata.pdf',
  'instant-action' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-instant-action.pdf',
  // League scenarios
  'renorsal'        : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/renorsal.pdf',
  'linden'          : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/linden.pdf',
  'antallos'        : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/antallos.pdf',
  'ie'              : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/interstellar-expeditions.pdf',
  'ie-faction-ie'   : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/ie-faction-ie.pdf',
  'ie-faction-3140' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/ie-faction-a.pdf',
  'ie-faction-2739' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/ie-faction-b.pdf',
  // Event scenarios
  'trainer'            : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/combined-arms-trainer.pdf',
  'boarding-action'    : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/boarding-action.pdf',
  'resupply'           : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/resupply.pdf',
  'legate'             : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/the-legate.pdf',
  'raven-raid'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/raven-raid.pdf',
  'pride-2024'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2024.pdf',
  'pride-2025'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2025.pdf',
  'fox-patrol-origins' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/fox-patrol-origins.pdf',
  'gray-death-origins' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/gray-death-origins.pdf',
  'local-contract'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/local-contract.pdf',
  'rescue-mission'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/rescue-mission.pdf',
  // Event scenarios GM supplement
  'trainer-gm'            : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/combined-arms-trainer-gm-only.pdf',
  'boarding-action-gm'    : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/boarding-action-gm-only.pdf',
  'resupply-gm'           : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/resupply-gm-only.pdf',
  'legate-gm'             : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/the-legate-gm-only.pdf',
  'raven-raid-gm'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/raven-raid-gm-only.pdf',
  'pride-2024-gm'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2024-gm-only.pdf',
  'pride-2025-gm'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2025-gm-only.pdf',
  'fox-patrol-origins-gm' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/fox-patrol-origins-gm-only.pdf',
  'gray-death-origins-gm' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/gray-death-origins-gm-only.pdf',
  'local-contract-gm'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/local-contract-gm-only.pdf',
  'rescue-mission-gm'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/rescue-mission-gm-only.pdf',
}

function downloadURL(url) {
  const link = document.createElement('a');

  // Generate a element
  link.href          = url;
  link.target        = '_blank';
  link.download      = '';
  link.style.display = 'none';

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function triggerDownloadOnLoad() {
  const url     = window.location.href;
  const keyword = url.split('?')[1];
  const pdf_url = url_lookup[keyword];

  // Trigger download if ? present and corresponds to valid target
  if (pdf_url) downloadURL(pdf_url);
}

window.onload = triggerDownloadOnLoad;
