import moment from 'moment';
import {ajax} from 'rxjs/observable/dom/ajax';
import UserMap from '../models/userMapModel';
import User from '../models/userMapModel';
import LandMark from '../models/landMarkModel';
import Remark from '../models/remarkModel';
import OthersRemark from '../models/othersRemarkModel';
import DateFormats from '../constants/dateFormats';
import LandmarkRemarkService from '../services/landmarkRemarkService';
import ModelService from '../services/modelService';


//Create model service
export const modelService = new ModelService(moment, UserMap, User, LandMark, Remark, OthersRemark, DateFormats);
//Create landmark remark http service
export const landmarkRemarkService = new LandmarkRemarkService(ajax.getJSON, 60726);
