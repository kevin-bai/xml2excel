import { LightningElement,api,track } from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';
import updateUser from '@salesforce/apex/UserController.updateUser';
import TellUsAboutYou from '@salesforce/label/c.TellUsAboutYou';
import Industry from '@salesforce/label/c.Industry';
import Interests from '@salesforce/label/c.Interests';
import Edit from '@salesforce/label/c.Edit';
import Cancel from '@salesforce/label/c.Cancel';
import Save from '@salesforce/label/c.Save';
import NotProvided from '@salesforce/label/c.NotProvided';

export default class MytProfileUserInfoMore extends LightningElement {
    @api recordId;
    @track user;
    @track editMode = false;
    label = {
        TellUsAboutYou,
        Industry,
        Interests,
        Edit,
        Cancel,
        Save,
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

    editProfile(){
        this.editMode = true;
    }
    cancelEdit(){
        this.editMode = false;
    }

    handleChange(event) {
        console.log(event.target.name)
        if (event.target.name==='Industry') {
            console.log(event.target.value)
            this.user.Industry__c = event.target.value;
        } else if (event.target.name==='Interests') {
            this.user.Interests__c = event.target.value;
        }
    }

    updateUser(){
        console.log('updateUser', JSON.stringify(this.user));
        updateUser({'user':this.user}).then(res=>{
            console.log(res)
        })
    }

}