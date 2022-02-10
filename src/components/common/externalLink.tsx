import React from 'react';
import { linkStyle } from '../styles';

export interface ExternalLinkProps {
  href: string;
  displayText: string;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, displayText } = props;
  return <a target="_blank" rel="noreferrer" href={href} css={linkStyle}>{displayText}</a>
}

export default ExternalLink;
