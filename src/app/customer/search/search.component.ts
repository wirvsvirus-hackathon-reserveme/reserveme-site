import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  private postcode: number;
  supermarkets: string[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      postcode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]*$')
      ])
    });
    this.searchForm.statusChanges.subscribe(() => this.updateErrorMessages());
    this.supermarkets = [
      '1', '2', '3'
    ];
  }

  updateErrorMessages() {

  }

  search() {
    this.postcode = this.searchForm.get('postcode').value;
    console.log(this.postcode);
  }

  getTime() {
  }

}
