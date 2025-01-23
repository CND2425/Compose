# Microservices-basierte E-Commerce-Anwendung

## Projektbeschreibung
Diese Anwendung ist eine Microservices-basierte E-Commerce-Plattform, die verschiedene Dienste für Benutzerverwaltung, Produktkatalog, Bestellabwicklung, Lagerbestandsmanagement und ein Frontend umfasst. Der Compose-Service dient zur Orchestrierung der gesamten Plattform und stellt sicher, dass alle Services nahtlos zusammenarbeiten.

## Schnellstart

### Voraussetzungen
- Docker und Docker Compose installiert

### Schritte
1. Repository klonen:
   ```bash
   git clone <REPOSITORY_URL>
   cd Compose-main
   ```
2. Services starten:
   ```bash
   docker-compose up -d
   ```
3. Anwendung öffnen: [http://localhost](http://localhost)

### Dienste und Ports
| Service             | Port   |
|---------------------|--------|
| Frontend            | 3000   |
| User Service        | 8003   |
| Product Service     | 8001   |
| Order Service       | 8080   |
| Inventory Service   | 8005   |
| MongoDB             | 27017  |
| NGINX               | 80     |



