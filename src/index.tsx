import type { Presence, HTTPResponse } from './types';
import { useEffect, useState } from 'react';

export const useLanyard = (discordId: string) => {
  const [state, setState] = useState<Presence>();

  useEffect(() => {
    const interval = window.setInterval(async () => {
      const response = await getLanyard(discordId)
      setState(response.data)
    }, 10000)
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return state;
};

const getLanyard = async (discordId: string): Promise<HTTPResponse> => {
  return new Promise((resolve, reject) => {
    fetch('https://api.lanyard.rest/v1/users/' + discordId)
    .then(response => response.json())
    .then(response => response as HTTPResponse)
    .then(response => resolve(response))
    .catch((error) => reject(error))
  })
}