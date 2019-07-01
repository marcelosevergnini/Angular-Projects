import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-lifecycle',
  templateUrl: './ng-lifecycle.component.html',
  styleUrls: ['./ng-lifecycle.component.css']
})
export class NgLifecycleComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { 
    console.info('Contructor called!');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.info('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.info('ngOnInit called!');
  }

  ngDoCheck() {
    console.info('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.info('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.info('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.info('onAfterViewInit called!');

  }

  ngAfterViewChecked() {
    console.info('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.info('ngOnDestroy called!');
  }


}
