import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {SnapShotRoutingModule} from './SnapShotRouting.module';
import { HttpClientModule }    from '@angular/common/http';

import {VMListService} from'./SnapShotHttp';

import { VMListView } from'./app.VMList';
import {VMSnapShot} from './app.SnapShotList';
import {SnapShotMain} from './SnapShotMain';
import {SnapShotSchedule} from './app.SnapShotSchedule';
import {Scheduler} from './SnapShotCreate';
import {SnapShotCheck} from './SnapShotCheck';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    SnapShotRoutingModule    
  ],
  declarations: [
    VMListView,
    SnapShotMain,
    VMSnapShot,
    SnapShotSchedule,
    Scheduler,
    SnapShotCheck,
  ],
  providers: [VMListService],

})
export class SnapShotModule {}