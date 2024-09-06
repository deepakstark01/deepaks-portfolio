import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Deepak Gautam",
  initials: "DG",
  url: "https://deepaks.engineer",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on linkedin",
  summary:
    "Data Scientist with extensive experience in applying Python, Machine Learning, and Web Scraping to deliver impactful data-driven solutions across various industries. Proven track record as Data Engineer at Automartz, where  I  developed and deployed scalable data pipelines and APIs using technologies such as Pandas, NumPy, Fast API, Flask, Cheerio, JavaScript, React.js, SQL, and NoSQL. Adept at translating complex business requirements into actionable insights, and always open to collaborations and opportunities to contribute to innovative data solutions.",
  avatarUrl: "/me.png",
  skills: [
    "SQL",
    "S3",
    "NoSQL",
    "React.js",
    "API testing",
    "FLASK API",
    "Extraction Transformation and Loading (ETL)",
    "Data Analysis",
    "Docker",
    "Data Scraping",
    "Machine Learning (ML)",
    "Android app development",
    "Python",
    "JavaScript",
    "C#",
    "C++",
    "Java",
    "Kotlin"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohit45deepak@gmail.com",
    tel: "+917460021388",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/deepakstark01",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepakstark01/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SkipperArjun",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/deepak-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "rezonanz.io",
      href: "https://rezonanz.io",
      location: "Remote freelance",
      title: "Junior Data Scientist ",
      logoUrl: "https://rezonanz.io/i/rezonanzlogotypehorizontalmeadowrgb.png", // Placeholder for logo URL
      start: "11/2023",
      end: "Present",
      description: "Utilize Python, Pandas, and NumPy for data extraction, transformation, and loading. Build AWS S3 bucket storing data and implement for analysis work with testing and write test cases.",
      badges: [] // Placeholder for any badges or recognitions
    },
    {
      company: "Automartz Private Limited",
      href: "https://automartz.com",
      location: "Ramesh Nagar, Delhi",
      title: "Data Science",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFWTsX9NrKBIQ/company-logo_200_200/company-logo_200_200/0/1692182857320/automartz_logo?e=1733961600&v=beta&t=9TgAVwmhdjdRuRr1o-Cv9N7b4eQAHrqOPrde7XDik24", // Placeholder for logo URL
      start: "06/2023",
      end: "12/2023",
      description: "Improved user engagement by extracting actionable insights from website and app data. Developed Flask APIs including a GST Validator.",
      badges: [] // Placeholder for any badges or recognitions
    },
 
    {
      company: "Acxiom Consulting Private Limited",
      href: "https://acxiom.com",
      location: "Noida",
      title: "Technical Consultant",
      logoUrl: "https://iili.io/dvNcDAP.md.png", // Placeholder for logo URL
      start: "02/2023",
      end: "12/2023",
      description: "Assisted with the development and testing of Android and IOS apps. Implemented SAP and Microsoft ERP solutions.",
      badges: [] // Placeholder for any badges or recognitions
    },
    {
      company: "Freelancing",
      href: "https://upwork.com",
      location: "Remote",
      title: "PYTHON DEVELOPER",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQCOBTF2iyS7purTTRlbxQbDfr4c-ruqPLA&s", // Placeholder for logo URL
      start: "04/2018",
      end: "12/2023",
      description: "Provided freelance services globally through platforms like Fiverr and Upwork. Managed software projects and developed code for client projects.",
      badges: [] // Placeholder for any badges or recognitions
    }

  ],
  education: [
    {
      school: "ITS Engineering College",
      href: "https://itsengg.edu.in", // Adjust the URL if needed
      degree: "CSE", // Specify the degree if applicable or just keep 'CSE' if that's the complete title
      logoUrl: "https://itsengg.edu.in/images/its%20engineering%20college%20logo.png", // Placeholder for the school logo
      start: "2023",
      end: "Present", // Adjust if you have a specific end date
    },
    {
      school: "Central Board Secondary",
      href: "https://cbse.edu", // Generic URL; replace with specific school URL if available
      degree: "Higher Secondary Education", // Or specify the level of study if different
      logoUrl: "https://www.cbse.gov.in/images//logo.png", // Placeholder for the school logo
      start: "2017",
      end: "2019",
    },
    {
      school: "Central Board Secondary",
      href: "https://cbse.edu", // Generic URL; replace with specific school URL if available
      degree: "Secondary Education", // Or specify the level of study if different
      logoUrl: "https://www.cbse.gov.in/images//logo.png", // Placeholder for the school logo
      start: "2016",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "Facebook Ads Analysis Tool",
      href: "https://github.com/YourGitHub/FacebookAdsAnalysisTool", // Adjust with the actual project URL if available
      dates: "2024 - Present", // Specify the actual timeline
      active: true, // Set to false if the project is completed
      description:
        "A tool that allows users to search Facebook ads and export the data into Excel. Features include ad search, detailed analytics, and data export functionalities.",
      technologies: [
        "Python", "React.js", "MongoDB", "SQL"
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "",
        //   icon: <Icons.github className="size-3" />,
        // },
        {
          type: "Demo",
          href: "https://adinsight.sddoc.in", // Placeholder for the demo link if available
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://iili.io/dvvMlHu.md.png", // Placeholder for project image if available
      video: "https://www.loom.com/share/45f6ab621b68410b9bb72ec5d402c6fe" // Placeholder for project video if available
    },    
    {
      title: "TwitterAutoBot Chrome Extension",
      href: "https://github.com/YourGitHub/TwitterAutoBot", // Placeholder for the actual project URL
      dates: "December 2023",
      active: true, // Set to false if the project is completed
      description:
        "This Chrome extension offers advanced Twitter automation features, including autolike, retweet, and reply by highlighted keyword. Enhance your Twitter experience with this extension.",
      technologies: [
        "JavaScript", "Chrome Extensions"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YourGitHub/TwitterAutoBot", // Adjust as necessary
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://media.licdn.com/dms/image/v2/D5622AQFgZ7JFRjuYLQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1706492181958?e=1728518400&v=beta&t=mMlrV9IQjvgz2pANGbb2ySBGH-APD3Y38kSiWnxXfKA", // Placeholder for project image if available
      video: "" // Placeholder for project video if available
    },
    {
      title: "Get Indian Vehicle Details API",
      href: "https://github.com/deepakstark01/vehcileapi",
      dates: "July 2023",
      active: true,
      description:
        "Developed a Python Flask API to retrieve vehicle data based on registration numbers. This API was designed to fetch information from the external source https://vehicleapi.vercel.app/DL8CX5463",
      technologies: [
        "Python", "Flask", "API"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/deepakstark01/vehcileapi",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "API",
          href: "https://vehicleapi.vercel.app/DL8CX5463",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Instagram Bot",
      href: "https://github.com/deepakstark01/InstaGram-Bot",
      dates: "July 2022",
      active: true,
      description:
        "Automates follower engagement, streamlines social media management, and significantly increases overall engagement on the platform.",
      technologies: [
        "Python", "Automation"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/deepakstark01/InstaGram-Bot",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Twitter Automation",
      href: "https://github.com/deepakstark01/TittwerAutomation/",
      dates: "September 2020",
      active: true,
      description:
        "Bot for extended scheduling of media-rich tweets on a server, resulting in significant improvements in social media management and brand presence on Twitter.",
      technologies: [
        "Node.js", "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/deepakstark01/TittwerAutomation/",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://youtu.be/Hci3ZOz4u_A"
    },
    {
      title: "Quora Upvoting in Multiple Accounts",
      href: "https://youtu.be/lpX4gxys8to",
      dates: "2019",
      active: true,
      description: "Automates upvoting on Quora across multiple accounts to boost visibility and engagement on selected answers.",
      technologies: ["Python", "Selenium"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/lpX4gxys8to",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "",
      video: "https://youtu.be/lpX4gxys8to"
    }, {
      title: "Facebook Auto Post into Page",
      href: "https://youtu.be/LUBjuWF_yUs",
      dates: "2019",
      active: true,
      description: "Facilitates automatic posting on Facebook pages to streamline content delivery and enhance social media management.",
      technologies: ["JavaScript", "Facebook API"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/LUBjuWF_yUs",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "",
      video: "https://youtu.be/LUBjuWF_yUs"
    },
    {
      title: "Insta Bot Follow and Unfollow",
      href: "https://youtu.be/-Dkwu1IjBGg",
      dates: "2019",
      active: true,
      description: "An Instagram bot that automates following and unfollowing profiles to maintain an optimal following-to-follower ratio.",
      technologies: ["Python", "Instagram API"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/-Dkwu1IjBGg",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "",
      video: "https://youtu.be/-Dkwu1IjBGg"
    }
  ],
  hackathons: [
    {
      title: "Hacktoberfest Wins",
      dates: "October 2020 - October 2023",
      location: "Global",
      description:
        "Participated in Hacktoberfest annually from 2020 to 2023, successfully completing challenges each year. Contributed to various open-source projects, resulting in meaningful improvements and earning recognition in the form of exclusive Hacktoberfest swag each year.",
      image: "",  // If you have any relevant images, such as digital badges or photos from the event, link them here.
      mlh: "",  // If there is any affiliation with Major League Hacking for these events, include the badge link here.
      links: [
        {
          title: "Hacktoberfest",
          href: "https://hacktoberfest.digitalocean.com",
          icon: <Icons.globe className="size-3" />
        }
      ],
    },
    
  ],
} as const;
