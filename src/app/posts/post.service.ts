import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc'));
  }

  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc('posts/' + id);
    return this.postDoc.valueChanges();
  }

  create(data: Post) {
    this.postsCollection.add(data);
  }

  read(id: string) {
    return this.afs.doc<Post>('posts/' + id);
  }

  update(id: string, formData) {
    return this.read(id).update(formData);
   }

  delete(id: string) {
    return this.read(id).delete();
  }

}
