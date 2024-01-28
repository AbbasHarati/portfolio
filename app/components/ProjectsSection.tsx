import Image from "@/node_modules/next/image";
import ProjectsCards from "./ProjectsCards";

const projectsData = [
  {
    id: 1,
    title: "html ",
    description: " description",
    image: "/pics/html.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "css ",
    description: " description",
    image: "/pics/css.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "javascript ",
    description: " description",
    image: "/pics/javascript.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "react ",
    description: " description",
    image: "/pics/react.png",
    tag: ["All", "Web"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="border m-4">
      <h2>پروژه های من</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {projectsData.map(({ id, title, description, image }) => (
          <div key={id} className="p-3">
            <div className="">
              {title}
              {description}
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={image}
                width={500}
                height={500}
                alt="cards pics"
                className="rounded-md border"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
