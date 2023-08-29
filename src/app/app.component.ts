import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    newMemberName = "";
    members:string[] = [];
    errorMessage = "";
    numberOfTeam: number | ""  = "";
    teams:string[][] = [];

    inputMember(member:string) {

        this.newMemberName = member;

    }

    inputTeam(number:string) {

        this.numberOfTeam = Number(number);

    }

    addMember() {

        if (!this.newMemberName) {

            this.errorMessage = "Name is required!";
            return;

        }

        this.errorMessage = "";
        this.members.push(this.newMemberName);
        this.newMemberName = "";

    }

    createTeam() {

        if (!this.numberOfTeam || this.numberOfTeam <= 0) {
            this.errorMessage = "Number of team is wrong!"
            return
        }

        if (this.members.length < this.numberOfTeam) {

            this.errorMessage = "Not enough Number!";

        }

        this.errorMessage = "";
        const allMembers = [...this.members];

        while (allMembers.length) {

            for (let i=0; i < this.numberOfTeam; i++) {

                const randomIndex = Math.floor(Math.random() * allMembers.length);
                const member = allMembers.splice(randomIndex,1)[0];

                if (!member) {
                    break;
                }

                if (this.teams[i]) {

                    this.teams[i].push(member);

                } else {

                    this.teams[i] = [member]

                }

            }

        }

        this.numberOfTeam = "";
        this.members = [];

    }

}
