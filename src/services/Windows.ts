import notifier from 'node-notifier';
import path from 'node:path';
import Stamina from '../interface/Stamina';

import { discord } from '../config/config.json';

export default class Windows {

  private readonly _notification: object;

  constructor(account: Stamina) {
    const { stamina, max } = account;

    this._notification = {
      appName: discord.name,
      title: 'Atualização da Stamina.',
      icon: path.join(__dirname, '../assets/silverwolf.png'),
      message: `Stamina atual: ${stamina}/${max}`,
    };

    this.notification();
  }

  private notification() {
    notifier.notify(this._notification);
  };
}
