import { LightningElement } from 'lwc';
import Compliance from '@salesforce/label/c.Compliance';
import ComplianceInfo from '@salesforce/label/c.ComplianceInfo';
import YesIAgree from '@salesforce/label/c.YesIAgree';

export default class MytProfileCompliance3 extends LightningElement {
    value = [];
    label = {
        Compliance,
        ComplianceInfo
    };

    get options() {
        return [
            { label: YesIAgree, value: 'yes' },
        ];
    }
}