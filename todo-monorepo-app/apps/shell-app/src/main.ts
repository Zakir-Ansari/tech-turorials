import { setRemoteDefinitions } from '@nx/angular/mf';
import { remoteUrlMap } from './app/constants/remote-urls.constant';

getRemoteAppUrl()
  .then((remoteDefinitions) => {
    setRemoteDefinitions(remoteDefinitions);
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));

function getRemoteAppUrl(): Promise<Record<string, any>> {
  return new Promise((resolve, reject) => {
    const remoteAppUrl = remoteUrlMap['localhost'];

    if (remoteAppUrl) resolve(remoteAppUrl);
    else reject('Unable to get remote urls');
  });
}
