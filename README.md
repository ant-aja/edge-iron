# @ant-aja/edge-iron
A fork from @wunderwerk/edge-iron with merge code to reduce dependencies.

**Edge-Runtime compatible port of [@hapi/iron](https://github.com/hapijs/iron).**
Run well on Cloudflare Pages/Workers, Vercel and browser.

## License
MIT license
- Credits to [hapi.dev](https://hapi.dev) for the initial implementation and 
- Credits to [@wunderwerk/edge-iron](https://github.com/wunderwerkio/edge-iron) for porting to Edge-runtime 

## Install

``` pnpm i @ant-aja/edge-iron ```
``` npm i @ant-aja/edge-iron ```
``` yarn add @ant-aja/edge-iron ```

## Example 

``` 
import {Iron} from '@antaja/edge-iron';

// ironPassword must only live on the server-side: Sveltkit/Remix/Nextjs or Backend API
// ironPassword should be changed after a period to reduce leakage.
export async function session2cookie(session: SessionSandbox, ironPassword: string): Promise<string | undefined> {
  const sealed = await Iron.seal(session, ironPassword, Iron.defaults);
  return sealed;
}


export async function cookie2session(cookie: string, ironPassword: string): Promise<SessionSandbox | undefined> {
  const unsealed = await Iron.unseal(cookie, ironPassword, Iron.defaults);
  return unsealed;
}

```