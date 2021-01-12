import { LightningElement,api,track } from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';
import updateUser from '@salesforce/apex/UserController.updateUser';
import Security from '@salesforce/label/c.Security';
import Password from '@salesforce/label/c.Password';
import TwoFactorAuthentication from '@salesforce/label/c.TwoFactorAuthentication';
import NotEnabled from '@salesforce/label/c.NotEnabled';
import Edit from '@salesforce/label/c.Edit';
import Cancel from '@salesforce/label/c.Cancel';
import Save from '@salesforce/label/c.Save';

export default class MytProfileUserSecurity extends LightningElement {
    @api recordId;
    @track user;
    @track editMode = false;
    label = {
        Security,
        Password,
        TwoFactorAuthentication,
        NotEnabled,
        Edit,
        Cancel,
        Save
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
        if (event.target.name==='Password') {
            console.log(event.target.value)
            // this.user.Industry__c = event.target.value;
        } else if (event.target.name==='Two-Factor-Authentication') {
            // this.user.Interests__c = event.target.value;
        }
    }

    updateUser(){
        console.log('updateUser', JSON.stringify(this.user));
        updateUser({'user':this.user}).then(res=>{
            console.log(res)
        })
    }
}