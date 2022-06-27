import { AfterViewInit, Component } from '@angular/core';
import { Product } from './common/product';
import { Inventor } from './common/inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

product:Product={
  name:'hat',
  quantity:200,
  price:500
}


inventors:Inventor[]=[
  {id:1,first:'Albert',last:'Einstein',year:1879,passed:1955},
  {id:2,first:'Albert',last:'Einstein',year:1879,passed:1955},
  {id:3,first:'Albert',last:'Einstein',year:1879,passed:1955},
  {id:4,first:'Albert',last:'Einstein',year:1879,passed:1955}
]

ngAfterViewInit(): void {
    this.render(this.show)
}
show(innerHTNL:string){
  let item=document.querySelector('#list');
  if(item){
    item.innerHTML=innerHTNL;
  }
}
render(callback:(data:string)=>any){
  let innerHTML=this.inventors.map(item=>{
    return `
    <tr>
    <td>${item.id}</td>
    <td>${item.first}</td>
    <td>${item.last}</td>
    <td>${item.year}</td>
    <td>${item.passed}</td>
    </tr>
    `
  }).join('');
  callback(innerHTML);
}
}
