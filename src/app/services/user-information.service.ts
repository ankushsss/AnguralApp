import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  details:any = {
    name:"ankush saxena",
    email:"ankushsss99@gmail.com",
    address:"indore madhya pradesh",
    phone:"7974829419",
    dob:"14/01/2000",
    pincode:"452012",
    linkdin:"https://www.linkedin.com/in/ankushsss99/",
    instagram:"https://www.instagram.com/ankushsaxena90/",
    github:"https://github.com/ankushsss",
    fb:"https://www.facebook.com/ankush.saxena.5243/",
    tag:"A Freelance Web Designer",
    projects:"40",
    pg:{
      year:"2017-2022",
      degree:"Master Degree",
      college:"Ips Academy",
      description:"Am done my mcadd [ Master Of Comuter Dual Degree ] course in Ips Academy"
    },
    secondary:{
      year:"2015-2017",
      degree:"12th",
      college:"Rajiv Gandhi proudyogili Vishwavidhyalaya",
      description:"Am done my mcadd course in ips academy "
    },
    company:[
      {
        name:"neurodynamic AI",
        working:"April 2021 - March 2022",
        role:"django & react developer",
        description:"working on deep interview project which is based on django and my main role is to make a whole frontend in react js"
      },
      {
        name:"nidish technology",
        working:"March 2022 - present",
        role:"Mern & Mean developer",
        description:"in this company am working various project which is based on node, react, wordpress and hubspot"
      }

    ],

    // about:"MERN Stack And Full Stack Developer proficient in Python-Django ,React Express since 2+ years of hands-on experience on a range of technologies like Python, Django, REST, JavaScript, and NodeJS, Express, React , along with HTML5 and Vanilla CSS, bootstrap, Chart.js. Worked on various management and automation projects in Python and Django and React."

   
  }
  constructor() { }
}
