import { Injectable } from '@angular/core';
//import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


//import { Observable} from 'rxjs';
//import { Listener } from 'selenium-webdriver';
//Simport { Url } from 'url';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

export class ProcessService 
{
 
  constructor(private  firebase: AngularFireDatabase, private router: Router) { }
  
 
  processList: AngularFireList<any>;

  tcode:string;

  getProcess() 
  {
    this.processList = this.firebase.list(this.tcode);
    return this.processList.snapshotChanges();
  }


  checkCollectionExist()
  {
    this.processList = this.firebase.list(this.tcode);
    this.processList.snapshotChanges().subscribe(
      list => {
         let processArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
         
        if(processArray.length == 0)
        {
          console.log("Collection is not exist")
          
          return false;
        }
        else
        
        {
         console.log("Colecction is exist")
          this.router.navigate(['process'])
        }

      });
  }J


  deleteProcess($key: string) 
  {
    this.processList.remove($key);
  }
  
  
}







  // getProc(tcode)
  // {
  //     if(this.processList.query.isEqual(tcode))
  //     {
  //       return this.processList.snapshotChanges();
  //     }
  // }


























/*

// processList: AngularFireList<any>;
  // processInfo: any;

  
  // //deleteProcess($key: string) 
  // {
  //   this.processInfo.remove($key);
  // }
 //form: any;

 // public items: Observable<any[]>;

  //deleteProcess: any; AngularFireDatabase
  //constructor(db: AngularFireDatabase) {
    //this.items = db.list('python-sample-ed7f7').valueChanges();
//}


  getProcess() 
  {
    this.processList = this.firebase.list('python-sample-ed7f7/Process_Log');
    return this.processList.snapshotChanges();
  }

  insertStudent(process)
  {

  }
  updateStudent(process)
  {

  }
  //populateForm() 
  //{
    //this.form.setValue(process);
  //
}*/
