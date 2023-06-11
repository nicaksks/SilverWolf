import axios, { AxiosInstance } from 'axios';
import { staminaTime, staminaFull } from '../utils/stamina';
import { discord } from '../config/config.json';
import Stamina from '../interface/Stamina';

export default class Webhook {

  private readonly _payload: object;
  private readonly _url: string;

  constructor(account: Stamina) {
    const { stamina, max, time } = account;
    const { name, avatar, url } = discord;

    this._payload = {
      username: name,
      avatar_url: avatar,
      content: `Você foi hackeado! \nComo sou uma pessoa gentil eu não irei roubar nada de você. \n\nStamina atual: **${stamina}/${max}** \n${staminaTime(stamina, max, time)} \n${staminaFull(stamina, max, time)}`
    };

    this._url = url;
  }

  public async send() {
    return axios.post(this._url, this._payload)
      .then(() => console.log('[Webhook] - Enviado com sucesso.'))
      .catch(e => console.log(e));
  }
}
