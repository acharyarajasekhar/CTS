import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseService } from '../../providers/database-service/database-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: Array<any> = []

  constructor(
    public navCtrl: NavController, 
    private db: DatabaseService
  ) { }

  ngOnInit(){

    this.db.pushEmployeesToFirebaseDatabase();
    this.db.pushCoursesToFirebaseDatabase();

    this.db.courses.subscribe(courses => {
      this.courses = courses;
    })
  }

  onCourseSelection(course){
    this.navCtrl.push("CoursePage", { course: course });
  }

}
