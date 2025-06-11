import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3025;

  app.enableCors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Si vous avez besoin d'envoyer des cookies avec les requêtes
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Supprime les propriétés non spécifiées dans le DTO
      forbidNonWhitelisted: true, // Lance une erreur si des propriétés non spécifiées sont envoyées
      transform: true, // Transforme les types des propriétés des objets en utilisant les décorateurs @Type
    })
  );
  
  await app.listen(port, () => {
    console.log(`Le serveur est démarré sur le port ${port}`);
  });
}
bootstrap();
