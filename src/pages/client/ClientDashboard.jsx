export default function ClientDashboard() {
  const upcomingReservations = [
    { id: 1, date: "2025-03-12", room: "Suíte Master", status: "Confirmed" },
    { id: 2, date: "2025-04-01", room: "Standard Vista Mar", status: "Pending" },
  ];

  const recommendations = [
    "Finalize your check-in data to speed up arrival.",
    "Check our spa packages with 15% discount for guests.",
    "Enable notifications to receive updates about your stay.",
  ];

  return (
    <div className="client-dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Client Dashboard</h1>
          <p>Your reservations, profile and quick actions in one place.</p>
        </div>
        <button className="btn btn-primary">New reservation</button>
      </header>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Upcoming reservations</h2>

          {upcomingReservations.length === 0 ? (
            <p className="dashboard-empty">
              You don&apos;t have reservations yet.
            </p>
          ) : (
            <ul className="reservation-list">
              {upcomingReservations.map((res) => (
                <li key={res.id}>
                  <div>
                    <strong>{res.room}</strong>
                    <span>{res.date}</span>
                  </div>
                  <span className={`reservation-status status-${res.status.toLowerCase()}`}>
                    {res.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dashboard-card">
          <h2>Profile summary</h2>
          <p className="profile-summary">
            Keep your data up to date to have a better experience in your next
            stays.
          </p>
          <ul className="profile-info">
            <li>
              <span>Name</span>
              <strong>Guest Example</strong>
            </li>
            <li>
              <span>Email</span>
              <strong>guest@example.com</strong>
            </li>
            <li>
              <span>Member since</span>
              <strong>2024</strong>
            </li>
          </ul>
          <button className="btn btn-secondary profile-button">
            Edit profile
          </button>
        </div>

        <div className="dashboard-card dashboard-card-full">
          <h2>Tips and suggestions</h2>
          <ul className="tips-list">
            {recommendations.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}