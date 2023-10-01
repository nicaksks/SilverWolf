import dotenv from 'dotenv';
import StarRail from './services/StarRail';
dotenv.config();

new StarRail({
  uid: process.env.UID,
  accountId:  process.env.ACCOUNTID,
  cookie: process.env.COOKIE,
  token: process.env.TOKEN,
})
