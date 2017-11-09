/**
 * Created by hyeongjukim on 2017. 9. 3..
 */
import { Injectable } from '@angular/core';
import {LineChartDemoComponent} from "./chart.component";
import {Chart} from "./chart";

@Injectable()
export class ChartService {

    getCharts(): Promise<void> {
        return Promise.resolve();
    }

}
