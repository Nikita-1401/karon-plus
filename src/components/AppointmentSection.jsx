import "./AppointmentSection.css";

const AppointmentSection = () => {
  return (
    <section className="appointment-wrapper" id="appointment">

      {/* SECTION SEPARATOR */}
      <div className="appointment-separator">
        <span></span>
      </div>

      {/* MAIN BANNER */}
      <div className="appointment-section">
        <div className="appointment-overlay"></div>

        <div className="appointment-content">

          <div className="appointment-line">
            <span></span>
            <p>PERSONAL STYLING • KARON PLUS</p>
          </div>

          <h2>
            Find Your
            <br />
            <em>Perfect Fit.</em>
          </h2>

          <p className="appointment-description">
            From everyday essentials to important occasions, discover shirts
            selected around your style, comfort and preference.
          </p>

          <div className="appointment-buttons">
            <a href="#contact" className="appointment-primary">
              BOOK IN-STORE
              <span>↗</span>
            </a>

            <a href="#contact" className="appointment-secondary">
              VIRTUAL CONSULTATION
              <span>↗</span>
            </a>
          </div>

          <div className="appointment-details">
            <div>
              <span>01</span>
              <p>Personal Styling</p>
            </div>

            <div>
              <span>02</span>
              <p>Perfect Fit</p>
            </div>

            <div>
              <span>03</span>
              <p>Premium Experience</p>
            </div>
          </div>
        </div>

        <div className="appointment-signature">
          <p>Style, personally yours.</p>
          <span>KARON PLUS</span>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;