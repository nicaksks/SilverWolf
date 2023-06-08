import notifier from 'node-notifier';
import path from 'node:path';
import { discord } from '../config/config.json';

export default function notification(stamina: number, max: number, time: number) {

  const { name } = discord;

  const notification = {
    appName: name,
    title: 'Atualização da Stamina.',
    icon: path.join(__dirname, '../assets/silverwolf.png'),
    message: `Stamina atual: ${stamina}/${max}`,
  };

  notifier.notify(notification);
}