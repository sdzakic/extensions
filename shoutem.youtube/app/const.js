// This file is auto-generated.
import pack from './package.json';

export const API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/{type}';
export const USER_REGEX = /(?:http|https:\/\/|)www.youtube\.com\/user\/([a-zA-Z0-9]{1,})/i;
export const CHANNEL_REGEX = /(?:http|https:\/\/|)www.youtube\.com\/channel\/([a-zA-Z0-9_-]{1,})/i;
export const PLAYLIST_REGEX =
  /(?:http|https:\/\/|)www\.youtube\.com\/playlist\?list=([a-zA-Z0-9_-]{1,})/i;

export const RESOURCE_TYPES = {
  PLAYLIST: 'playlistItems',
  SEARCH: 'search',
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
