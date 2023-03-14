export default class Process {
    private process_list:any = [];
    constructor() {
        //create a process
    }
    private process_index = 0;
    AddProcess(ui_name:string,ui_icon:string,name:string) {
        const ran_proc = Math.max(Math.random())*100
        this.process_list[ran_proc] = [ran_proc,ui_icon,ui_name,name]
    }
    RemoveProcess(proc_id:number) {

    }
    GetProcess() {

    }
    GetProcessList() {
        return this.process_list
    }
    GetProcessCount() {
        this.process_list.length
    }
}