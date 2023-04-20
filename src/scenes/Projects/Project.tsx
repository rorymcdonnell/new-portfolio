import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import gitCat from "@/assets/github-mark.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  liveUrl: string;
  gitHubUrl: string;
  title: string;
  technologies: string[];
  setSelectedPage: (value: SelectedPage) => void;
};

const Project = ({ title, technologies, liveUrl, gitHubUrl }: Props) => {
  console.log("tech", technologies);

  return (
    //@ts-ignore
    <motion.div
      variants={childVariant}
      className="mx-auto mt-5 h-[424px] w-[300px] rounded-md border-2 border-gray-100 px-5 py-16 text-center xs:w-[500px]"
    >
      <div className="mb-4 flex justify-center"></div>
      <div className=" mb-5 flex justify-center gap-5">
        <div className="rounded-full border-2 border-secondary-500 bg-primary-100 p-4">
          <a target="_blank" href={gitHubUrl}>
            <img className="h-6 w-6" src={gitCat}></img>
          </a>
        </div>
        <div className="rounded-full border-2 border-secondary-500 bg-primary-100 p-4">
          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      {technologies.map((tech) => {
        return <p className="my-3">{tech}</p>;
      })}
    </motion.div>
  );
};

export default Project;
