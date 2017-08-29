import {Component} from '@angular/core';

export enum ScheduleType{
    Date,Day,Repeat
}
enum MonthName{
    "January","February","March","April","May","June","July","August","September","October","November","December"
}
class SelectDate{
    type:ScheduleType;
    day:number;
    month:number;
    year:number;
    hour:number;
    min:number;
    sec:number;
}

@Component({
    selector:"schedule",
    templateUrl:"SnapShotCreate.html",
    styleUrls: ['./Scheduler.css']
})
export class Scheduler{
    calander:Array<Array<number>>;
    d:Date;
    date:number;
    day:number;
    month:number;
    year:number;
    lastDay:number;
    type:ScheduleType;
    name:string;
    selectedDate:Array<SelectDate>;
    checkType(){
        return this.type==ScheduleType.Date;
    }
    
    getMonthName(month:number){
        return MonthName[month];
    }

    calculate(idx:number){      
        this.month= (this.month+idx);
        if(this.month==0){
            this.month=11;
            this.year-=1;
        }
        else if(this.month==12){
            this.month=1;
            this.year+=1;
        }
        let i = 0;
        let j=1;
        let maximum=new Date(this.year,this.month,0).getDate();
        for(i=0;i<6;++i){
            while(this.calander[i].length!=0)
                this.calander[i].pop();
        }
        if(idx==-1){
            this.date=maximum;
            this.day = (this.day-1);
            this.day = this.day==-1?6:this.day;
        }
        else if(idx==1){
            this.date=1;
            this.day = this.lastDay+1;
            this.day = this.day==7?0:this.day;
        }
        for(i=0;i<6;++i){
            while(this.calander[i].length!=0)
                this.calander[i].pop();   
        }
        while( this.date!=1 ){
            --this.date
            this.day = (this.day-1);
            this.day = this.day==-1?6:this.day;
        }
        for(let i=0;i<this.day;++i)
            this.calander[0].push(0);
        for(let i=this.day;i<7;++i)
            this.calander[0].push(this.date++);
        while(this.date<=maximum){
            for( i=0;i<7&&this.date<=maximum;++i){
                this.lastDay = i;
                this.calander[j].push(this.date++);
            }
            for(;i<7;++i)
                this.calander[j].push(0);
            ++j;
        }
    }
    Week(index:number){
        return this.calander[index];
    }
    setType(t:number){
        if(t==0)        
            this.type=ScheduleType.Date;
        else if(t==1)
            this.type=ScheduleType.Day;
        else if(t==2)
            this.type=ScheduleType.Repeat;
    }
    constructor(){
        this.selectedDate=new Array<SelectDate>();
        this.calander=new Array<Array<number>>();
        for(let i=0;i<6;++i)
            this.calander.push(new Array<number>());
        this.type=ScheduleType.Date;
        this.d = new Date();
        this.date = this.d.getDate();
        this.day = this.d.getDay();
        this.lastDay=this.day;
        this.month = this.d.getMonth();
        this.year = this.d.getFullYear();
        this.calculate(0);
    }
}
