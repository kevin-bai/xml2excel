import { LightningElement ,api,track} from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';
import ProfileImage from '@salesforce/label/c.ProfileImage';
import AddImage from '@salesforce/label/c.AddImage';
import RemoveProfileImage from '@salesforce/label/c.RemoveProfileImage';

export default class MytProfileUserInfoPhoto extends LightningElement {
    @api recordId;
    @track user;
    @track defaultPhoto = '';
    label = {
        ProfileImage,
        AddImage,
        RemoveProfileImage
    };

    connectedCallback(){
        console.log('connectedCallback')
        getUser()
        .then(result => {
            this.recordId = result.Id;
            console.log('=============>'+JSON.stringify(result) );
            console.log("recordId"+this.recordId);
            this.user = result;
            this.defaultPhoto = this.user.FullPhotoUrl;
        })
        .catch(error => {
            this.error = error;
        });
    }

    editProfile(){}
}