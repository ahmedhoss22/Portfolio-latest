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
    imgSrc: "images/portfolio-07.png",
    imgAlt: "Bookify Admin Dashboard",
    category: "Dashboard",
    title: "Bookify Admin Dashboard",
    delay: 100,
    modalTarget: "#exampleModalCenter",
    description: "Developed Bookify Admin Dashboard using ASP.NET Core MVC with clean architecture and repository pattern. Managed Ajax requests and DataTables, integrated WhatsApp and Gmail, and deployed to Monster Aspnet hosting with Hangfire for background jobs. Utilized Serilog for error handling, Fluent Validation, and various libraries for enhanced functionality.",
    projectLink: "http://bookifyapplication.runasp.net/",
    projectEmail: "admin@bookify.com",
    projectPassword: "P@ssword123"
  },
  {
    imgSrc: "images/portfolio-13.png",
    imgAlt: "Furnihuture",
    category: "Development",
    title: "Furnihuture",
    delay: 500,
    modalTarget: "#exampleModalCenter7",
    description: "Description for Furnihuture project.",
    projectLink: "#",
    projectEmail: "example@example.com",
    projectPassword: "password123"
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
              <a href="javascript:void(0)">${project.title} <i class="feather-arrow-up-right"></i></a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  `;
});

// You may need to handle the modal content dynamically as well, similar to how the portfolio items are generated.









console.log(expSection);
