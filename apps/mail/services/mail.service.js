import { storageService } from '/services/async-storage.service.js'

const MAIL_KEY = 'loc-mail';
_createMail();

export const clientService = {
    query,
}

function query() {
    return storageService.query(MAIL_KEY);
}

function _createMail(){
    const emails = [
        {
            id:'Xgm5Ye',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: true
        },
        {
            id:'VrBQP',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: false
        },
        {
            id:'1hvkg',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: true
        },
        {
            id:'SJIHg',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: false
        },
        {
            id:'pHh7h',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: false
        },
        {
            id:'4uSnH',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: true
        },
        {
            id:'YfhW3',
            subject:'Miss you!',
            body:'Would love to catch up sometimes',
            isRead:false,
            sentAt:1551133930594,
            from:'momo@momo.com',
            to:'user@appsus.com',
            hasAttach: true
        },
    ];
    
    storageService.query()
    .then(mails=>{
        if(!mails || !(mails.length > 0)){
            storageService.saveAll(MAIL_KEY, emails);
        }
    });
    
}