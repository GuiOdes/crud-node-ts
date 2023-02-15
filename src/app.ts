import express from 'express';
import { router } from './router';

export class App {

    public server: express.Application; // Atributo público para gerenciamento do servidor

    constructor(){
        this.server = express(); // Atribui o express ao método server
        this.middleware(); // Inicializa o middleware do servidor
        this.router(); // Inicializa as rotas do servidor
    }

    private middleware() {
        this.server.use(express.json()); // Define o servidor para trabalhar com JSON
    }

    public router() {
        this.server.use(router); // Configura as rotas da aplicação
    }
}