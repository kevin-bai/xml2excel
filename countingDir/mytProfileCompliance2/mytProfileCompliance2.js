import { LightningElement } from 'lwc';
import Compliance from '@salesforce/label/c.Compliance';
import ComplianceInfo2P1 from '@salesforce/label/c.ComplianceInfo2P1';
import ComplianceInfo2P2 from '@salesforce/label/c.ComplianceInfo2P2';
import YesIAgree from '@salesforce/label/c.YesIAgree';

export default class MytProfileCompliance2 extends LightningElement {
    value = [];
    label = {
        Compliance,
        ComplianceInfo2P1,
        ComplianceInfo2P2
    };

    get options() {
        return [
            { label: YesIAgree, value: 'yes' },
        ];
    }
}