// import {  } from 'rxjs';

// @Injectable()
// export class MyService {
//     private subject: BehaviorSubject<gen> = new BehaviorSubject(gen);

//     data$: Observable<gen> = this.subject.asObservable();

//     updateData(): Observable<any>  {
//         return this.getData().do((data) => {
//             this.subject.next(data);
//         });
//     }

//     // My data is an array of model objects
//     getData(): Observable<gen>{
//         return this.http.get('/path')
//             .map((response: Response) => {
//                 let data = response.json() && response.json().gen;
//                 if(data){
//                     return data;
//                 }
//             })
//     }

// }