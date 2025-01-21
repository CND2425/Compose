# Microservices-basierte E-Commerce-Anwendung mit NGINX und Docker

Dieses Projekt stellt eine rudimentäre E-Commerce-Plattform bereit, die auf einer Microservices-Architektur basiert und mit Docker Compose orchestriert wird. Die Plattform umfasst mehrere Services, darunter einen NGINX-Proxy, eine MongoDB-Datenbank, RabbitMQ und verschiedene Backend-Dienste für die Abwicklung von Bestellungen, Produkt- und Benutzerverwaltung.

## Inhalte

- **docker-compose.yml**: Definiert die gesamte Infrastruktur mit allen Services.
- **nginx.conf**: Konfigurationsdatei für den NGINX-Proxy.
- **Microservices**: Jeder Service hat seinen eigenen Docker-Context mit spezifischen Konfigurations- und Build-Dateien.

## Services

1. **nginx**  
   - Image: `nginx`  
   - Aufgabe: Reverse Proxy für die Microservices.  
   - Exponiert: Port `8080`.

2. **frontend**  
   - Custom Build: Frontend-Code im Ordner `frontend`.  
   - Aufgabe: Client-Anwendung, die Nutzern Zugriff auf die E-Commerce-Funktionen bietet.  
   - Exponiert: Port `3000`.

3. **mongodb**  
   - Image: `mongo:6.0`  
   - Aufgabe: Zentrale Datenbank für die Services, zur Speicherung von Benutzerdaten, Produkten und Bestellungen.  
   - Exponiert: Port `27017`.

4. **rabbitmq**  
   - Image: `rabbitmq:3-management`  
   - Aufgabe: Message-Broker für die Kommunikation zwischen Services, z. B. für Bestands- und Bestellaktualisierungen.  
   - Exponiert: Ports `5672` (AMQP) und `15672` (Management UI).  
   - Standardbenutzer: `guest` | Passwort: `guest`.

5. **order_service**  
   - Image: Custom Build aus `./microservices/order_service`.  
   - Aufgabe: Verwaltung von Bestellungen, einschließlich Erstellung, Aktualisierung und Statusverfolgung.  
   - Exponiert: Port `8000`.  
   - Verwendet: MongoDB, RabbitMQ.

6. **product_service**  
   - Image: Custom Build aus `./microservices/product_service`.  
   - Aufgabe: Verwaltung des Produktkatalogs, einschließlich Produktdetails und Verfügbarkeit.  
   - Exponiert: Port `8001`.  
   - Verwendet: MongoDB.

7. **inventory_service**  
   - Image: Custom Build aus `./microservices/inventory_service`.  
   - Aufgabe: Verwaltung des Lagerbestands und Synchronisierung mit Bestellungen.  
   - Exponiert: Port `8005`.  
   - Verwendet: MongoDB, RabbitMQ.

8. **user_service**  
   - Image: Custom Build aus `./microservices/user_service`.  
   - Aufgabe: Verwaltung von Benutzerdaten, einschließlich Registrierung und Authentifizierung.  
   - Exponiert: Port `8003`.  
   - Verwendet: MongoDB.

## Voraussetzungen

- Installiere [Docker](https://www.docker.com/) und [Docker Compose](https://docs.docker.com/compose/).

## Verwendung

1. Klone das Repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd <PROJECT_FOLDER>
   ```
2. Starte die Umgebung:
   ```bash
   docker-compose up -d
   ```
3. Zugriffe:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **API-Gateway (NGINX)**: [http://localhost:8080](http://localhost:8080)
   - **RabbitMQ UI**: [http://localhost:15672](http://localhost:15672)

4. Logs ansehen:
   ```bash
   docker-compose logs -f
   ```

## Anpassung

- **NGINX-Konfiguration**: Passe die Datei `nginx.conf` an.
- **Microservices**: Bearbeite die `Dockerfile` oder Quellcodes der einzelnen Services im jeweiligen Ordner.

## Datenhaltung

- **MongoDB-Daten**: Persistiert im Docker-Volume `mongodb_data`.
- **MongoDB-Initialisierung**: Skripte im Ordner `./microservices/mongo-init` werden beim Start ausgeführt.

---

Erstellt: 15.01.2025

