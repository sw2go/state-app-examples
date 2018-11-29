import {Component, EventEmitter, Output, Inject, Input} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.html',
  styleUrls: ['./filters.css']
})
export class FiltersCmp {
  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    this.filtersForm.setValue({
      title: v.title,
      speaker: v.speaker,
      highRating: v.minRating >= 9
    }, {emitEvent: false});
  }

  filtersForm = new FormGroup({
    speaker: new FormControl(),
    title: new FormControl(),
    highRating: new FormControl(false),
  });

  constructor() {
    this.filtersForm.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      const minRating = value.highRating ? 9 : 0;
      const filters = {speaker: value.speaker || null, title: value.title || null, minRating};
      this.filtersChange.next(filters);
    });
  }
}
