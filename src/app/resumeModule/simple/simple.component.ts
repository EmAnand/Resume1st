import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  leagueForm: FormGroup 

  constructor(private fb: FormBuilder) {
    this.leagueForm = this.fb.group({
      league_details: this.fb.group({
        name: "",
        founder: ""
      }),
      teams: this.fb.array([this.teams])
    });
  }

  logToConsole(object: any) {
    console.log(object);
  }

  ngOnInit() {
    
  }

  get teams(): FormGroup {
    return this.fb.group({
      team_name: "",
      players: this.fb.array([this.players])
    });
  }

  get players(): FormGroup {
    return this.fb.group({
      player_name: "",
      player_number: ""
    });
  }

  addTeam() {
    (this.leagueForm.get("teams") as FormArray).push(this.teams);
  }

  deleteTeam(index:any) {
    (this.leagueForm.get("teams") as FormArray).removeAt(index);
  }

  addPlayer(team: any) {
    team.get("players").push(this.players);
  }

  deletePlayer(team:any, index:any) {
    team.get("players").removeAt(index);
  }
}
