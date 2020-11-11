import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private ref: ChangeDetectorRef) {
    console.log(ref);
   }











  image_array: string[] = [

    ' ../../assets/img/gallery-pic-1.jpg',
    ' ../../assets/img/gallery-pic-3.jpg',
    ' ../../assets/img/gallery-pic-4.jpg',
    ' ../../assets/img/gallery-pic-2.jpg',
    ' ../../assets/img/gallery-pic-5.jpg',
    ' ../../assets/img/gallery-pic-6.jpg',
    ' ../../assets/img/gallery-pic-7.jpg',
    ' ../../assets/img/gallery-pic-8.jpg',
  ];

  ngAfterViewInit(): void {
    let prevs_slide = document.querySelector('#prevs_slide') as HTMLElement;
    let next_slide = document.querySelector('#nexts_slide') as HTMLElement;
    let prev = document.querySelector('#prev');
    let next = document.querySelector('#next');
    next_slide.style.display = 'none';
    prev.addEventListener('click', function () {
      prevs_slide.style.display = 'flex';
      next_slide.style.display = 'none';
    })
    next.addEventListener('click', function () {
      prevs_slide.style.display = 'none';
      next_slide.style.display = 'flex';
    })
  }
  n: number = 0;
  getImage(num) {


    let length = this.image_array.length - num;
    let image = document.querySelector('.images') as HTMLElement;

    if (this.n > 0) {
      image.querySelectorAll('*').forEach((elem) => elem.remove());
    }
    let number;
    for (let i = 0; i < length; i++) {
      let img = document.createElement('img');
      img.style.width = '100%';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      let randomNumber = Math.round(Math.random() * 7);
      if (randomNumber == number) {
        randomNumber = Math.round(Math.random() * 7);
      } else {
        if (num == 0) {
          img.src = this.image_array[i];

        } else {
          img.src = this.image_array[randomNumber];
          number = randomNumber;
        }
      }
      if (this.image_array[i] == ' ../../assets/img/gallery-pic-2.jpg') {
        img.style.gridRow = '2/4';
      }
      image.appendChild(img);

    }
    this.n = this.n + 1;
  }

  ngOnInit(): void {
    this.getImage(0);
  }

}
