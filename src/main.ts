import 'zone.js/dist/zone';
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <form>
    <input type="file" multiple (change)="onFileChange($event)" />
  </form>
  <br />
  <button (click)="click()">Submit</button>
  `,
})
export class App {
  ngOnInit() {
    console.log(AWS);
  }
  file: File[];

  onFileChange(event: any) {
    this.file = Array.from(event.target.files);
  }

  async click() {
    console.log('123');
    if (!this.file) {
      console.log('No file selected!');
      return;
    }

    for (let currentFile of this.file) {
    }
  }
}

bootstrapApplication(App);
