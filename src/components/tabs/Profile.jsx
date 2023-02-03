import * as React from 'react';
import { ProfilePicture } from 'components/cards/ProfilePicture.tsx';
import { InfoText } from 'components/cards/InfoText.tsx';
import { Grid } from 'fluentui-react-grid';

export const Profile = () => {
  return (
    <Grid dir="ltr">
      <Grid.Row>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={6}>
          <ProfilePicture />
        </Grid.Col>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={6}>
          <InfoText text='test' />
        </Grid.Col>
      </Grid.Row>
      
      <Grid.Row>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={3}>
          <InfoText text='test 1' />
        </Grid.Col>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={3}>
          <InfoText text='test 2' />
        </Grid.Col>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={3}>
          <InfoText text='test 3' />
        </Grid.Col>
        <Grid.Col sizeSm={12} sizeMd={6} sizeLg={3}>
          <InfoText text='test 4' />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
