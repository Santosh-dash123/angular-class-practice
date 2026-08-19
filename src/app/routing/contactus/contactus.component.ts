import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {
  id: number = 0; //Default Value Of ID
  // constructor(private route: ActivatedRoute) {
  //   this.id = Number(this.route.snapshot.paramMap.get('id'));
  // }
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
  }
}
