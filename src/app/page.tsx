


import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const FRAMES_URL = 'http://localhost:3000'
const imageUrl = new URL("/og", FRAMES_URL).href
const postUrl = new URL("/frame", FRAMES_URL).href

const frameMetadata = getFrameMetadata({
  input: {text: 'Enter @username'},
  buttons: [
      {label: 'Enter Name', action: 'post'},
  ],
  image: imageUrl,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'gm',
  description: 'A page having a frame meta tag for gm',
  openGraph: {
    title: 'gm',
    description: 'A page having a frame meta tag for gm',
    images: [imageUrl],
  },
  other: {
    'of:accepts:xmtp': '2024-02-01',
    ...frameMetadata,
  },
};



export default async function Page() {
 return (<div>gm, user name frames!!</div>)
}
