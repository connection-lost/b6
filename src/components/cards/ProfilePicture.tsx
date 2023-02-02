import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import profileImage from 'res/profile.jpg';

const frank: IPersonaSharedProps = {
  imageUrl: profileImage,
  imageInitials: 'YW',
  text: 'Yitong Wu',
  secondaryText: 'Software Engineer'
};


export const ProfilePicture = () => {
  return (
    <div className='basecard'>
      <Persona
        {...frank}
        size={PersonaSize.size72}
        imageAlt='Yitong Wu'
      />
    </div>
  );
};
