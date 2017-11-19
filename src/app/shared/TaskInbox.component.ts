import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"TaskInbox",
    templateUrl:"./TaskInbox.component.html",
    styleUrls: ['./TaskInbox.component.css']
})
export class TaskInboxComponent implements OnChanges {
    

    @Input() taskCompleted:number;

    @Output() taskPanelClick: EventEmitter<string> = 
    new EventEmitter<string>();
    
    

    
    FIRST:string = "panel-success";
    SECOND: string ="panel-info";
    THIRD: string = "panel-primary";
    FOURTH: string = "panel-warning";
    FIFTH: string = "panel-danger";
    SIXTH: string = "panel-secondary";

    taskStatus:string;

    constructor(){
        
    }

    

    ngOnChanges(): void {
        this.setTaskStatus(this.taskCompleted);
    }

    setTaskStatus(task:number):void{
        switch(task){
            case 1: this.taskStatus = this.FIRST;
            break;
            case 2: this.taskStatus = this.SECOND;
            break;
            case 3: this.taskStatus = this.THIRD;
            break;
            case 4: this.taskStatus = this.FOURTH;
            break;
            case 5: this.taskStatus = this.FIFTH;
            break;
            case 6: this.taskStatus = this.SIXTH;
            break;
            default: this.taskStatus = this.FIRST;
        }

        
    }

    getPanelType(): string{
        return this.taskStatus;
    }

    taskPanelClicked():void{
        this.taskPanelClick.emit("The panel info [ " + this.taskStatus + ", " + this.taskCompleted + " ]");
    }

    
}