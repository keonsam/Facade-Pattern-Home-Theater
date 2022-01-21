import { Amplifier } from "./Amplifier";
import { DvdPlayer } from "./DvdPlayer";
import { Popper } from "./Popper";
import { Projector } from "./Projector";
import { TheaterLights } from "./TheaterLights";
import { Tuner } from "./Tuner";

export class HomeTheaterFacade {
  constructor(
    public amp: Amplifier,
    public tuner: Tuner,
    public dvd: DvdPlayer,
    public projector: Projector,
    public lights: TheaterLights,
    public popper: Popper
    ) {}

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...");
    this.popper.on();
    this.lights.dim(10);
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.dvd.on();
    this.dvd.play(movie);
  }

  endMovie() {
    console.log("Shutting movie theater down...");
    this.popper.off();
    this.lights.on();
    this.projector.off();
    this.amp.off();
    this.dvd.eject();
    this.dvd.off();
  }
}