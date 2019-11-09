import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  activeElement;
  backupElement;
  htmlStr=`
  <div class="media">
  <img src="https://image.flaticon.com/teams/slug/google.jpg" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="mr-3" href="#">
        <img src="https://image.flaticon.com/teams/slug/google.jpg" class="mr-3" alt="...">
      </a>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>`

  checkMe(event)
  {
      console.log('event : ',event);
      this.backupElement=event
      this.activeElement=event.target.innerHTML ? event.target.innerHTML : event.target.src;
      console.log('this.activeElement : ',this.activeElement);

      event.preventDefault();
  }

  updateElement()
  {
      console.log('activeElement : ',this.activeElement,this.backupElement);
      if(this.backupElement && this.backupElement.target.innerHTML)
      {
        this.backupElement.target.innerHTML=this.activeElement;
      }
      else{
        this.backupElement.target.src = this.activeElement;
      }
  }
}
