import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable()

export class appService {
constructor (private http:HttpClient){}


addService(data){
    return this.http.post("",data)
}


}