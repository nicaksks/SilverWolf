import axios, { AxiosInstance } from 'axios';
import { rpc } from '../config/config.json';

import Account from '../interface/Account';
import Webhook from './Webhook';
import Windows from './Windows';
import ds from '../utils/ds';

const { app_version, client_type } = rpc;

export default class StarRail {

  private readonly _instance: AxiosInstance;
  private readonly _uid: string;
  private readonly _accountId: string;
  private readonly _cookie: string;
  private readonly _token: string;

  constructor(account: Account) {

    if (!account.uid || !account.accountId || !account.cookie || !account.token) {
      throw new Error('Está faltando algumas informações no arquivo .env');
    };

    this._uid = account.uid;
    this._accountId = account.accountId;
    this._cookie = account.cookie;
    this._token = account.token;

    this._instance = axios.create({
      baseURL: `https://bbs-api-os.hoyolab.com/game_record/hkrpg/api`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBSOversea/1.5.0',
        'Cookie': `account_id=${this._accountId}; cookie_token=${this._cookie}; ltoken=${this._token}; ltuid=${this._accountId}; mi18nLang=en-us;`,
        'x-rpc-app_version': app_version,
        'x-rpc-client_type': client_type,
        'x-rpc-language': 'en-us'
      }
    })
  };

  private async stamina() {
    return this._instance.get(`/note?server=prod_official_usa&role_id=${this._uid}`)
      .then(response => response.data.data)
      .catch(e => console.log(e));
  };

  public send() {
    setInterval(async () => {
      this._instance.defaults.headers['DS'] = ds();
      const { current_stamina, max_stamina, stamina_recover_time } = await this.stamina();
      new Webhook({ stamina: current_stamina, max: max_stamina, time: stamina_recover_time }).send();
      if (current_stamina >= 10) {
        new Windows({ stamina: current_stamina, max: max_stamina, time: stamina_recover_time });
      };
    }, 60 * 60000);
  };

}