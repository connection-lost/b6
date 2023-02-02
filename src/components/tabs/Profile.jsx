import * as React from 'react';
import { ProfilePicture } from 'components/cards/ProfilePicture.tsx';
import { InfoText } from 'components/cards/InfoText.tsx';

export const Profile = () => {
  return (
    <div>
      <link href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/9.3.0/css/fabric.min.css" rel="stylesheet" />
      <div className="ms-Fabric" dir="ltr">
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
              <ProfilePicture />
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
              <InfoText text='test 0'/>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <InfoText text='test 1'/>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <InfoText text='test 2'/>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <InfoText text='test 3'/>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <InfoText text='test 4'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
