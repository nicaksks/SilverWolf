import axios from 'axios';
import { Stamina } from '../interface/Stamina';
import body from '../utils/constants';
import { staminaFull, staminaTime } from '../utils/stamina';

export default class Webhook {

  constructor(private readonly _stamina: Stamina) {
    this.send()
  }

  public async send() {

    const { url, payload } = body(this.content());

    return axios.post(url, payload)
      .then(() => console.log('[Webhook] - Enviado com sucesso.'))
      .catch(e => console.log(e));
  }

  private content(): string {
    const { current_stamina, max_stamina } = this._stamina;

    const message = `Você foi hackeado! \nComo sou uma pessoa gentil eu não irei roubar nada de você. \n\nStamina atual: **${current_stamina}/${max_stamina}** \n${staminaTime(this._stamina)} \n${staminaFull(this._stamina)}`
    return message;
  };
}
