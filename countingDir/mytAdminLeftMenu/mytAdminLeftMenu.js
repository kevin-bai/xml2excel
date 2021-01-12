import { LightningElement,track } from 'lwc';
import custom_css from '@salesforce/resourceUrl/custom_css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

import HowCanWeHelp from '@salesforce/label/c.HowCanWeHelp';
import Admin from '@salesforce/label/c.Admin';
import BillingPayment from '@salesforce/label/c.BillingPayment';
import ManageSubscriptions from '@salesforce/label/c.ManageSubscriptions';
import ManageUsers from '@salesforce/label/c.ManageUsers';
import Howdowedisablerenewal from '@salesforce/label/c.Howdowedisablerenewal';
import TroubleshootAdminIssues from '@salesforce/label/c.TroubleshootAdminIssues';
import VisitHelpCenter from '@salesforce/label/c.VisitHelpCenter';

export default class MytAdminLeftMenu extends LightningElement {
    @track basicActiveClass;
    @track preferencesActiveClass;
    @track signinActiveClass;
    @track dataPrivacyClass;

    label = {
        HowCanWeHelp,
        Admin,
        BillingPayment,
        ManageSubscriptions,
        ManageUsers,
        Howdowedisablerenewal,
        TroubleshootAdminIssues,
        VisitHelpCenter,
    };  

    connectedCallback(){
        let url = window.location.href;
        console.log(window.location.href)
        loadStyle(this, custom_css + '/theme.css').then(() => {});

        if(url.indexOf("/trimbleprofile/preferences")>-1){
            this.preferencesActiveClass = "active";
        }else if(url.indexOf("/trimbleprofile/data-and-privacy")>-1){
            this.dataPrivacyClass = "active";
        }else if(url.indexOf("/trimbleprofile/signin")>-1){
            this.signinActiveClass = "active";
        }else{
            this.basicActiveClass = "active";
        }
    }

    linkTo(event){
        let url = event.target.dataset.url;
        console.log(url)
        window.location.href=url
    }
}