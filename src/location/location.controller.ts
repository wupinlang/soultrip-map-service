import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { RegeoDTO } from './types';



@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('regeo')
  find(@Body() regeoDTO: RegeoDTO) {
    return this.locationService.regeoOne(regeoDTO);
  }

}
