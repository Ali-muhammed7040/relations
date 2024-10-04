import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './typeorm/orm.config';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, PostModule],
})
export class AppModule {}
