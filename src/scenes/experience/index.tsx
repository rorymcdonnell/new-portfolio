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
import BenfitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const jobExperience: Array<JobExperienceType> = [
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "HD Labs Ltd",
    description: "lkgsnsj sjnksjng ksjngkjng ksjngksjng ksjnfgkng",
  },
  {
    icon: <CommandLineIcon className="h-6 w-6" />,
    title: "Malinko",
    description: "lkgsnsj sjnksjng ksjngkjng ksjngksjng ksjnfgkng",
  },
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Freelance Website Creator",
    description: "lkgsnsj sjnksjng ksjngkjng ksjngksjng ksjnfgkng",
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
            I have over a years experience in building React + TypeScript
            applications within the health techn industry. Applications I have
            helped developed are used by the NHS
          </p>
        </motion.div>
        {/* experiences */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
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
            src={BenfitsPageGraphic}
          />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto inventore beatae fugiat. Voluptatem necessitatibus
                debitis itaque eum qui. Nemo nesciunt repellat culpa repellendus
                ipsa ut quo similique aliquid eaque voluptatibus.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                voluptas reiciendis cum porro totam. Consequatur quisquam
                commodi quas totam temporibus quasi voluptas recusandae vel
                minus, numquam, molestias, aliquid eum qui.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
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
