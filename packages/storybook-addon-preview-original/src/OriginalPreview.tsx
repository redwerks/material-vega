/* eslint-disable react/prop-types */
import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactElement
} from 'react';
import { styled } from '@storybook/theming';
import { STORY_RENDERED } from '@storybook/core-events';

const StyledFrame = styled.iframe({
  position: 'absolute',
  display: 'block',
  boxSizing: 'content-box',
  height: '100%',
  width: '100%',
  border: '0 none'
});

interface OriginalPreviewProps {
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api: any;
}

const OriginalPreview: FunctionComponent<OriginalPreviewProps> = props => {
  const { api, active } = props;
  const [id, setPreviewId] = useState(null);

  useEffect(() => {
    const onRendered = (id: string): void => {
      // Set the ID when a story is rendered
      setPreviewId(id);
    };

    api.on(STORY_RENDERED, onRendered);

    return (): void => {
      api.off(STORY_RENDERED, onRendered);
    };
  }, [api]);

  let content: ReactElement;
  if (id) {
    content = (
      <StyledFrame
        scrolling="yes"
        key={`original-preview-${id}`}
        id={`original-preview-${id}`}
        title="Original Chart Preview"
        src={`iframe.html?id=${encodeURIComponent(
          id
        )}&viewMode=story&addonPreviewOriginalDisplayMode=original`}
      />
    );
  }

  return <div hidden={!active}>{content}</div>;
};

export default OriginalPreview;
