import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBoxComponent implements OnInit {

  @Input() imgIcon: string;
  @Input() title: string;
  @Input() textTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
