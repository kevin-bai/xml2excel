import { LightningElement, api, track } from 'lwc';

export default class MytProfileUserLeftMenu extends LightningElement {
    @track basicActiveClass;
    @track preferencesActiveClass;
    @track signinActiveClass;
    @track dataPrivacyClass;



    connectedCallback(){
        let url = window.location.href;
        console.log(window.location.href)


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