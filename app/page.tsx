import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Road',
    },
    {
      label: 'Woods',
    },
    {
      label: 'Cave',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/frame-1-forest.webp`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'First-frame',
  description: '🥳',
  openGraph: {
    title: 'First-frame',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>First-frame</h1>
    </>
  );
}
