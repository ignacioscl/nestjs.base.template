import * as dotenv from 'dotenv';

// Configura dotenv para cargar las variables de entorno del archivo correspondiente
if (process.env.NODE_ENV === 'prod') {
  dotenv.config({ path: '.env.prod' });
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config({ path: '.env.dev' });
}

const config = {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  pageSize: 25,
  jsonLimit:process.env.JSON_LIMIT,
  urlencodeLimit:process.env.URLENCODE_LIMIT,
  port:process.env.PORT,
  filePath:process.env.FILE_PATH,
  token:process.env.TOKEN,
};

export default config;
