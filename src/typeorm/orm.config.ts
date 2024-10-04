import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { User } from 'src/models/user.entity';
import { Post } from 'src/models/post.entity';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: (process.env.DB_TYPE as any) ?? 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT, 10) ?? 5432,
  username: 'postgres',
  password: '51015',
  database: 'test_db',
  synchronize: true,
  bigNumberStrings: true,
  multipleStatements: true,
  logging: false,
  entities: [User, Post],
  migrations: [join(__dirname, 'migrations', '*{.ts,.js}')],
  subscribers: [join(__dirname, 'typeorm', '*.subscriber{.ts,.js}')],
  migrationsRun: true,
  migrationsTableName: 'migrations',
};
export const dataSource = new DataSource(dataSourceOptions);
