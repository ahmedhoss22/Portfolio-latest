let expSection = document.getElementById("experience-section")
let exp = [
  {
    title: "Full stack developer",
    company: " Growxcel ",
    companyPeriod: "(April 2024 - present)",
    companyLink: "https://www.linkedin.com/company/growxcel/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BXxLVvAVMT62ZACs55h%2FYVg%3D%3D",
    desc: "At Groxcel, I developed an ERP system using Nest.js, React.js, and SQL Server to manage the entire stocking cycle, including purchase orders, receive orders, issue transfers, issue returns, and return damages. This comprehensive system handles all aspects of store and stocking management, optimizing the cost of manufacturing and stocking. My role involved designing, implementing, and maintaining this system to ensure efficient and cost-effective operations within the company's supply chain."
  },
  {
    title: "Full stack developer",
    company: " Al-Theqaa trading ",
    companyPeriod: "(May 2024 - Jul 2024)",
    companyLink: "https://www.linkedin.com/company/theqahsa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B5Eqbk5DcQyWlsfF2hss1iA%3D%3D",
    desc: "At Al-Theqaa trading company, I developed microservices using Node.js and React.js for an API managing embedded devices that recognize students in school, handle balance recharges, and process payments. We created a user-friendly interface for staff interaction and ensured seamless backend communication with the embedded API. My work focused on designing, implementing, and maintaining these systems to enhance operational efficiency and provide a smooth user experience for school staff and students."
  },
]


// display Experience
exp.map((ele) => {
  expSection.innerHTML += `
       <div class="resume-single-list mt--30">
        <div class="inner psudo-after-none">
          <div class="heading">
            <div class="title">
              <h4>${ele.title}</h4>
              <span
                >In &nbsp;
                <a
                  href="${ele.companyLink}"
                >
                  ${ele.company} &nbsp;</a
                >
                company ${ele.companyPeriod} </span
              >
            </div>
          </div>
          <p class="description"> ${ele.desc}</p>
        </div>
      </div>
  `
})









// Define projects array
let projects = [
  {
    id: 1,
    imgSrc: "images/mockups/vej-store.png",
    imgAlt: "vej-store",
    category: "E-commerce",
    title: "Vej-store",
    delay: 100,
    modalTarget: "#modal1",
    projectLink: "https://vej-store.com/",
    // projectEmail: "admin@bookify.com",
    // projectPassword: "P@ssword123"
  },
  {
    imgSrc: "images/mockups/ahmed-galal.png",
    imgAlt: "Ahmed galal clinic",
    category: "Clinic-reservation",
    title: "Ahmed galal clinic",
    delay: 500,
    modalTarget: "#modal2",
    description: "Description for Ahmed galal clinic project.",
    projectLink: "#",
    // projectEmail: "example@example.com",
    // projectPassword: "password123"
  },
  {
    imgSrc: "images/mockups/sedra-fatma.JPG",
    imgAlt: "",
    category: "Online Booking",
    title: "Sedrat fatima",
    delay: 500,
    modalTarget: "#modal5",
    description: "Description for Online academy project.",
    projectLink: "http://sedratfatima.com/",
    // projectEmail: "example@example.com",
    // projectPassword: "password123"
  },
  {
    imgSrc: "images/mockups/xo.png",
    imgAlt: "Match-xo",
    category: "Online game",
    title: "Match-xo",
    delay: 500,
    modalTarget: "#modal3",
    description: "Description for Match-xo project.",
    projectLink: "#",
    // projectEmail: "example@example.com",
    // projectPassword: "password123"
  },
  {
    imgSrc: "images/mockups/educational-academy.JPG",
    imgAlt: "Online academy",
    category: "E-learning",
    title: "Online academy",
    delay: 500,
    modalTarget: "#modal4",
    description: "Description for Online academy project.",
    projectLink: "#",
    // projectEmail: "example@example.com",
    // projectPassword: "password123"
  },

  // Add more projects as needed
];

// Get the container element
let portfolioSection = document.getElementById("portfolio");

// Generate portfolio items dynamically
projects.map((project, index) => {
  portfolioSection.innerHTML += `
    <div data-aos="fade-up" data-aos-delay="${project.delay}" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-6 mt--30 mt_md--30 mt_sm--30">
      <div class="rn-portfolio" data-bs-toggle="modal" data-bs-target="${project.modalTarget}">
        <div class="inner">
          <div class="thumbnail">
            <a href="javascript:void(0)" height="100px">
              <img src="${project.imgSrc}" alt="${project.imgAlt}" style="height: 190px; object-fit: fill"/>
            </a>
          </div>
          <div class="content">
            <div class="category-info">
              <div class="category-list">
                <a href="javascript:void(0)">${project.category}</a>
              </div>
            </div>
            <h4 class="title">
              <a>${project.title} <i class="feather-arrow-up-right"></i></a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  `;
});

function navigateUSer(route) {
  window.open(route)
}
// You may need to handle the modal content dynamically as well, similar to how the portfolio items are generated.









const modalsData = [
  {
    id: "modal1",
    images: [
      "images/vej-store/home.png",
      "images/vej-store/hodie.png",
    ],
    title: "vej-store",
    description: `The project is a modern WordPress-based e-commerce store specializing in clothing, offering a seamless shopping experience with diverse categories, product customization options, and Arabic support. It features easy order management, multiple payment methods, and precise delivery details. The store is fully responsive, optimized for speed, and ensures data security.`,
    projectLink: "https://vej-store.com/",
  },
  {
    id: "modal2",
    images: [
      "images/ahmed galal/home.png",
      "images/ahmed galal/contact.png",
      "images/ahmed galal/reservations.png",
    ],
    title: "Ahmed galal clinic",
    description: `The Internal Medicine Clinic Management System is a web app tailored for small to medium-sized clinics, helping doctors efficiently manage appointments, patient interactions, and schedules. It includes features like electronic booking, patient records, appointment reminders, and a blog for publishing medical awareness articles. Built with React.js, Node.js, and PostgreSQL, the system offers a user-friendly interface, automated notifications, and insightful reports to enhance clinic operations.`,
    projectLink: "https://drahmedgalalcenter.com/",
  },
  {
    id: "modal3",
    images: [
      "images/xo/1.png",
      "images/xo/2.png",
      "images/xo/3.png",
    ],
    title: "Match-xo",
    description: `The X-O Game is an engaging online multiplayer game where players compete against friends or challenge random opponents worldwide. Built using Next.js and Nest.js with WebSockets integration, it ensures a seamless real-time gaming experience. Players can earn coins through victories, purchase more coins, and exchange them for in-game rewards, all within an interactive and user-friendly interface.`,
    projectLink: "#",
  },
  {
    id: "modal4",
    images: [
      "images/sef/Home.png",
      "images/sef/cv.png",
      "images/sef/courses.png",
      "images/sef/instructor.png",
    ],
    title: "Educational Academy",
    description: `The integrated educational platform offers comprehensive learning opportunities, featuring four user roles: Admin, Teacher, Student, and Editor. Built with React.js, Node.js (Express.js), and MongoDB, it uses JWT for authentication and is deployed via Docker and AWS EC2. Key features include user and course management for Admins, content creation and exam scheduling for Teachers, course access and job applications for Students, and news and job posting for Editors, all within a Material-UI-styled interface.`,
    projectLink: "#",
  },
  {
    id: "modal5",
    images: [
      "images/fatma/1.png",
      "images/fatma/2.png",
      "images/fatma/3.png",
      "images/fatma/4.png",
    ],
    title: "Sedrat fatima",
    description: `A comprehensive booking system for wedding halls, chalets, and resorts, developed with React and Node.js. The platform allows users to make and manage bookings seamlessly. The admin panel provides tools for approving, postponing, or managing reservations, along with financial system controls. It also features an integrated ERP system for efficient employee management. Designed for scalability and user-friendly operation, it ensures smooth management of all booking and operational processes.`,
    projectLink: "#",
  },

];

function generateModals(data) {
  const container = document.getElementById("modals-container");

  data.forEach(({ id, images, title, description, projectLink, projectEmail, projectPassword }) => {
    const indicators = images
      .map(
        (img, index) => `
          <button
            type="button"
            data-bs-target="#${id}-carousel"
            data-bs-slide-to="${index}"
            class="${index === 0 ? "active" : ""}"
            aria-current="${index === 0 ? "true" : "false"}"
            aria-label="Slide ${index + 1}"
          ></button>`
      )
      .join("");

    const slides = images
      .map(
        (img, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img class="w-100 h-100" src="${img}" alt="slide ${index + 1}">
          </div>`
      )
      .join("");

    const modalHTML = `
      <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"><i data-feather="x"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="portfolio-popup-thumbnail">
                    <div class="image">
                      <div id="${id}-carousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          ${indicators}
                        </div>
                        <div class="carousel-inner">
                          ${slides}
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#${id}-carousel"
                          data-bs-slide="prev"
                        >
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#${id}-carousel"
                          data-bs-slide="next"
                        >
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-content">
                    <h3><span>${title}</span></h3>
                    <p class="mb--30">${description}</p>
                    <div class="button-group mt--20">
                      <a href="${projectLink}" target="_blank" class="rn-btn">
                        <span>${projectLink != "#" ? "VIEW PROJECT" : "Not availabe now"}</span>
                        <i data-feather="chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    container.innerHTML += modalHTML;
  });
}

// Call the function to generate modals
generateModals(modalsData);
