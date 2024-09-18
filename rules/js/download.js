const url_lookup = {
  // Rules
  'league'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes.pdf',
  'quickstart'     : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-quickstart.pdf',
  'event'          : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-event.pdf',
  'errata'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-errata.pdf',
  'instant-action' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/battletech-outworlds-wastes-instant-action.pdf',
  // League scenarios
  'renorsal' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/renorsal.pdf',
  'linden'   : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/linden.pdf',
  'antallos' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/antallos.pdf',
  // Event scenarios
  'trainer'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/combined-arms-trainer.pdf',
  'boarding-action' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/boarding-action.pdf',
  'resupply'        : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/resupply.pdf',
  'legate'          : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/the-legate.pdf',
  'raven-raid'      : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/raven-raid.pdf',
  'pride-2024'      : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2024.pdf',
  // Event scenarios GM supplement
  'trainer-gm'         : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/combined-arms-trainer-gm-only.pdf',
  'boarding-action-gm' : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/boarding-action-gm-only.pdf',
  'resupply-gm'        : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/resupply-gm-only.pdf',
  'legate-gm'          : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/the-legate-gm-only.pdf',
  'raven-raid-gm'      : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/raven-raid-gm-only.pdf',
  'pride-2024-gm'      : 'https://raw.githubusercontent.com/Eudicods/outworlds-wastes/rules-pdf/pride-2024-gm-only.pdf',
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
