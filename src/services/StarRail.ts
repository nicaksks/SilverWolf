import axios, { AxiosInstance } from 'axios';
import { rpc } from '../config/config.json';

import Account from '../interface/Account';
import Webhook from './Webhook';
import Windows from './Windows';
import ds from '../utils/ds';
import { Stamina } from '../interface/Stamina';

const { app_version, client_type } = rpc;

export default class StarRail {

  private readonly _instance: AxiosInstance;

  constructor(private readonly _account: Account) {

    if (!_account.uid || !_account.accountId || !_account.cookie || !_account.token) {
      throw new Error('Está faltando algumas informações no arquivo .env');
    };

    this._instance = axios.create({
      baseURL: `https://bbs-api-os.hoyolab.com/game_record/hkrpg/api`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBSOversea/1.5.0',
        'Cookie': `account_id=${this._account.accountId}; cookie_token=${this._account.cookie}; ltoken=${this._account.token}; ltuid=${this._account.accountId}; mi18nLang=en-us;`,
        'x-rpc-app_version': app_version,
        'x-rpc-client_type': client_type,
        'x-rpc-language': 'en-us',
      }
    });

    this.send()
  };

  updateHeaders() {
    return this._instance.defaults.headers['DS'] = ds();
  }

  private async stamina(): Promise<Stamina | undefined> {
    try {
      this.updateHeaders();
      const response = await this._instance.get(`/note?server=prod_official_usa&role_id=${this._account.uid}`);
      const staminaData: Stamina = response.data.data;
      return staminaData;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  public send() {
    setInterval(async () => {
      const stamina = await this.stamina();

      if (!stamina) return;
      if (stamina.current_stamina < 10) return;
      if (stamina.current_stamina === stamina.max_stamina && stamina.current_reserve_stamina < 10) return;
      if (stamina.current_stamina === stamina.max_stamina && stamina.is_reserve_stamina_full) return;

      new Webhook(stamina);
      new Windows(stamina);
    }, 1 * 60 * 60000);
  };

}