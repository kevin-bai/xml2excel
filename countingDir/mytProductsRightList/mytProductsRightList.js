import { LightningElement } from 'lwc';
import icons from '@salesforce/resourceUrl/icons';
import Products from '@salesforce/label/c.Products';
import Applications from '@salesforce/label/c.Applications';
import Showing6OutOf20 from '@salesforce/label/c.Showing6OutOf20';
import SeeAllApplications from '@salesforce/label/c.SeeAllApplications';
import WebApplication from '@salesforce/label/c.WebApplication';
import ApplicationInfo1 from '@salesforce/label/c.ApplicationInfo1';
import IncludedInPlanName from '@salesforce/label/c.IncludedInPlanName';
import Launch from '@salesforce/label/c.Launch';
import DesktopApplication from '@salesforce/label/c.DesktopApplication';
import ApplicationInfo2 from '@salesforce/label/c.ApplicationInfo2';
import Download from '@salesforce/label/c.Download';
import ApplicationInfo3 from '@salesforce/label/c.ApplicationInfo3';

export default class MytProductsRightList extends LightningElement {
    icon_trimble = icons + '/logo-trimble.png';
    icon_learn = icons + '/learn.png';
    icon_devices = icons + '/devices.png';
    icon_warranty = icons + '/warranty.png';
    icon_maintenance = icons + '/maintenance.png';
    label = {
        Products,
        Applications,
        Showing6OutOf20,
        SeeAllApplications,
        WebApplication,
        ApplicationInfo1,
        IncludedInPlanName,
        Launch,
        DesktopApplication,
        ApplicationInfo2,
        Download,
        ApplicationInfo3
    };
}