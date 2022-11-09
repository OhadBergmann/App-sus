import { emailsDB } from './mail-db.service.js'
import { storageService } from '@services/async-storage.service.js'

const MAIL_KEY = 'loc-mail';
_createMail()



function _createMail(){
    storageService.query(MAIL_KEY)
    .then(emails =>{
        if(emails && emails.length > 0) return;
        emailsDB.forEach(mail => {
            storageService.post(MAIL_KEY,mail,true);
        });
    });
}