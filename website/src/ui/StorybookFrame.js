import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const StorybookFrame = props => {
  const { name } = props;
  const frameUrl = useBaseUrl(`storybook/${name}`);

  return <iframe className={styles.exampleFrame} src={frameUrl} />;
};

export default StorybookFrame;
