import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../_interfaces/user';
import { catchError, map, tap } from 'rxjs/operators';
// const url = `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-10-01&filter_by_currency=AED&locale=en-gb&checkin_date=2022-09-30&latitude=${coordinates.forEach(x=>{x.latitude})}&longitude=${coordinates.forEach(x=>{x.longitude})}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;
// const url = 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?latitude=51.509865&currency=USD&longitude=-0.118092&checkout_date=2022-09-03&sort_order=STAR_RATING_HIGHEST_FIRST&checkin_date=2022-08-29&adults_number=1&locale=en_US&guest_rating_min=4&star_rating_ids=3%2C4%2C5&children_ages=4%2C0%2C15&page_number=1&price_min=10&accommodation_ids=20%2C8%2C15%2C5%2C1&theme_ids=14%2C27%2C25&price_max=500&amenity_ids=527%2C2063';

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-10-01&filter_by_currency=AED&locale=en-gb&checkin_date=2022-09-30&latitude=-26.1064&longitude=28.047&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true';
  public Accommodations: any[] = [];
  public Totalamount = new Subject<number>();

  getStock() {
    var url: any;
    navigator.geolocation.getCurrentPosition((res) => {
      console.log(res.coords.longitude)
    }
    )

    return fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-11-30&filter_by_currency=AED&locale=en-gb&checkin_date=2022-11-17&latitude=-26.1386&longitude=28.0873&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '0a1eafe8c8msh422e2b65e417463p13d7e7jsn019ba2a0d267',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        },
      }
    )
      .then((val) => val.json())
      .then((response) => {
        return this.Accommodations = response.result;

      })
      .catch((err) => {
        return console.error(err);
      });

  }
  getHotels(){
    return this.http.get(`http://localhost:58760/api/hotels`);
  }
  /* GET hotels whose hotel_name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hotel array.
      return of([]);
    }

    return this.http.get<User[]>(`${this.Accommodations.forEach(x => { x.hotel_name })}=${term}`).pipe(
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


// var client = new HttpClient();
// var request = new HttpRequestMessage
// {
// 	Method = HttpMethod.Get,
// 	RequestUri = new Uri("https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?latitude=51.509865&currency=USD&longitude=-0.118092&checkout_date=2022-03-27&sort_order=STAR_RATING_HIGHEST_FIRST&checkin_date=2022-03-26&adults_number=1&locale=en_US&guest_rating_min=4&star_rating_ids=3%2C4%2C5&children_ages=4%2C0%2C15&page_number=1&price_min=10&accommodation_ids=20%2C8%2C15%2C5%2C1&theme_ids=14%2C27%2C25&price_max=500&amenity_ids=527%2C2063"),
// 	Headers =
// 	{
// 		{ "X-RapidAPI-Key", "c5a35fee9fmsha6c6e8ec1a23a61p15507ajsncd977adfed39" },
// 		{ "X-RapidAPI-Host", "hotels-com-provider.p.rapidapi.com" },
// 	},
// };
// using (var response = await client.SendAsync(request))
// {
// 	response.EnsureSuccessStatusCode();
// 	var body = await response.Content.ReadAsStringAsync();
// 	Console.WriteLine(body);
// }



// fetch(
//   `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-gb&hotel_id=${id}`,
//   {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key':
//         'c5a35fee9fmsha6c6e8ec1a23a61p15507ajsncd977adfed39',
//       'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
//     },
//   }
// )
//   .then((val) => val.json())
//   .then((response) => {
//     distructuringImages(response);
//     console.log("Hello" + response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });