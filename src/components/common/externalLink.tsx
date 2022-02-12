import React from 'react';

export interface ExternalLinkProps {
  href: string;
  displayText: string;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, displayText } = props;
  return <a target="_blank" rel="noreferrer" href={href}>{displayText}</a>
}

export default ExternalLink;
