class Stopwatch {
  constructor() {
    let startTime,
      endTime,
      running,
      duration = 0;

    this.start = function () {
      if (running) {
        throw new Error("Stopwatch has already started");
      }

      running = true;

      return (startTime = new Date());
    };

    this.stop = function () {
      if (!running) {
        throw new Error("Stopwatch has already stopped");
      }

      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      return (duration += seconds);
    };

    this.reset = function () {
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      },
    });
  }
}

const sw = new Stopwatch();

console.log("Startwatch started", sw.start());
console.log("Startwatch started", sw.stop());
console.log("Startwatch started", sw.reset());
console.log("Startwatch started", sw.duration);
