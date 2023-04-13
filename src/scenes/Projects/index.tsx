import { SelectedPage, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Project";

const projects: Array<ProjectType> = [
  {
    name: "Forum",
    description:
      "Forum for making posts and commenting on others, auth with Google.",
    image: "",
  },
  {
    name: "Science Blog",
    description: "Blog for me to share science papers I find interesting",
    image: "",
  },
  {
    name: "Surgeon website",
    description: "Website built on WordPress for a Harley Street surgeon",
    image: "",
  },
];

SelectedPage;
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>My Projects</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              fugit soluta odit accusantium quod, repellendus dolorem recusandae
              obcaecati corrupti placeat.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul>
            {projects.map((item: ProjectType, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
