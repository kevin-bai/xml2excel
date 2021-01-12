import { LightningElement } from 'lwc';
import Compliance from '@salesforce/label/c.Compliance';
import ComplianceInfo from '@salesforce/label/c.ComplianceInfo';
import YesIAgree from '@salesforce/label/c.YesIAgree';

export default class MytProfileCompliance1 extends LightningElement {
    value = [];
    label = {
        Compliance,
        ComplianceInfo,
        YesIAgree
    }; 

    get options() {
        return [
            { label: YesIAgree, value: 'yes' },
        ];
    }
}