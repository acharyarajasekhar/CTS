import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseService } from '../../providers/database-service/database-service';

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  course: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private db: DatabaseService) {
    this.course = this.navParams.get('course');
  }

  onChapterLongPress(section, chapter) {
    this.db.updateMyStatus(this.course, section, chapter);
  }
}
