import { btpnTech, coreTech, hashTech } from '../../../lib/Techstack';

export const experiencesContent = [
  {
    title: 'Software Engineer Intern',
    description: (
      <>
        <p>
          As a frontend developer, I built features for the Tenant section of a
          web app, enabling product management, discount creation, and real-time
          orders. I converted Figma designs into interactive pages and developed
          a responsive, data-driven dashboard with export options, ensuring
          smooth GraphQL integration.
        </p>
      </>
    ),
    badge: 'Hash Rekayasa Teknologi · Mar 2024 - Aug 2024',
    techstack: hashTech,
  },
  {
    title:
      'Project-Based Virtual Intern : Frontend Developer Core Initiative x Rakamin Academy',
    description: (
      <>
        <p>
          Having successfully completed the Core Initiative Frontend Project
          Based Internship Program, I developed an eCommerce catalog using data
          fetched from an API. I utilized VueJS for functionality and Vanilla
          CSS for styling the frontend. This experience improved my skills in
          frontend development.
        </p>
      </>
    ),
    badge: 'Core Initiative Studio · Feb 2024 - Feb 2024',
    techstack: coreTech,
  },
  {
    title:
      'Project-Based Virtual Intern : Fullstack Developer BTPN Syariah x Rakamin Academy',
    description: (
      <>
        <p>
          I worked as a full-stack developer, responsible for creating and
          maintaining web applications. Here I learned the basics of Vue.js,
          Java, and Golang. I successfully created an API using Golang to enable
          user login and the ability to store photo URLs. Only the user who
          uploads the photo has the privilege to modify or delete it.
        </p>
      </>
    ),
    badge: 'BTPN Syariah · Dec 2023 - Dec 2023',
    techstack: btpnTech,
  },
];
