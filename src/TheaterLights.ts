export class TheaterLights {
  on() {
    console.log("Theater Lights on");
  }

  off() {
    console.log("Theater Lights off");
  }

  dim(amount: number) {
    console.log(`Theater Lights dimmed by ${amount}`);
  }
}