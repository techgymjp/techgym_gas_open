function postMail() {
  subject = 'GASメルマガ配信';

  lists = readLists();
  to_company = lists[0]['to_company'];
  to_name = lists[0]['to_name'];
  to_mail = lists[0]['to_mail'];

  body = readBody();
  body = body.replace('[[会社名]]', to_company);
  body = body.replace('[[名前]]', to_name);

  GmailApp.sendEmail(to_mail, subject, body);
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

