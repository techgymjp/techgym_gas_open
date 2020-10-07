function postMail() {
  subject = 'GASメルマガ配信';

  lists = readLists();
  base_body = readBody();

  for(var i in lists){
    body = '';
    body = base_body.replace('[[会社名]]', lists[i]['to_company']);
    body = body.replace('[[名前]]', lists[i]['to_name']);

    GmailApp.sendEmail(lists[i]['to_mail'], subject, body);
  }
}

function readBody() {
  doc_url = 'GoogleドキュメントのURL';
  doc = DocumentApp.openByUrl(doc_url);
  return doc.getBody().getText();
}

function readLists() {
  sheet = SpreadsheetApp.getActiveSheet();
  last_row = sheet.getLastRow();

  lists = [];
  for(let i = 0; i < last_row; i++){
    lists[i] = [];
    lists[i]['to_company'] = sheet.getRange(i+1, 1).getValue();
    lists[i]['to_name'] = sheet.getRange(i+1, 2).getValue();
    lists[i]['to_mail'] = sheet.getRange(i+1, 3).getValue();
  }
  return lists;
}

