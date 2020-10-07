function postMail() {
  subject = 'GASメルマガ配信';

  to_company = '株式会社たろう';
  to_name = '山田太郎';
  to_mail = 'aaa@bbb.com';

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

