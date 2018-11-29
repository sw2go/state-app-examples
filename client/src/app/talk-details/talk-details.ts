import {Component, Input} from "@angular/core";
import {Backend} from "../backend";
import {ActivatedRoute} from "@angular/router";

import {WatchService} from "../watch";
import {Talk} from "../model";
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'talk-details-cmp',
  templateUrl: './talk-details.html',
  styleUrls: ['./talk-details.css']
})
export class TalkDetailsCmp {
  talk: Talk;

  constructor(private backend: Backend, public watchService: WatchService, private route: ActivatedRoute) {
    route.params.pipe(
      mergeMap(p => this.backend.findTalk(+p['id']))
    ).subscribe(t => this.talk = t);
  }

  handleRate(newRating: number): void {
    this.backend.rateTalk(this.talk.id, newRating);
  }

  handleWatch(): void {
    this.watchService.watch(this.talk);
  }
}
