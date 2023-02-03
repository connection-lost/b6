import * as React from 'react';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { ITextProps, Text } from '@fluentui/react/lib/Text';
import { Grid } from 'fluentui-react-grid';
import profileImage from 'res/profile.jpg';

const imageProps: Partial<IImageProps> = {
  src: profileImage,
  height: '72px',
  width: '72px',
  styles: props => ({
    root: {
      borderRadius: '50%',
      margin: 'auto'
    }
  }),
};

const textPropsPrimary: Partial<ITextProps> = {
  styles: props => ({
    root: {
      margin: 'auto'
    }
  }),
}

const textPropsSeconday: Partial<ITextProps> = {
  styles: props => ({
    root: {
      margin: 'auto'
    }
  }),
}

export const ProfilePicture = () => {
  return (
    <div className='basecard'>
      <Grid dir="ltr">
        <Grid.Row>
          <Grid.Col sizeSm={12}>
            <Image {...imageProps} />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sizeSm={12}>
            <Text {...textPropsPrimary}>Yitong "Frank" Wu</Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sizeSm={12}>
            <Text{...textPropsSeconday}>Software Engineer</Text>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
};
