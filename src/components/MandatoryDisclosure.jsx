import React from "react";
import "./MandatoryDisclosure.css";

/* =========================================
   BASIC SCHOOL INFORMATION
========================================= */

const schoolInformation = [
  {
    id: 1,
    label: "Name of the School",
    value: "Gyaneshwar Public School",
  },
  {
    id: 2,
    label: "Address",
    value: "Anugrah nagar, Baluahi, Mohiuddinagar ,samastipur Pin-848501",
  },
  {
    id: 3,
    label: "Principal Name",
    value: "Sanjay kumar singh",
  },
  {
    id: 4,
    label: "Principal Qualification",
    value: "M.A., B.Ed",
  },
  {
    id: 5,
    label: "School Email ID",
    value: "gyaneshwarniket@gmail.com",
  },
  {
    id: 6,
    label: "Manager Name",
    value: "Manager Name",
  },
  {
    id: 7,
    label: "Contact Number",
    value: "+91 9199733237",
  },
  {
    id: 8,
    label: "School Website",
    value: "http://mgyaneshwar.in/",
  },
];

/* =========================================
   DOCUMENTS
========================================= */

const documents = [
  {
    id: 1,
    title: "Societies/Trust/Company Registration Certificate",
    link: "/documents/registration-certificate.pdf",
  },
  {
    id: 2,
    title: "No Objection Certificate",
    link: "/documents/noc.pdf",
  },
  {
    id: 3,
    title: "Non Proprietary Affidavit",
    link: "/documents/non-proprietary-affidavit.pdf",
  },
  {
    id: 4,
    title: "Recognition Certificate under RTE",
    link: "/documents/recognition-certificate.pdf",
  },
  {
    id: 5,
    title: "Land Certificate",
    link: "/documents/land-certificate.pdf",
  },
  {
    id: 6,
    title: "Lease Deed",
    link: "/documents/lease-deed.pdf",
  },
  {
    id: 7,
    title: "Building Certificate",
    link: "/documents/building-certificate.pdf",
  },
  {
    id: 8,
    title: "Fire Safety Certificate",
    link: "/documents/fire-safety.pdf",
  },
  {
    id: 9,
    title: "Water Health Sanitation Certificate",
    link: "/documents/water-health-sanitation.pdf",
  },
  {
    id: 10,
    title: "Fee Structure of School",
    link: "/documents/fee-structure.pdf",
  },
  {
    id: 11,
    title: "Annual Academic Calendar",
    link: "/documents/academic-calendar.pdf",
  },
  {
    id: 12,
    title: "School Managing Committee (SMC)",
    link: "/documents/smc.pdf",
  },
  {
    id: 13,
    title: "Parents Teacher Association (PTA)",
    link: "/documents/pta.pdf",
  },
  {
    id: 14,
    title: "Balance Sheet",
    link: "/documents/balance-sheet.pdf",
  },
  {
    id: 15,
    title: "School Infrastructure",
    link: "/documents/school-infrastructure.pdf",
  },
  {
    id: 16,
    title: "Teachers Details",
    link: "/documents/teachers-details.pdf",
  },
  {
    id: 17,
    title: "Students Details",
    link: "/documents/students-details.pdf",
  },
];

/* =========================================
   VIDEOS
========================================= */

const videos = [
  {
    id: 1,
    title: "School Campus Video",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    title: "List of Youtube Videos",
    link: "https://www.youtube.com/",
  },
];

/* =========================================
   STAFF - TEACHING
========================================= */

const teachingStaff = [
  {
    id: 1,
    information: "Principal",
    details: "1",
  },
  {
    id: 2,
    information: "Total Number of Teachers",
    details: "",
  },
  {
    id: 3,
    information: "PGT",
    details: "",
  },
  {
    id: 4,
    information: "TGT",
    details: "",
  },
  {
    id: 5,
    information: "PRT",
    details: "8",
  },
  {
    id: 6,
    information: "NTT",
    details: "",
  },
  {
    id: 7,
    information: "Teachers Section Ratio",
    details: "",
  },
];

/* =========================================
   RESULT CLASS X
========================================= */

const resultClass10 = [
  {
    id: 1,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 2,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 3,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 4,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 5,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
];

/* =========================================
   RESULT CLASS XII
========================================= */

const resultClass12 = [
  {
    id: 1,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 2,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 3,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 4,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
  {
    id: 5,
    year: "",
    registered: "",
    passed: "",
    percentage: "",
    remarks: "",
  },
];

/* =========================================
   SCHOOL INFRASTRUCTURE
========================================= */

const schoolInfrastructure = [
  {
    id: 1,
    information: "Total Campus Area of the School (in sq mtr)",
    details: "",
  },
  {
    id: 2,
    information: "No. of the Class Rooms",
    details: "",
  },
  {
    id: 3,
    information: "Internet Facility",
    details: "Available",
  },
  {
    id: 4,
    information: "No. of Girls Toilets",
    details: "",
  },
  {
    id: 5,
    information: "No. of Boys Toilets",
    details: "",
  },
];

/* =========================================
   COMPONENT
========================================= */

function MandatoryDisclosure() {
  return (
    <main className="mandatory-page">
      <div className="mandatory-container">
        {/* =================================
            TOP LINE
        ================================= */}

        <div className="disclosure-top-line"></div>

        {/* =================================
            PAGE HEADING
        ================================= */}

        <section className="disclosure-heading">
          <span className="heading-pill"></span>

          <h1>Mandatory Disclosure</h1>

          <p>
            Transparency and compliance are our priorities. Below are the
            important school documents and disclosures.
          </p>
        </section>

        {/* =================================
            BASIC INFORMATION
        ================================= */}

        <section className="school-info-section">
          <h2 className="table-section-title">BASIC INFORMATION</h2>

          <div className="school-info-table">
            {schoolInformation.map((item) => (
              <div className="school-info-row" key={item.id}>
                <div className="info-number">{item.id}</div>

                <div className="info-label">{item.label}</div>

                <div className="info-value">
                  {item.label === "School Website" ? (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================
            DOCUMENTS
        ================================= */}

        <section className="documents-section">
          <h2 className="table-section-title">DOCUMENTS</h2>

          <div className="documents-grid">
            {documents.map((document) => (
              <div className="document-card" key={document.id}>
                <span className="document-title">{document.title}</span>

                <a
                  href={document.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View
                </a>
              </div>
            ))}

            {/* Videos */}

            {videos.map((video) => (
              <div
                className="document-card video-document-card"
                key={`video-${video.id}`}
              >
                <span className="document-title">{video.title}</span>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button video-button"
                >
                  Watch
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* =================================
            ADDITIONAL DISCLOSURE TABLES
        ================================= */}

        <section className="additional-disclosure-section">
          {/* =================================
              STAFF TEACHING
          ================================= */}

          <div className="disclosure-table-block">
            <h2 className="table-section-title">D: STAFF (TEACHING)</h2>

            <div className="responsive-table">
              <table className="disclosure-table">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Information</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody>
                  {teachingStaff.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>

                      <td>{item.information}</td>

                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* =================================
              RESULT CLASS X
          ================================= */}

          <div className="disclosure-table-block">
            <h2 className="table-section-title">RESULT CLASS: X</h2>

            <div className="responsive-table">
              <table className="disclosure-table result-table">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Year</th>
                    <th>No. of Registered Students</th>
                    <th>No. of Students Passed</th>
                    <th>Pass Percentage</th>
                    <th>Remarks</th>
                  </tr>
                </thead>

                <tbody>
                  {resultClass10.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>

                      <td>{item.year}</td>

                      <td>{item.registered}</td>

                      <td>{item.passed}</td>

                      <td>{item.percentage}</td>

                      <td>{item.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* =================================
              RESULT CLASS XII
          ================================= */}

          <div className="disclosure-table-block">
            <h2 className="table-section-title">RESULT CLASS: XII</h2>

            <div className="responsive-table">
              <table className="disclosure-table result-table">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Year</th>
                    <th>No. of Registered Students</th>
                    <th>No. of Students Passed</th>
                    <th>Pass Percentage</th>
                    <th>Remarks</th>
                  </tr>
                </thead>

                <tbody>
                  {resultClass12.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>

                      <td>{item.year}</td>

                      <td>{item.registered}</td>

                      <td>{item.passed}</td>

                      <td>{item.percentage}</td>

                      <td>{item.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* =================================
              SCHOOL INFRASTRUCTURE
          ================================= */}

          <div className="disclosure-table-block">
            <h2 className="table-section-title">E: SCHOOL INFRASTRUCTURE</h2>

            <div className="responsive-table">
              <table className="disclosure-table">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Information</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody>
                  {schoolInfrastructure.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>

                      <td>{item.information}</td>

                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MandatoryDisclosure;
