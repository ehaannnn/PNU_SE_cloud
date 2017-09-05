import {Component} from '@angular/core';
import {SnapShotSchedule} from'./app.SnapShotSchedule';

export enum ScheduleType{
    Date,Day,Repeat
}
enum MonthName{
    "January","February","March","April","May","June","July","August","September","October","November","December"
}
class SelectDate{
    constructor(t:ScheduleType,y:number,mt:number,date:number,day:number){
        this.type=t;
        this.year=y;
        this.month=mt;
        this.date=date;
        this.day = day;
    }
    public type:ScheduleType;
    public day:number;
    public date:number;
    public month:number;
    public year:number;
    static comp(a:SelectDate,b:SelectDate){
        return a.day==b.day && a.date == b.date && a.month==b.month && a.year == b.year;
    }
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
    hours:number[];
    mins:number[];
    secs:number[];
    selectedDate:Array<SelectDate>;
    resetSchedule(){
        while(this.selectedDate.length!=0){
            this.selectedDate.pop();
        }
    }
    checkScheduleDate(date:number,day:number){
        let tmp:SelectDate=new SelectDate(this.type,this.year,this.month,date,day);
        if(this.selectedDate.find(ele=>SelectDate.comp(ele,tmp))==null){
            this.addScheduleDate(date,day,tmp);
        }
        else{
            this.deleteSchduleDate(date,day,tmp);
        }
    }
    addScheduleDate(date:number,day:number,tmp:SelectDate){
        this.selectedDate.push(tmp);
    }
    deleteSchduleDate(date:number,day:number,tmp:SelectDate){
        let i =this.selectedDate.findIndex(ele=>SelectDate.comp(ele,tmp));
        this.selectedDate[i] = this.selectedDate[this.selectedDate.length-1];
        delete this.selectedDate[this.selectedDate.length-1];
        this.selectedDate.pop();
    }
    confirmScheduleDate(){
        let vmList = SnapShotSchedule.last.selectedVM;
        alert("snapshot 예약 요청 URL");
        for(let vmIdx=0;vmIdx<vmList.length;++vmIdx){
            for(let snapIdx=0;snapIdx < this.selectedDate.length;++snapIdx){
                //snapshot 요청 URL
            }
        }
    }
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
        let i;
        for(i=0;i<6;++i)
            this.calander.push(new Array<number>());
        this.type=ScheduleType.Date;
        this.d = new Date();
        this.date = this.d.getDate();
        this.day = this.d.getDay();
        this.lastDay=this.day;
        this.month = this.d.getMonth();
        this.year = this.d.getFullYear();
        this.calculate(0);
        this.hours=new Array<number>(12);
        for(i=0;i<12;++i)
            this.hours[i]=i+1;
        this.mins=new Array<number>(60);
        this.secs=new Array<number>(60);
        for(i=0;i<60;++i){
            this.mins[i]=i+1;
            this.secs[i]=i+1;
        }
    }
}
