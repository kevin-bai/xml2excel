import { LightningElement } from 'lwc';
import PhonePreferences from '@salesforce/label/c.PhonePreferences';
import PhonePreferencesLabel from '@salesforce/label/c.PhonePreferencesLabel';
import PhonePreferencesInfo from '@salesforce/label/c.PhonePreferencesInfo';

export default class MytProfilePhoneToggler extends LightningElement {
    label = {
        PhonePreferences,
        PhonePreferencesLabel,
        PhonePreferencesInfo
    };
}