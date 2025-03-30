# Projektstart: SoundScape

Dieses Projekt wurde mit [Create React App](https://github.com/facebook/create-react-app) erstellt.

## Voraussetzungen

Stellen Sie sicher, dass **Node.js** und **npm** auf Ihrem System installiert sind. Falls nicht, können Sie Node.js [hier herunterladen](https://nodejs.org/).

## Installation

Nach dem Klonen des Repositories müssen die **dependencies** installiert werden. Führen Sie dazu im Projektverzeichnis folgenden Befehl aus:

```bash
npm install
```

## Starten des Projektes

Das Projekt besteht aus einer React-Frontend-Anwendung und einem Node.js-Backend. Beide müssen separat gestartet werden.

### 1️⃣ React-Frontend starten

Im Hauptverzeichnis des Projekts folgenden Befehl ausführen:

```bash
npm start
```

Die Anwendung wird im Entwicklungsmodus gestartet. Sie ist unter http://localhost:3000 erreichbar. Änderungen am Code werden automatisch übernommen.

### 2️⃣ Backend-Server starten

Der Backend-Server wird mit folgendem Befehl gestartet:

```bash
node server.js
```

Dadurch wird der Server unter http://localhost:5000 ausgeführt und kann API-Anfragen verarbeiten.

## Weitere nützliche Befehle

```bash
npm test
```

Startet den Testmodus.

```bash
npm run build
```

Erstellt eine Produktionsversion der Anwendung im build-Ordner.

```bash
npm run eject
```

Achtung: Dies entfernt die Standardkonfiguration und gibt vollständige Kontrolle über die Build-Tools.

## Weitere Informationen

- [Create React App Dokumentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Dokumentation](https://reactjs.org/)
