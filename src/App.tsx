import photo from "./assets/profile.jpeg";

function App() {
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
          <h4 className="text-sm">Day and time:</h4>
          <p className="font-semibold" data-testid="currentDayOfTheWeek">
            Day of the week
          </p>
          <p className="font-semibold" data-testid="currentUTCTime">
            Time (UTC)
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
