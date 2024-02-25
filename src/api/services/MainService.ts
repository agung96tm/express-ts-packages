import { Service } from 'typedi';
import { Config } from '../../config/config';

@Service()
export class MainService {
  getAppConfig() {
    const { name, node, isDevelopment, isProduction } = Config.app;
    return { name, node, isDevelopment, isProduction };
  }
}
