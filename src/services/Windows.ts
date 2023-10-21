import notifier from 'node-notifier';
import path from 'node:path';

import { discord } from '../config/config.json';
import { Stamina } from '../interface/Stamina';

export default class Windows {

  private readonly _stamina: Stamina;

  constructor(staminaData: Stamina) {
    this._stamina = staminaData;
    this.notification();
  }

  private notification() {
    notifier.notify(this.content());
  };

  private content(): object {

    const isStaminaMax = this._stamina.current_stamina === this._stamina.max_stamina;
    const title = isStaminaMax ? 'Atualização da Reserva.' : 'Atualização da Stamina';

    const message = {
      appName: discord.name,
      title: title,
      icon: path.join(__dirname, '../assets/silverwolf.png'),
      message: !isStaminaMax ? `Stamina Atual: ${this._stamina.current_stamina}/${this._stamina.max_stamina}` : `Reserva Atual: ${this._stamina.current_reserve_stamina}/2400 `,
    };

    return message;
  }
}
