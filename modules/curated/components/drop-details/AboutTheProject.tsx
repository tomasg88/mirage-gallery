import { FullWidthVideoModal } from 'components/FullWidthVideoModal/FullWidthVideoModal';
import React from 'react';
import { Drop } from 'types/drops';
import { parseISO } from 'date-fns';
import { CloudinaryAsset } from 'types/cloudinary';

type AboutTheProjectProps = {
  cover: CloudinaryAsset;
  project: Drop['project'];
  releaseDate: Drop['releaseDate'];
  video: Drop['video'];
};

export const AboutTheProject = ({
  cover,
  project,
  releaseDate,
  video,
}: AboutTheProjectProps) => (
  <div className="px-2 mx-auto max-w-screen-2xl">
    <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
      <h2 className="text-2xl text-left">About the project</h2>
    </div>
    <p>{releaseDate && parseISO(releaseDate).toString()}</p>
    {video && <FullWidthVideoModal cover={cover} video={video} />}
    <p className="max-w-6xl mr-auto">{project.description}</p>
  </div>
);
