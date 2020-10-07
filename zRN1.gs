function postMail() {
  subject = 'GASメルマガ配信';

  to_company = '株式会社たろう';
  to_name = '山田太郎';
  to_mail = 'aaa@bbb.com';

  body = `${to_company}\n${to_name}様\n\nテストメルマガ配信中`;

  GmailApp.sendEmail(to_mail, subject, body);
}

