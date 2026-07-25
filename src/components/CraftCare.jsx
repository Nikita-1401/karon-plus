import "./CraftCare.css";

const promises = [
  {
    number: "01",
    title: "Premium Fabric",
    text: "Carefully selected fabrics chosen for their refined feel, lasting comfort and effortless finish.",
    label: "QUALITY",
  },
  {
    number: "02",
    title: "Perfect Fit",
    text: "Thoughtful tailoring and balanced proportions designed to feel comfortable from morning to evening.",
    label: "FIT",
  },
  {
    number: "03",
    title: "Easy Care",
    text: "Made for modern routines with dependable fabrics that stay polished while remaining easy to maintain.",
    label: "CARE",
  },
];

const CraftCare = () => {
  return (
    <section className="craft-section" id="craft-care">
      <div className="craft-top">
        <div className="craft-heading">
          <div className="craft-eyebrow">
            <span></span>
            <p>THE KARON PROMISE</p>
          </div>

          <h2>
            Crafted to feel right.
            <br />
            <em>Made to stay that way.</em>
          </h2>
        </div>

        <div className="craft-intro">
          <span>OUR STANDARD</span>

          <p>
            From the first touch to the final stitch, every detail is considered
            to bring together comfort, refinement and everyday confidence.
          </p>
        </div>
      </div>

      <div className="craft-grid">
        {promises.map((item) => (
          <article className="craft-card" key={item.number}>
            <div className="craft-card-top">
              <span className="craft-number">{item.number}</span>
              <span className="craft-label">{item.label}</span>
            </div>

            <div className="craft-icon">
              <span></span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <div className="craft-card-bottom">
              <span>KARON PLUS</span>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="craft-footer">
        <p>Considered in every detail.</p>

        <div className="craft-footer-center">
          <span></span>
          <p>QUALITY · COMFORT · CRAFT</p>
          <span></span>
        </div>

        <p>KARON PLUS · EST. 2026</p>
      </div>
    </section>
  );
};

export default CraftCare;