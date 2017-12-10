import {ajax} from 'rxjs/observable/dom/ajax';
import LandmarkRemarkService from '../services/landmarkRemarkService';

//Create landmark remark http service
export const landmarkRemarkService = new LandmarkRemarkService(ajax.getJSON, 60726);
