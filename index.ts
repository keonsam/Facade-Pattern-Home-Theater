import { Amplifier } from "./src/Amplifier"
import { DvdPlayer } from "./src/DvdPlayer"
import { HomeTheaterFacade } from "./src/HomeTheaterFacade"
import { Popper } from "./src/Popper"
import { Projector } from "./src/Projector"
import { TheaterLights } from "./src/TheaterLights"
import { Tuner } from "./src/Tuner"

class HomeTheaterTestDrive {
  static main() {
    const theater = new HomeTheaterFacade(
      new Amplifier(),
      new Tuner(),
      new DvdPlayer(),
      new Projector(),
      new TheaterLights(),
      new Popper()
      );

      theater.watchMovie("Raiders of The Lost Ark");
      console.log("movie over...");
      theater.endMovie();
  }
}

HomeTheaterTestDrive.main()