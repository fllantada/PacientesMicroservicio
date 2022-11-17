import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pago, pagoSchema } from './schemas/pago.schema';
import { PagosRepository } from './pagos.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pago.name, schema: pagoSchema }]),
  ],
  controllers: [PagosController],
  providers: [PagosService, PagosRepository],
  exports: [PagosService],
})
export class PagosModule {}
