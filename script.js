const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const hamburgerIcon = openMenu.querySelector('.fa-bars');
const closeIcon = openMenu.querySelector('.fa-times');

function show() {
  mainMenu.style.display = 'flex';
  openMenu.classList.add('active');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
}

function close() {
  mainMenu.style.display = 'none';
  openMenu.classList.remove('active');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

openMenu.addEventListener('click', show);
mainMenu.addEventListener('click', close);

const homeSection = document.getElementById('home');

const hiThereHeading = document.createElement('h5');
hiThereHeading.textContent = 'HI THERE!';
homeSection.appendChild(hiThereHeading);

const nameHeading = document.createElement('h5');
nameHeading.textContent = 'I\'M ZAINAB BEHZAD';
homeSection.appendChild(nameHeading);

const webDeveloperHeading = document.createElement('h5');
const webDeveloperSpan = document.createElement('span');
webDeveloperSpan.textContent = 'WEB DEVELOPER';
webDeveloperHeading.appendChild(webDeveloperSpan);
webDeveloperHeading.classList.add('web-developer-heading');
homeSection.appendChild(webDeveloperHeading);

const hireMeButton = document.createElement('button');
hireMeButton.classList.add('hire-me-button');
hireMeButton.textContent = 'Hire Me';

hireMeButton.addEventListener('click', () => {
  window.open('images/Zainab Behzad _ resume (1).pdf', '_blank');
});

hireMeButton.addEventListener('mouseenter', () => {
  hireMeButton.style.backgroundColor = '#E9E9E9';
  hireMeButton.style.color = '#000000';
});

hireMeButton.addEventListener('mouseleave', () => {
  hireMeButton.style.backgroundColor = '#175089';
  hireMeButton.style.color = '#000000';
  hireMeButton.style.border = '1px solid #175089';
});

homeSection.appendChild(hireMeButton);

const aboutSection = document.getElementById('about');
const moreAboutMeButton = document.createElement('button');
moreAboutMeButton.classList.add('about-me-button');
moreAboutMeButton.textContent = 'ABOUT ME';
aboutSection.appendChild(moreAboutMeButton);

const hr = document.createElement('hr');
aboutSection.appendChild(hr);

const moreAboutMeContainer = document.createElement('div');
moreAboutMeContainer.classList.add('more-about-me-container');
moreAboutMeContainer.style.display = 'none';
aboutSection.appendChild(moreAboutMeContainer);

const moreAboutMeText = document.createElement('p');
moreAboutMeText.classList.add('more-about-me-text');
moreAboutMeText.innerHTML = `
<strong>Hi, I'm Zainab Behzad!</strong> I'm a passionate front-end web developer with a strong background in creating clean, responsive, and interactive web experiences.<br>

Ever since I was a child, I've been fascinated by the world of technology and the endless possibilities it presents. This led me to pursue a degree in Computer Science, where I honed my skills in programming, problem-solving, and design.<br>

During my studies, I discovered a particular love for front-end development. I find immense joy in crafting visually stunning interfaces, bringing them to life with smooth animations and intuitive user interactions. My goal is to create websites and web applications that not only look great but also provide a seamless and enjoyable user experience.<br>
`;
moreAboutMeContainer.appendChild(moreAboutMeText);

const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.textContent = 'Close';

closeButton.addEventListener('click', () => {
  moreAboutMeContainer.style.display = 'none';
});

moreAboutMeContainer.appendChild(closeButton);

moreAboutMeButton.addEventListener('click', () => {
  moreAboutMeContainer.style.display = 'block';
  moreAboutMeContainer.style.position = 'fixed';
  moreAboutMeContainer.style.top = '50%';
  moreAboutMeContainer.style.left = '50%';
  moreAboutMeContainer.style.transform = 'translate(-50%, -50%)';
  moreAboutMeContainer.style.width = '60%';
  moreAboutMeContainer.style.maxHeight = 'auto';
  moreAboutMeContainer.style.backgroundColor = '#f5f5f5';
  moreAboutMeContainer.style.padding = '2rem';
  moreAboutMeContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.9)';
});

const certificateData = [{
  title: 'Responsive Web Design "html, CSS"',
  date: 'June 1, 2024',
  link: 'https://www.freecodecamp.org/certification/zainabbehzad/responsive-web-design',
  image: 'images/Responsive Web Design certificate.png.png',
},
{
  title: 'JS Algorithms and Data Structures',
  date: 'July 11, 2024',
  link: 'https://www.freecodecamp.org/certification/zainabbehzad/javascript-algorithms-and-data-structures-v8',
  image: 'images/JS certificate.png.png',
},
];

function createCertificatesSection() {
  const certificatesSection = document.getElementById('certificatesSection');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('certificates-section');

  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Certifications';
  sectionElement.appendChild(titleElement);

  const certificatesContainer = document.createElement('div');
  certificatesContainer.classList.add('certificates-container');
  sectionElement.appendChild(certificatesContainer);

  certificateData.forEach((certificate) => {
    const certificateElement = document.createElement('div');
    certificateElement.classList.add('certificate');

    const titleElement = document.createElement('h6');
    titleElement.textContent = certificate.title;
    certificateElement.appendChild(titleElement);
    const dateElement = document.createElement('p');
    dateElement.textContent = certificate.date;
    certificateElement.appendChild(dateElement);

    const linkElement = document.createElement('a');
    linkElement.href = certificate.link;
    linkElement.target = '_blank';

    const imageElement = document.createElement('img');
    imageElement.src = certificate.image;
    imageElement.alt = 'Certificate';
    linkElement.appendChild(imageElement);
    certificateElement.appendChild(linkElement);

    certificatesContainer.appendChild(certificateElement);

    linkElement.addEventListener('click', () => {
      showCertificateModal(certificate);
    });
  });

  const resumeButton = document.createElement('button');
  resumeButton.classList.add('resume-button');
  resumeButton.textContent = 'Download my resume';
  sectionElement.appendChild(resumeButton);

  certificatesSection.appendChild(sectionElement);
}

function showCertificateModal(certificate) {
  const modal = document.getElementById('certificateModal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';

  const titleElement = document.createElement('h2');
  titleElement.textContent = certificate.title;
  modalContent.appendChild(titleElement);

  const dateElement = document.createElement('p');
  dateElement.textContent = certificate.date;
  modalContent.appendChild(dateElement);

  const linkElement = document.createElement('a');
  linkElement.href = certificate.link;
  linkElement.target = '_blank';

  const imageElement = document.createElement('img');
  imageElement.src = certificate.image;
  imageElement.alt = 'Certificate';
  imageElement.style.maxWidth = '100%';
  imageElement.style.height = 'auto';
  linkElement.appendChild(imageElement);
  modalContent.appendChild(linkElement);

  modal.style.display = 'block';

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

createCertificatesSection();

function showDescription(item) {
  const span = item.querySelector('span');
  const h3 = item.querySelector('h3');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-object');

  const spanElement = document.createElement('span');
  spanElement.textContent = span.textContent;
  const h3Element = document.createElement('h3');
  h3Element.textContent = h3.textContent;
  modalContent.appendChild(spanElement);
  modalContent.appendChild(h3Element);

  if (h3.textContent === 'PROJECTS DONE') {
    const projectLinks = document.createElement('div');
    projectLinks.innerHTML = `
      <a href='https://zainabbehzad.github.io/survey-form/'>Survey Form</a><br>
      <a href='https://zainabbehzad.github.io/Tribute-page/'>Tribute-page</a><br>
      <a href='https://zainabbehzad.github.io/technical-documentation-page/'>technical-documentation-page</a><br>
      <a href='//zainabbehzad.github.io/Product-Landing-Page/'>Product-Landing-Page</a><br>
      <a href='https://zainabbehzad.github.io/personal-portfolio-webpage/'>personal-portfolio-webpage</a><br>
      <a href='https://zainabbehzad.github.io/-Palindrome-Checker/'>Palindrome-Checker</a><br>
      <a href='https://zainabbehzad.github.io/Roman-Numeral-Converter/'>Roman-Numeral-Converter</a><br>
      <a href='https://zainabbehzad.github.io/Telephone-Number-Validator/'>Telephone-Number-Validator</a><br>
      <a href='https://zainabbehzad.github.io/Cash-Register/'>Cash-Register</a><br>
      <a href='https://zainabbehzad.github.io/Pokemon-Search-App/'>Pokemon-Search-App</a><br>  
   `;
    modalContent.appendChild(projectLinks);
  }

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'X';
  closeButton.onclick = function () {
    modal.style.display = 'none';
  };
  modalContent.appendChild(closeButton);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.style.display = 'block';
}

const projects = [{
  title: 'Survey Form',
  image: 'images/survey1.png',
  shortDescription: 'This project is a survey form built using HTML and CSS.',
  longDescription: 'This project is a survey form built using HTML and CSS. The form collects user information, preferences, and feedback through various input fields, dropdown menus, and a textarea. The design is clean and responsive, ensuring a seamless user experiene across different devices.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/survey-form/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/survey-form.git',
  screenshots: ['images/survey1.png'],
},
{
  title: 'Tribute Page Honors',
  image: 'images/Tribute page.png.png',
  shortDescription: 'This tribute page honors the life and legacy of Dr.Norman Borlaug, third from the left, trains biologistsin Mexico on how to increase wheat yields - part of his life-long war on hunger.',
  longDescription: 'This project is a survey form built using HTML and CSS. The form collects user information, preferences, and feedback through various input fields, dropdown menus, and a textarea. The design is clean and responsive, ensuring a seamless user experience across different devices.',
  technologies: ['HTML", "CSS'],
  liveDemoUrl: 'zainabbehzad.github.io/Tribute-page/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Tribute-page.git',
  screenshots: ['images/Tribute1.png', 'images/Tribute2.png'],
},
{
  title: 'Technical-documentation-page',
  image: 'images/Technical Documentation Page.png.png',
  shortDescription: 'Technical Documentation Page is a web page that provides detailed information and instructions about a specific product, services or technology.',
  longDescription: 'Technical Documentation Page is a web page that provides detailed information and instructions about a specific product, services or technology. It is typically aimed at users, developers, or other technical stakeholders who need to understand how a system or application works and how to use it effectively.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/technical-documentation-page/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/technical-documentation-page.git',
  screenshots: ['images/Technical1.png', 'images/Technical2.png', 'images/Technical3.png', 'images/Technical5.png', 'images/Technical6.png', 'images/Technical7.png'],
},
{
  title: 'Product-Landing-Page',
  image: 'images/Product Landing Page.png.png',
  shortDescription: 'Product-Landing-Page This repository contains the code for a responsive product landing page built using HTML and CSS',
  longDescription: 'Product-Landing-Page This repository contains the code for a responsive product landing page built using HTML and CSS. The landing page is designed to showcase a specific product or service in a visually appealing and informative way, highlighting its key features and benefits.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/Product-Landing-Page/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Product-Landing-Page.git',
  screenshots: ['images/product1.png', 'images/product2.png', 'images/product4.png'],
},
{
  title: 'personal-portfolio-webpage',
  image: 'images/Personal Portfolio Web Page.png.png',
  shortDescription: 'A personal portfolio webpage is a website that showcases an individual"s skills, experience, and work samples. It serves as a digital resume and a platform to highlight one"s professional achievements and capabilities.',
  longDescription: 'This personal portfolio webpage is designed to showcase the skills, projects, and achievements of an individual in an engaging and visually appealing manner. The webpage is built using HTML and CSS, providing a clean and responsive layout that highlights the key aspects of the portfolio.The personal portfolio webpage built with HTML and CSS provides a professional and engaging platform for an individual to showcase their skills, projects, and achievements. The clean and responsive design, combined with the strategic use of content and visual elements, creates a memorable and impactful online presence for the portfolio owner.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/personal-portfolio-webpage/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/personal-portfolio-webpage.git',
  screenshots: ['images/portfolio1.png', 'images/portfolio2.png', 'images/portfolio3.png', 'images/portfolio4.png', 'images/portfolio5.png'],
},
{
  title: 'Palindrome Checker',
  image: 'images/Palindrome checker.png.png',
  shortDescription: 'A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward, such as "racecar" or "A man, a plan, a canal: Panama." A palindrome checker is a program or algorithm designed to determine whether a given input is a palindrome or not.',
  longDescription: 'A palindrome checker is a tool or algorithm that can determine whether a given input is a palindrome or not.Palindrome checkers can be implemented in a variety of programming languages and can be used as standalone tools or integrated into larger applications. They can range in complexity from simple, straightforward implementations to more sophisticated, optimized solutions that can handle a wide range of input types and edge cases.Overall, a palindrome checker is a useful tool for a variety of applications, from text analysis and data validation to puzzle solving and beyond.',
  liveDemoUrl: 'https://zainabbehzad.github.io/-Palindrome-Checker/',
  Technologies: ['HTML, CSS'],
  sourceCodeUrl: 'https://github.com/zainabbehzad/-Palindrome-Checker.git',
  screenshots: ['images/palindrome1.png', 'images/palindrome2.png'],
},
{
  title: 'Roman Numeral Converter',
  image: 'images/Roman Numeral Converter.png.png',
  shortDescription: 'The Roman Numeral Converter is built using HTML, CSS, and JavaScript.',
  longDescription: 'The Roman Numeral Converter is built using HTML, CSS, and JavaScript. The JavaScript code contains a function that takes a number as input and returns the corresponding Roman numeral string. This function handles the conversion logic, which involves breaking down the number into its individual digits and then mapping each digit to the appropriate Roman numeral symbol',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/Roman-Numeral-Converter/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Roman-Numeral-Converter.git',
  screenshots: ['images/roman1.png'],
},
{
  title: 'Telephone Number Validator',
  image: 'images/Telephone Number Validator.png.png',
  shortDescription: 'This project is a survey form built using HTML and CSS.',
  longDescription: 'This project is a survey form built using HTML and CSS. The form collects user information, preferences, and feedback through various input fields, dropdown menus, and a textarea. The design is clean and responsive, ensuring a seamless user experience across different devices.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/Telephone-Number-Validator/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Telephone-Number-Validator.git',
  screenshots: ['images/telephone1.png'],
},
{
  title: 'Cash Register',
  image: 'images/cash.png',
  shortDescription: 'A cash register is a device used in retail stores and other businesses to record transactions, calculate change, and facilitate the handling of cash and other forms.',
  longDescription: 'A cash register is a device used in retail stores and other businesses to record transactions, calculate change, and facilitate the handling of cash and other forms of payment.Cash registers can range from simple, manual devices to sophisticated, computerized systems that are integrated with other business management software. The choice of cash register depends on the size and needs of the business, as well as the type of transactions it handles',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/Cash-Register/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Cash-Register.git',
  screenshots: ['images/cash1.png'],
},
{
  title: 'Pokemon Search App',
  image: 'images/Pokemon Search App.png.png',
  shortDescription: 'The Pokemon Search App is a comprehensive mobile application that allows users to quickly search for and learn about various Pokemon from the Pokemon universe. ',
  longDescription: 'The app features a detailed database of all the Pokemon species, with information such as their names, types, abilities, stats, evolutions, and more.Users can search for Pokemon by name, type, or other criteria, and the app will display the relevant details about the selected Pokemon. The app also includes high-quality images and illustrations of each Pokemon to enhance the user experience.In addition to the search functionality, the app provides tools for users to keep track of the Pokemon they have encountered or collected, such as a Pokemon checklist or a Pokedex. Users can also access information about the Pokemon`s strengths, weaknesses, and best strategies for battles.Overall, the Pokemon Search App is a valuable resource for Pokemon fans of all ages, providing a convenient and user-friendly way to explore the vast world of Pokemon.',
  technologies: ['HTML', 'CSS'],
  liveDemoUrl: 'https://zainabbehzad.github.io/Pokemon-Search-App/',
  sourceCodeUrl: 'https://github.com/zainabbehzad/Pokemon-Search-App.git',
  screenshots: ['images/pokemon1.png'],
},
];

const projectsContainer = document.querySelector('.projects');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title');
const popupScreenshots = document.querySelector('.popup-screenshots');
const popupDescription = document.querySelector('.popup-description');
const popupLiveDemo = document.querySelector('.popup-live-demo');
const popupSourceCode = document.querySelector('.popup-source-code');
const popupCloseButton = document.querySelector('.popup-close');

projects.forEach((project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const titleElement = document.createElement('h3');
  titleElement.textContent = project.title;

  const imageElement = document.createElement('img');
  imageElement.src = project.image;
  imageElement.alt = project.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = project.shortDescription;

  const actionsElement = document.createElement('div');
  actionsElement.classList.add('actions');

  const seeMoreLink = document.createElement('a');
  seeMoreLink.textContent = 'See More';
  seeMoreLink.addEventListener('click', () => {
    popupTitle.textContent = project.title;
    popupDescription.textContent = project.longDescription;
    popupLiveDemo.href = project.liveDemoUrl;
    popupSourceCode.href = project.sourceCodeUrl;

    popupScreenshots.innerHTML = '';
    project.screenshots.forEach((screenshot) => {
      const screenshotElement = document.createElement('img');
      screenshotElement.src = screenshot;
      screenshotElement.alt = `${project.title} Screenshot`;
      popupScreenshots.appendChild(screenshotElement);
    });

    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
  });

  actionsElement.appendChild(seeMoreLink);

  projectElement.appendChild(titleElement);
  projectElement.appendChild(imageElement);
  projectElement.appendChild(descriptionElement);
  projectElement.appendChild(actionsElement);

  projectsContainer.appendChild(projectElement);
});

popupCloseButton.addEventListener('click', () => {
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    isValid = false;
  }

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    isValid = false;
    errorMessage.textContent = 'Email must be in lowercase.';
  } else if (!/^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    isValid = false;
    errorMessage.textContent = 'Invalid email address.';
  } else {
    errorMessage.textContent = '';
  }

  return isValid;
}

loadFormData();

nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', function () {
  const currentValue = this.value;
  const newChar = currentValue.charAt(currentValue.length - 1);

  if (newChar !== newChar.toLowerCase()) {
    this.value = currentValue.slice(0, -1) + newChar.toLowerCase();
  }

  saveFormData();
});
messageInput.addEventListener('input', saveFormData);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  } else {
    errorMessage.classList.remove('hidden');
  }
});

function createSocialMediaLinks() {
  const socialLinksContainer = document.createElement('div');
  socialLinksContainer.classList.add('social-links-container');

  const instagramLink = document.createElement('a');
  instagramLink.href = 'https://www.instagram.com/z_behzad_?igsh=a2ZuejVsZGp2a2pt';
  instagramLink.target = '_blank';
  const instagramIcon = document.createElement('i');
  instagramIcon.classList.add('fa-brands', 'fa-instagram');
  instagramLink.appendChild(instagramIcon);
  socialLinksContainer.appendChild(instagramLink);

  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://www.linkedin.com/in/zainab-behzad-3126692b5';
  linkedinLink.target = '_blank';
  const linkedinIcon = document.createElement('i');
  linkedinIcon.classList.add('fa-brands', 'fa-linkedin');
  linkedinLink.appendChild(linkedinIcon);
  socialLinksContainer.appendChild(linkedinLink);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/zainabbehzad';
  githubLink.target = '_blank';
  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fa-brands', 'fa-square-github');
  githubLink.appendChild(githubIcon);
  socialLinksContainer.appendChild(githubLink);

  return socialLinksContainer;
}

const homeSocialLinksContainer = createSocialMediaLinks();
const homeSocialLinksSection = document.getElementById('home-social-links');
homeSocialLinksSection.appendChild(homeSocialLinksContainer);

const footerSocialLinksContainer = createSocialMediaLinks();
const footerSocialLinksSection = document.getElementById('footer-social-links');
footerSocialLinksSection.appendChild(footerSocialLinksContainer);

const contactSocialLinksContainer = createSocialMediaLinks();
const contactSocialLinksSection = document.getElementById('contact-social-links');
contactSocialLinksSection.appendChild(contactSocialLinksContainer);