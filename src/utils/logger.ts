import { init } from '@ringcentral-pro-serv/psi-logging-system';
import dotenv from 'dotenv';

dotenv.config();

const logger = process.env.LOKI_APP_NAME ? init({
  host: process.env.LOKI_HOST || "",
  labels: {
    app: process.env.LOKI_APP_NAME,
    service: process.env.LOKI_SERVICE_NAME,
  },
  basicAuth: process.env.LOKI_AUTH,
  stdout:true,
	batching: true,
	clearOnError: false,
	gracefulShutdown: true,
	interval: 5,
	json: false,
	onConnectError: (err) => undefined,
	replaceTimestamp: false,
	timeout: undefined
}) : {
	info: (msg: any) => console.log(msg),
	debug: (msg: any) => console.debug(msg),
	error: (msg: any) => console.error(msg),
};

export default logger;
