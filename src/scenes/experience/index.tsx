import { SelectedPage, JobExperienceType } from "@/shared/types";
import {
  CodeBracketIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Experience from "./Experience";
import ActionButton from "@/shared/ActionButton";
import WorkingOnGraphic from "@/assets/workingOn.png";

const jobExperience: Array<JobExperienceType> = [
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "HD Labs Ltd",
    description:
      "Develop products with React, improving current applications and building new ones from scratch Lead the development of web applications with contributions to overall architecture. Work with the UX/UI team to implement modern, accessible and responsive user experiences. Produced designs and wireframes for products",
  },
  {
    icon: <CommandLineIcon className="h-6 w-6" />,
    title: "Freelance website creator",
    description:
      "Increased traffic by working on marketing campaigns for businesses in multiple industries. Improved SEO and first page results. I created and executed content plans to improve the Google ranking for high volume keywords. Researched key information to generate content. Assisted in improving the technical SEO on websites",
  },
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Freelance Marketing Assistant",
    description:
      "Create, update and manage modern, responsive and SEO-friendly websites using WordPress. Build lead generating landing pages to help businesses increase traffic and conversions. Managed all aspect of design and development by liaising directly with businesses, developing great working relationships. Set up SSL/hosting",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experiences = ({ setSelectedPage }: Props) => {
  return (
    <section id="experience" className="mx-auto min-h-full w-5/6 pb-20 pt-1">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>Experience</HText>
          <p className="my-5 text-sm">
            I have over 2 years experience in building React + TypeScript web
            applications primarily working in the health technology industry.
          </p>
        </motion.div>
        {/* experiences */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          // initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {jobExperience.map((jobExperience: JobExperienceType) => (
            <Experience
              key={jobExperience.title}
              icon={jobExperience.icon}
              title={jobExperience.title}
              description={jobExperience.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics + description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            className="mx-auto"
            alt="benefits-section-graphic"
            src={WorkingOnGraphic}
          />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Take a look at some of my{" "}
                    <span className="text-secondary-500">
                      personal projects
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                As a developer, my workflow pattern starts with understanding
                requirements and designing in Figma. I then build the app using
                React + TypeScript, while researching and evaluating libraries
                for desired functionality. I follow coding practices, conduct
                code reviews, and thoroughly test the app.
              </p>
              <p className="mb-5">
                Choosing the best styling method depends on the size and scale
                of the application. I like to use tailwindcss for smaller scale
                apps. I find using CSS/SCSS modules best with larger
                applications. In a work environment deployment is done to a
                staging environment for further testing before production.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact Me
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
