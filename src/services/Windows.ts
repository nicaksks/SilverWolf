import notifier from 'node-notifier';
import path from 'node:path';
import Stamina from '../interface/Stamina';

import { discord } from '../config/config.json';
import { staminaFull } from '../utils/stamina';

export default class Windows {

  private readonly _stamina: number;
  private readonly _max: number;

  constructor(account: Stamina) {
    const { stamina, max } = account;
    this._stamina = stamina;
    this._max = max;
    this.notification();
  }

  private notification() {
    const notification = {
      appName: discord.name,
      title: 'Atualização da Stamina.',
      icon: path.join(__dirname, '../assets/silverwolf.png'),
      message: `Stamina atual: ${this._stamina}/${this._max}`,
    };
    notifier.notify(notification);
  };
}
