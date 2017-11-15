import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatabaseService {

  constructor(
    private http: Http,
    private db: AngularFireDatabase) { }


  pushEmployeesToFirebaseDatabase() {
    this.http.get("../../assets/json/employees.json")
      .map((res: any) => res.json())
      .subscribe(res => {
        let employeesList = res;
        this.db.list('employees').remove().then(res => {
          employeesList.forEach(employee => {
            this.db.list('employees').push(employee);
          });
        })
      }, err => {
        console.log(err);
      })
  }

  pushCoursesToFirebaseDatabase() {
    this.http.get("../../assets/json/courses.json")
      .map((res: any) => res.json())
      .subscribe(res => {
        let coursesList = res;
        this.db.list('courses').remove().then(res => {
          coursesList.forEach(course => {
            this.db.list('courses').push(course);
          });
        })
      }, err => {
        console.log(err);
      })
  }

  get courses(): Observable<any> {
    return this.db.list('courses').valueChanges();
  }

  updateMyStatus(course, section, chapter) {
    this.db.list('tracker',
      ref => ref.orderByChild('coursename').equalTo('Angular')).valueChanges().subscribe(items => {
        console.log(items);
        if (items && items[0]) {
          // this.db.object('/tracker/' + items[0].key)
          //   .update({
          //     "coursename": "Angular",
          //     "Chapter": "Chapter 1",
          //     "email": "abc@abc.com"
          //   });
        } else {
          this.db.list('tracker').push({
            "coursename": "Angular",
            "Chapter": "Chapter 1",
            "email": "abc@abc.com"
          })
        }
      });


  }

}
