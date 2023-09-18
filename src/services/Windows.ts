import notifier from 'node-notifier';
import path from 'node:path';

import { discord } from '../config/config.json';
import { Stamina } from '../interface/Stamina';

export default class Windows {

  private readonly _stamina: Stamina;

  constructor(staminaData: Stamina) {
    this._stamina = staminaData;

    if (this._stamina.stamina < 10 || this._stamina.stamina === this._stamina.max && this._stamina.reserve.reserve_full) return;
    this.notification();
  }

  private notification() {
    notifier.notify(this.content());
  };

  private content(): object {

    const isStaminaMax = this._stamina.stamina === this._stamina.max;
    const title = isStaminaMax ? 'Atualização da Reserva.' : 'Atualização da Stamina';

    const message = {
      appName: discord.name,
      title: title,
      icon: path.join(__dirname, '../assets/silverwolf.png'),
      message: !isStaminaMax ? `Stamina Atual: ${this._stamina.stamina}/${this._stamina.max}` : `Reserva Atual: ${this._stamina.reserve.stamina}/2400 `,
    };

    return message;
  }
}
