import { useEffect, useState } from "react";
import photo from "./assets/profile.jpeg";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const [day, setDay] = useState("");
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const day = DAYS[new Date().getUTCDay()];
      const hours = String(new Date().getUTCHours()).padStart(2, "0");
      const minutes = String(new Date().getUTCMinutes()).padStart(2, "0");
      const seconds = String(new Date().getUTCSeconds()).padStart(2, "0");
      setDay(day);
      setUtcTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="p-4 flex flex-col gap-4 text-center">
      <section className="flex flex-col items-center py-2">
        <div className="overflow-hidden rounded-full w-40 h-40">
          <img
            src={photo}
            className="w-full"
            alt="Superfly The Tech Brhoe"
            data-testid="slackDisplayImage"
          ></img>
        </div>
        <h1 className="text-3xl font-bold" data-testid="slackUserName">
          Superfly The Tech Brhoe
        </h1>
      </section>
      <section className="flex flex-col items-center py-2">
        <div className="mb-4 text-lg">
          <h4 className="text-sm">Day and time (UTC):</h4>
          <p className="font-semibold" data-testid="currentDayOfTheWeek">
            {day}
          </p>
          <p className="font-semibold" data-testid="currentUTCTime">
            {utcTime}
          </p>
        </div>
        <p data-testid="myTrack">Track: Frontend</p>
      </section>
      <section className="flex flex-col items-center py-2">
        <a href="" data-testid="githubURL">
          GitHub URL
        </a>
      </section>
    </main>
  );
}

export default App;
