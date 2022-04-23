import { createModel } from 'create-model';
import * as apis from '@/api/demo';

export default { namespace: 'demo', ...createModel(apis) };
