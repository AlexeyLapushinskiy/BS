import { Component, OnInit } from '@angular/core';
import { DashboardActions } from './api/actions';
import * as Ajv from 'ajv/dist/ajv.min.js';
// import Ajv from 'ajv';
// import moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashbaordComponent implements OnInit {

  // ajv: any = new Ajv({allErrors: true});

  form: any = {
    "checked": false,
    "date": {
      "dateValue": "12-08-1994"
    },
    "duration": {
      "min": 5,
      "max": 10
    },
    "startDate": "2007-08-31T16:47+00:00",
    "endDate": "2007-08-31T16:47+00:00",
    "sources": [
      "source1",
      "source2"
    ]
  };
  schema: any = {
    "type": "object",
    "required": ["startDate", "endDate", "min", "max", "checked", "sources", "dateValue"],
    "properties": {
      "checked": {
        "$id": "data/properties/checked",
        "type": "boolean",
        "title": "The Checked Schema",
        "description": "An explanation about the purpose of this instance.",
        "default": false,
        "examples": [
          false
        ]
      },
      "date": {
        "$id": "data/properties/date",
        "title": "Date",
        "type": "object",
        "format": "date",
        "dateValue": {
          "$id": "data/properties/date/dateValue",
          "type": "string",
          "title": "Date"
        }
      },
      "duration": {
        "$id": "data/properties/duration",
        "type": "object",
        "properties": {
          "min": {
            "$id": "data/properties/duration/properties/min",
            "type": "integer",
            "title": "The Min Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
              5
            ]
          },
          "max": {
            "$id": "data/properties/duration/properties/max",
            "type": "integer",
            "title": "The Max Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
              10
            ]
          }
        }
      },
      "startDate": {
        "$id": "data/properties/startDate",
        "type": "string",
        "title": "The Startdate Schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "2007-08-31T16:47+00:00"
        ]
      },
      "endDate": {
        "$id": "data/properties/endDate",
        "type": "string",
        "title": "The Enddate Schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "2007-08-31T16:47+00:00"
        ]
      },
      "sources": {
        "$id": "data/properties/sources",
        "type": "array",
        "items": {
          "$id": "/properties/sources/items",
          "type": "string",
          "title": "The 0 Schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
            "source1"
          ]
        }
      }
    }
  };
  thumbnail: any = {
    0: {
      src: 'https://www.w3schools.com/howto/img_fjords.jpg',
      style: {
        left: '-60px',
        width: '600px',
        height: '68px',
        clip: 'rect(0, 120px, 68px, 0)'
      }
    },
    1: {
      style: {
        left: '-180px',
        clip: 'rect(0, 240px, 68px, 120px)'
      }
    },
    2: {
      style: {
        left: '-300px',
        clip: 'rect(0, 360px, 68px, 240px)'
      }
    },
    3: {
      style: {
        left: '-420px',
        clip: 'rect(0, 480px, 68px, 360px)'
      }
    },
    4: {
      style: {
        left: '-540px',
        clip: 'rect(0, 600px, 68px, 480px)'
      }
    }
  };
  ajv: any;
  progress: any = 10;
  theme: String = 'berlin';
  progressBarText: String = '50';
  progressBarType: String = 'success';
  progressBarStriped: boolean = true;
  progressBarAnimated: boolean = true;
  progressBarStriped1: boolean = false;
  progressBarAnimated1: boolean = false;
  markdownContent: string = '# Header1' +
      ' \n This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.' +
      '\n ## Header 2' +
      '\n Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).' +
      '\n ## Running end-to-end tests' +
      '\n Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).' +
      '\n ### Bug Fixes' +
      '\n * **common:** more detailed info about error' +
      '\n `fix(common): more detailed info about error`';
  constructor(private dashboardActions: DashboardActions) {}

  ngOnInit() {
    this.ajv = new Ajv({allErrors: true});
    console.log('on init component');
    this.dashboardActions.dashboardInitialized();
  }
}
