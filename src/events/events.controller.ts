import { Controller, Get} from '@nestjs/common';
@Controller('events')
export class EventsController {
  constructor(){}
  @Get()
  public async event(){
    return 'await';
  }
}