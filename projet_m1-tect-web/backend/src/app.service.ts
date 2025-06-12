import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'Hello RMDY!';
    return `
      <html>
        <head>
          <title>Backend-NestJs</title>
          <style>
            h2 {
              color: red;
            }
          </style>
        </head>
        <body>
          <h2>Le serveur est démarré sur le port 3025</h2>
        </body>
      </html>
    `;
  }
}
