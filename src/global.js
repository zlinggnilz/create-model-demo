import axios from './utils/axios';
import { config as requestConfig } from 'create-model';

requestConfig({ request: axios });
