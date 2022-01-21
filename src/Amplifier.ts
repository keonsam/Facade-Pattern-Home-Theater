import { DvdPlayer } from "./DvdPlayer";

export class Amplifier {
  private dvd?: DvdPlayer;
  
  on () {
    console.log("Amplifier on");
  }

  off() {
    console.log("Amplifier off");
  }

  setDvd(dvd: DvdPlayer) {
    this.dvd = dvd;
    console.log("Amplifier set on DvdPlayer")
  }
}