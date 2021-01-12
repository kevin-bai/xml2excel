import { LightningElement } from 'lwc';
import Language from '@salesforce/label/c.Language';
import English from '@salesforce/label/c.English';
import Edit from '@salesforce/label/c.Edit';

export default class MytProfileLanguage extends LightningElement {
    label = {
        Language,
        English,
        Edit
    };
}