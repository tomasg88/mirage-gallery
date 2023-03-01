import { FullWidthVideoModal } from 'components/FullWidthVideoModal/FullWidthVideoModal';
import React from 'react';
import { Drop } from 'types/drops';

export const AboutTheProject = ({ drop }: { drop: Drop }) => {
  return (
    <div className="px-2 mx-auto max-w-screen-2xl">
      <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
        <h2 className="text-2xl text-left">About the project</h2>
      </div>
      <FullWidthVideoModal video={drop.video} />
      <p className="max-w-6xl mr-auto">{drop.project.description}</p>
    </div>
  );
};
