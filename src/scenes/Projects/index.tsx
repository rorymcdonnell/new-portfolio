import { SelectedPage, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Project";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectExperiences: Array<ProjectType> = [
  {
    title: "Public Forum",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
    ],
    gitHubUrl: "https://github.com/rorymcdonnell/forum",
    liveUrl: "https://forum-rorymcdonnell.vercel.app/",
  },
  {
    title: "Science Blog",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "PostgreSQL"],
    gitHubUrl: "https://github.com/rorymcdonnell/science-blog",
    liveUrl: "http://science-blog-pearl.vercel.app/",
  },
  {
    title: "ENT Surgeon Website",
    technologies: ["WordPress"],
    gitHubUrl: "",
    liveUrl: "https://consultantentsurgeon.london/",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 pb-20 pt-1">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
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
          <HText>Projects</HText>
          <p className="my-5 text-sm">
            There's no substitute for experience. However, take a look at some
            of my projects or review my code on GitHub.
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
          {projectExperiences.map((projectExperience: ProjectType) => (
            <Project
              setSelectedPage={setSelectedPage}
              key={projectExperience.title}
              title={projectExperience.title}
              gitHubUrl={projectExperience.gitHubUrl}
              liveUrl={projectExperience.liveUrl}
              technologies={projectExperience.technologies}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
