import { Component, OnInit } from '@angular/core';
import {RuneService} from '../../services/rune.service';

@Component({
  selector: 'mmr-rune-wall',
  templateUrl: './rune-wall.component.html',
  styleUrls: ['./rune-wall.component.css']
})
export class RuneWallComponent implements OnInit {

  constructor(public runeService: RuneService) { }

  ngOnInit() {
  }

}
