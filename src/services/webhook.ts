import axios from 'axios';
import { staminaTime, staminaFull } from '../utils/stamina';
import { discord } from '../config/config.json';

export default function webhook(stamina: number, max: number, time: number) {
  
  const { name, avatar, url } = discord;

  axios.post(url, {
    'username': name,
    'avatar_url': avatar,
    'content': `Você foi hackeado! \nComo sou uma pessoa gentil eu não irei roubar nada de você. \n\nStamina atual: **${stamina}/${max}** \n${staminaTime(stamina, max, time)} \n${staminaFull(time, stamina, max)}`
  })
    .then(() => console.log('[Webhook] - Enviado com sucesso.'))
    .catch(e => console.log(e));
}