import { FrameRequest } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const FRAMES_URL = 'https://gm-frame-seven.vercel.app'
let imageUrl = new URL("/og/gm", FRAMES_URL).href
const postUrl = new URL("/", FRAMES_URL).href

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    let userName = body.untrustedData.inputText;
    imageUrl += "?" + "userName=" + userName;
  return  new NextResponse(`<!DOCTYPE html><html><head>
      <title>Add name to gm</title>
      <meta property="of:accepts:xmtp" content="2024-02-01" />
      <meta property="fc:frame" content="vNext" />
      <meta property="og:image" content="${imageUrl}"/>
      <meta property="fc:frame:image" content="${imageUrl}"/>
      <meta property="fc:frame:button:1" content="Success" />
      <meta property="fc:frame:button:1:action" content="post"/>
      <meta property="fc:frame:post_url" content="${postUrl}"/>
    </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';



    