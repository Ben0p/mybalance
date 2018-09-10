import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AngularEditorConfig } from '@kolkov/angular-editor';

import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  buttonText: string;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage,
    private router: Router
  ) {
    this.buttonText = 'Create Post';
  }


  ngOnInit() {
  }

  changeRoute(routeValue) {
    this.router.navigate([routeValue]);
 }

  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data);
    this.title = '';
    this.content = '';
    this.image = null;
    console.log(this.image);
    this.buttonText = 'Post Created!';
    setTimeout(() => (this.buttonText = 'Create Post'), 3000);
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = 'posts/' + file.name;
    if (file.type.split('/')[0] !== 'image') {
      return alert('Images Only');
    } else {
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => (this.image = url));
          this.uploadPercent = null;
        })
      )
        .subscribe();
    }
  }
}
