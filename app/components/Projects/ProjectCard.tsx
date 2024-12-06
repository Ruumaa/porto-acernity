import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { LinkPreview } from '@/components/ui/link-preview';
import Image from 'next/image';
import { ProjectData } from '../../../lib/ProjectData';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import VisitButton from './visit-button';

const ProjectCard = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-y-20 mt-20">
      {ProjectData.map((data, i) => (
        <CardContainer className="inter-var" key={i}>
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-sky-500/[0.2] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {data.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
            >
              {data.desc}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={data.imgUrl}
                height="500"
                width="500"
                className="h-52 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center justify-between mt-4 relative ">
              <CardItem
                translateZ={100}
                className="flex flex-row justify-start  w-auto pr-6 pl-2 py-1 bg-background/70 rounded-lg border border-black/20 dark:border-white/20"
              >
                <AnimatedTooltip items={data.techstack} />
              </CardItem>
              <CardItem
                translateZ={100}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <LinkPreview width={300} height={200} url={data.url}>
                  <VisitButton />
                </LinkPreview>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default ProjectCard;
