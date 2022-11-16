import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PacientesModule } from './pacientes/pacientes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/guards/at.guard';
import { AppController } from './app.controller';
import { LiquidacionesModule } from './liquidacionesSemanales/liquidaciones.module';
import { PaymentModule } from './pagos/payment.module';
import { DatesModule } from './utils/dates/dates.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    PacientesModule,
    AuthModule,
    UsersModule,
    LiquidacionesModule,
    PaymentModule,
    DatesModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }],
  controllers: [AppController],
})
export class AppModule {}
