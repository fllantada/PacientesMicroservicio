import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
  });
  const config = new DocumentBuilder()
    .setTitle('API CRUD Pacientes')
    .setDescription('Poder editar y listar pacientes desde la webAPP')
    .setVersion('1.0')
    .addTag('Editar Pacientes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Application is running on ${__dirname}:${PORT}`);
}
bootstrap();
