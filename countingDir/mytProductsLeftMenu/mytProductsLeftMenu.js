import { LightningElement } from 'lwc';
import Search from '@salesforce/label/c.Search';
import Find_a_product from '@salesforce/label/c.Find_a_product';
import View_by_Account from '@salesforce/label/c.View_by_Account';
import TheNationalContractor from '@salesforce/label/c.TheNationalContractor';
import View_by_Plan from '@salesforce/label/c.View_by_Plan';
import CEC_Plan from '@salesforce/label/c.CEC_Plan';
import GeospacialPlan from '@salesforce/label/c.GeospacialPlan';
import TeklaPlan from '@salesforce/label/c.TeklaPlan';
import MEP_Plan from '@salesforce/label/c.MEP_Plan';
import View_by_Type from '@salesforce/label/c.View_by_Type';
import Applications from '@salesforce/label/c.Applications';
import Devices from '@salesforce/label/c.Devices';
import Services from '@salesforce/label/c.Services';
import Cant_find_a_product_or_service from '@salesforce/label/c.Cant_find_a_product_or_service';
import Troubleshoot_product_access_issues from '@salesforce/label/c.Troubleshoot_product_access_issues';
import HowCanWeHelp from '@salesforce/label/c.HowCanWeHelp';
import VisitHelpCenter from '@salesforce/label/c.VisitHelpCenter';

export default class MytProductsLeftMenu extends LightningElement {
    label = {
        HowCanWeHelp,
        VisitHelpCenter,
         Search,
         Find_a_product,
         View_by_Account,
         TheNationalContractor,
         View_by_Plan,
         CEC_Plan,
         GeospacialPlan ,
         TeklaPlan,
         MEP_Plan,
         View_by_Type,
         Applications,
         Devices,
         Services,
         Cant_find_a_product_or_service ,
         Troubleshoot_product_access_issues,
    };
}