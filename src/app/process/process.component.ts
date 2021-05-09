import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../shared/process.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {

  constructor(public processService: ProcessService,private  firebase: AngularFireDatabase) 
  { }
  
  processArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";
  spinnerFlag: boolean[] = []
  ngOnInit() 
  {
    this.processService.getProcess().subscribe(
      list => {
        this.processArray = list.map(item => {
          this.spinnerFlag.push(false);
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        
      });
  }

  onDelete($key) 
  {
    if (confirm('Prolog : Are you sure to kill this Process ?')) 
    {
      
      console.log("In Delete");
      //console.log($key);
      //console.log("Array List:")
      
      let icnt = 0
      let index;
      this.processArray.forEach(element => {
      //console.log(element.$key)
      
       if(element.$key == $key)
        {
            
            console.log(element.pid)
            index =icnt;
            this.firebase.list(this.processService.tcode+'-Response').push(element.pid);
        }
        icnt ++;
      });

      this.spinnerFlag[index] = true;

      // this.processService.deleteProcess($key);
      // //console.log($key);
       //this.showDeletedMessage = true;
      // setTimeout(() => this.showDeletedMessage = false, 10000);
    }
  }


  filterCondition(proc) 
  {
     return proc.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  
} 





























//return process.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
//return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;









// items: Observable<any[]>;
//   processInfo: AngularFireList<any>;
//   processArray = [];
//   showDeletedMessage: boolean;
//   processService: ProcessService;
//  // processTemp = [];

//   constructor(public db: AngularFireDatabase)
//   {

//    // super();
//     this.processInfo = db.list('python-sample1-ed7f7');
//     this.processInfo.snapshotChanges().subscribe(
//       list => {
//             this.processArray = list.map(item => {
//               return {
//                 $key: item.key,
//                 ...item.payload.val()
//               };
//             });
//           });
//   }
//   onDelete($key) 
//   {
//     if (confirm('Marvellous : Are you sure to cancel this Addmission ?')) 
//     {
//       this.processInfo.remove($key);
//       this.showDeletedMessage = true;
//       setTimeout(() => this.showDeletedMessage = false, 3000);
//     }
//   }











 //   for (let key in this.processArray[0]) {
            //     let value = this.processArray[0][key];
            //     // Use `key` and `value`
            //     console.log(value)
            //     this.processTemp.push(value)
            //   }
            //   console.log(this.processTemp)
            // });



    // this.studentService.getStudents().subscribe(
    //   list => {
    //     this.studentArray = list.map(item => {
    //       return {
    //         $key: item.key,
    //         ...item.payload.val()
    //       };
    //     });
    //   });







//public books: FirebaseListObservable<Book[]>;
  //firebase: any;

  // constructor(db: AngularFireDatabase) {
  //   this.process = this.firebase.list('python-sample-ed7f7');
  //   return this.process
  // }
  /*constructor(public processService: ProcessService) 
  { }
  
  processArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";
  submitted: boolean;
  showSuccessMessage: boolean;

  ngOnInit() 
  {
    this.processService.getProcess().subscribe(
      list => {
        this.processArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

onSubmit()
  {
    {
      this.submitted = true;
    
      if (this.processService.form.valid) 
      {
        if (this.processService.form.get('$key').value == null)
        {
          this.processService.insertStudent(this.processService.form.value);
        }
        else
        {
          this.processService.updateStudent(this.processService.form.value);
        }
        
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.processService.form.reset();
        
        //this is to be done for proper reset operation
        this.processService.form.setValue({
          $key: null,
          fullName: '',
          email: '',
          mobile: '',
          location: ''
        });
      }
    }

  }
  onDelete($key) 
  {
    if (confirm('Are you sure to kill this Process ?')) 
    {
      this.processService.deleteProcess($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(student) 
  {
    return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  
  */