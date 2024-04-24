import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( private http : HttpClient) {}
  title = 'angular_second';
  ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'covid-193.p.rapidapi.com',
			'x-rapidapi-key': '710aad5e87msh11210aa01027da0p1f86dbjsn7b87e799b40c'
		});
    
		this.http
			.get<any>('https://covid-193.p.rapidapi.com/countries', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
			});
	}
}
