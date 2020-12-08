import { Component, OnInit } from '@angular/core';
import {Chart} from'node_modules/chart.js';
import { Phone } from 'src/models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  myChart:any;
  listPhone:Phone[];
  errMess:String;
  constructor(private phoneService:PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe((phones)=>{this.listPhone=phones
      this.listPhone.sort((a,b)=>{
        return b.quantity-a.quantity
      });
      this.myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: [this.listPhone[0].id,this.listPhone[1].id , this.listPhone[2].id, this.listPhone[3].id, this.listPhone[4].id, this.listPhone[5].id],
            datasets: [{
                label: 'les plus 6 articles diponibles',
                data: [this.listPhone[0].quantity, this.listPhone[1].quantity, this.listPhone[2].quantity, this.listPhone[3].quantity,this.listPhone[4].quantity, this.listPhone[5].quantity],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: +this.listPhone[0].quantity+5
                    }
                }]
            }
        }
    });
      },
      errmess => {this.errMess = <any>errmess});

    
  }

}
