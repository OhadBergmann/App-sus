import { storageService } from '/services/async-storage.service.js'

let emails = null;
const MAIL_KEY = 'loc-mail';
_createMail()

export const clientService = {
    query,
}

function query() {
    return storageService.query(MAIL_KEY);
}

function _createMail(){
    emails = [
        {
            id:'Xgm5Ye',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'VrBQP',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'1hvkg',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'SJIHg',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'pHh7h',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'4uSnH',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
        {
            id:'YfhW3',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com'
        },
    ];
    
    emails.forEach(mail => {
        storageService.post(MAIL_KEY, mail, true);
    });
}