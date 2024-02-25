import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import { MainService } from '../services/MainService';

@Service()
@JsonController('/')
export class MainController {
  constructor(private mainService: MainService) {}

  @Get('/')
  async home() {
    return this.mainService.getAppConfig();
  }
}
