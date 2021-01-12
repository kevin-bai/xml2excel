import { LightningElement,api, track } from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';
import profileUserName from '@salesforce/label/c.profileUserName';
import Email from '@salesforce/label/c.Email';
import SencondaryEmail from '@salesforce/label/c.SencondaryEmail';
import Country from '@salesforce/label/c.Country';
import CompanyName from '@salesforce/label/c.CompanyName';
import Basics from '@salesforce/label/c.Basics';
import Edit from '@salesforce/label/c.Edit';
import NotProvided from '@salesforce/label/c.NotProvided';


export default class MytProfileUserInfo extends LightningElement {
    @api recordId;
    @track user;
    label = {
        profileUserName,
        Email,
        SencondaryEmail,
        Country,
        CompanyName,
        Basics,
        Edit,
        NotProvided
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

    editProfile(){}
}