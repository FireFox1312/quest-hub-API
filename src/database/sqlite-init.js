import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Caminho para o arquivo do banco de dados SQLite
const DB_PATH = path.join(__dirname, 'quest-hub.db');

export async function initSqliteDatabase() {

    const db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS quests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            category TEXT NOT NULL,
            xp INTEGER DEFAULT 0,
            difficulty TEXT NOT NULL,
            completed BOOLEAN DEFAULT 0,
            deleteAt TEXT DEFAULT NULL
        );
    `)

    console.log('Banco de dados SQLite inicializado com sucesso! \n');

    return db;

}
