import { discord } from '../config/config.json';
import { Stamina } from '../interface/Stamina';

interface Body {
  payload: object,
  url: string
}

export default function body(message: string): Body {

  const { name, avatar, url } = discord;

  const payload = {
    username: name,
    avatar_url: avatar,
    content: message
  };

  const format: Body = {
    payload: payload,
    url: url
  }

  return format;
}