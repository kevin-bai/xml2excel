import { LightningElement,api,track } from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';
import icon_facebook from '@salesforce/resourceUrl/icon_facebook';
import icon_google from '@salesforce/resourceUrl/icon_google';
import SocialLogin from '@salesforce/label/c.SocialLogin';
import ConnectGoogleAccount from '@salesforce/label/c.ConnectGoogleAccount';
import ConnectFacebookAccount from '@salesforce/label/c.ConnectFacebookAccount';

export default class MytProfileSocialLogin extends LightningElement {
    @api recordId;
    @track user;
    iconFacebook = icon_facebook;
    iconGoogle = icon_google;
    label = {
        SocialLogin,
        ConnectGoogleAccount,
        ConnectFacebookAccount
    }; 

    connectedCallback(){
        console.log('connectedCallback')
        getUser()
        .then(result => {
            this.recordId = result.Id;
            console.log('=============>'+JSON.stringify(result) );
            console.log("recordId"+this.recordId);
            this.user = result;
        })
        .catch(error => {
            this.error = error;
        });
    }

    
}