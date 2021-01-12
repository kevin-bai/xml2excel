import { LightningElement } from 'lwc';
import Notifications from '@salesforce/label/c.Notifications';
import NotificationsLabel from '@salesforce/label/c.NotificationsLabel';
import NotificationsInfo from '@salesforce/label/c.NotificationsInfo';

export default class MytProfileNotificationToggler extends LightningElement {
    label = {
        Notifications,
        NotificationsLabel,
        NotificationsInfo
    };
}