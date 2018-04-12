import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class ScheduleApi {

  private base_url = "schedules";
  private remoteEndpoint;
  schedules = [];
  schedule = {};

  constructor(public http: Http, private tokenService: Angular2TokenService) {
    console.log('ScheduleApi Provider Created');
  }

  getSchedules() {
    
    return this.tokenService.get(`${this.base_url}.json`).map(response=>{
      this.schedules = response.json();
      return this.schedules;      
    })
  }

  getScheduleDetails(schedule_id) {
    return this.tokenService.get(`${this.base_url}/${schedule_id}.json`).map(response=>{
      this.schedule = response.json();
      return this.schedule;
    })
  }

  createSchedule(schedule) {
    return this.tokenService.post(`${this.base_url}.json`, schedule).map(response=>{
      this.schedule = response.json();
      return this.schedule;
      //return response.status;
    })
  }

  updateSchedule(schedule) {
    console.log(`ScheduleApi: Updating schedule`)
    console.log(schedule);
    return this.tokenService.put(`${this.base_url}/${schedule.id}.json`, schedule).map(response=>{
      this.schedule = response.json();
      return this.schedule;
    })
  }

  deleteSchedule(schedule) {
    return this.tokenService.delete(`${this.base_url}/${schedule.id}.json`).map(response=>{
      return response.status;
    })
  }

}