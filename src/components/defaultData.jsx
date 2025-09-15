
const defaultData = {
  basicInfo: {
    name: "Elvin Tyagi",
    email: "elvin.tgi@gmail.com",
    phone: "+351932299974",
    location: "Lisbon, Portugal",
    github: "https://github.com/ELE-00",
    linkedin: "https://www.linkedin.com/in/elvintyagi/",
    summary: "Full stack developer with skills in Python, JavaScript, SQL, HTML, React Native, React and Node.js. Experienced in database management (PostgreSQL, SQL, DBeaver), data visualization (Metabase, Apache Spark), and UX/UI design (Adobe Suite (Ps, Lr, Ai), Figma)."
  },
  work: [
    {
    id: 1,
    company: "Boomerang", 
    position: "Full Stack Developer | Partner", 
    description: `●  Revamping our website using Webflow — refining layout, performance, and user experience.
●  Developing Raver's Diary, a mobile app for managing and tracking festivals.
●  Managed app architecture, UX/UI design, database management, and API integrations.
●  Financial management and budgeting for sustainable growth.
●  Created marketing content using Photoshop, Illustrator, Figma, and DaVinci Resolve.`,
    fromDate: "May 2024", 
    untilDate: "Present", 
    location: "Lisbon, Remote"

    },
    {
    id: 2,
    company: "Hitachi Astemo", 
    position: "Financial Data Analyst", 
    description: `●  Designed and deployed custom Excel VBA macros and functions to automate financial workflows
●  Built VBA macro directly integrated with financial ERP system and posting transactions data automatically, reducing
workload and saving time by 83%
●  Data parsing and transformation using Excel
●  Analyzing and reconciling customer accounts and transactions, ensuring data accuracy`,
    fromDate: "Nov. 2023", 
    untilDate: "Present", 
    location: "Lisbon, Hybrid"
    },
    {
    id: 3,
    company: "Unitbridge Ltd", 
    position: "Web Developer", 
    description: `●  Developed corporate website (Wordpress, CSS, HTML)`,
    fromDate: "May 2023", 
    untilDate: "Jun 2023", 
    location: "Lisbon, Remote"
    },
    {
    id: 4,
    company: "TIMWETECH", 
    position: "Financial Data Analyst", 
    description: `●  Accounts Payable.
`,
    fromDate: "Jun. 2023", 
    untilDate: "Nov. 2023", 
    location: "Lisbon, Hybrid"
    },
    {
    id: 5,
    company: "Air Liquide", 
    position: "Financial Data Analyst", 
    description: `●  Migration of finance activities from South Africa to Portugal.
●  Implemented business improvements using Excel Macros and Google Apps Script (JavaScript).`,
    fromDate: "Jun. 2021", 
    untilDate: "Jun. 2023", 
    location: "Lisbon, Hybrid"
    },
    {
    id: 6,
    company: "Mittelstand Analytica", 
    position: "Data Analyst", 
    description: `●  Analyzing (PostgreSQL) and visualizing (Redash/Metabase) international trade statistics for easier data-driven
decision-making.
●  Experience with both ETL and ELT pipeline processes, categorical data, relational databases, open-source data
visualization tools, statistical analysis, exploratory and explanatory data analysis.`,
    fromDate: "Jan. 2021", 
    untilDate: "Sep. 2021", 
    location: "Moscow, Remote"
    },

    ],
    education: [
    { school: "Vatel Switzerland", degree: "- Bachelor’s Degree in Hospitality Administration/Management ", date: "2021 - 2025" },

    ],
    certifications: [
    { id: 1, certification:  "Prof. Data Analysis in Python (DataCamp)" },
    { id: 2, certification: "Full Stack Web Development (The Odin Project)" },
        
    ],
    languages: [
    { id: 1, language: "English" },
    { id: 2, language: "Portuguese" },
    { id: 3, language: "French" },
    { id: 4, language: "Russian" },
    { id: 5, language: "Ukrainian" }

    ],
};

export default defaultData;