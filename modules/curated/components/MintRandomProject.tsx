import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { MintForm } from 'components/Forms/MintForm';
import { Drop, Project } from 'types/drops';
import { useCallback, useState } from 'react';
import { CloudinaryAsset } from 'types/cloudinary';
import { CURATED_PAGE_SECTIONS } from 'utils/routes';

export type MintingDropsProps = {
  cover: CloudinaryAsset;
  project: Drop['project'];
};
type MintRandomProjectProps = {
  mintingDrops: Drop[];
};

export const MAX_RANDOM_PROJECTS = 4;

export const MintRandomProject = ({ mintingDrops }: MintRandomProjectProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project['id'] | null
  >(null);

  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const projectId = event.currentTarget.getAttribute('data-id');
      projectId === selectedProjectId
        ? setSelectedProjectId(null) // unselect project and hide MintForm
        : setSelectedProjectId(projectId);
    },
    [selectedProjectId, setSelectedProjectId]
  );

  return (
    <div
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
      id={CURATED_PAGE_SECTIONS.mintRandomProject}
    >
      <HeroTitle accentColor={'text-curated'} subtitle="Mint">
        Enters details below
      </HeroTitle>
      <h3 className="my-6 font-sans font-bold">Select project</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
        {mintingDrops.map(
          ({ cover, project }) =>
            cover?.url && (
              <button
                className={`relative ${
                  selectedProjectId === project?.id
                    ? 'border-2 border-black'
                    : 'border-none'
                }`}
                data-id={project?.id}
                key={project?.id}
                onClick={handleSelect}
              >
                <Image
                  alt="alt"
                  className="relative z-0"
                  height={900}
                  quality={100}
                  src={cover.url}
                  width={1200}
                />
                <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-start h-32 p-6 bg-gradient-to-b from-transparent to-black/90">
                  <h4 className="text-xl text-white ">{project?.name}</h4>
                </div>
              </button>
            )
        )}
      </div>
      <div>
        {selectedProjectId && <MintForm projectId={selectedProjectId} />}
      </div>
    </div>
  );
};
