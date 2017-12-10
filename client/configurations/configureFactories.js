import moment from 'moment';
import DateFormats from '../constants/dateFormats';
import ModelFactory from '../factories/modelFactory';

export const modelFactory = new ModelFactory(moment, DateFormats);