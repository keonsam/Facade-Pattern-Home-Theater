export class DvdPlayer {
  private movie?: string;
  on() {
    console.log("dvd on");
  }

  off() {
    console.log("dvd off");
  }

  play(movie: string) {
    this.movie = movie;
  }

  eject() {
    this.movie = undefined;
  }
}
