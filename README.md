# Ng16ForMigrationTestTo19

This project was generated with:

```console
npx @angular/cli@16 new ng16ForMigrationTestTo19   --routing true --style scss
```
```console
cd ng16ForMigrationTestTo19
```
```console
npm i @angular/cdk@v16
```
```console
npm i @ngrx/store@v16 @ngrx/entity@v16 @ngrx/effects@v16 @ngrx/store-devtools@v16 @ngrx/router-store@v16 @ngrx/component@v16
```
```console
npm i primeng@16
```
```console
npm i primeicons primeflex
```
```console
npx @angular/cli@16 add ngrx-entity-crud
```
```console
ng generate ngrx-entity-crud:store --name=user --clazz=User --type=CRUD-PLURAL
```
```console
ng generate ngrx-entity-crud:section --clazz=User --lib=primeng/plural
```
```console
ng generate ngrx-entity-crud:store --name=coin --clazz=Coin --type=CRUD-PLURAL
```
```console
ng generate ngrx-entity-crud:section --clazz=Coin --lib=primeng/plural
```

```console
npm install json-server
```
```console
make new file db.json
```
```
(incollare il codice seguente nel file appena creato)
{
"coin": [
{ "id": 1, "value": "10", "name": "xxxx", "description": "xxxx" },
{ "id": 2, "value": "20", "name": "xxxx", "description": "xxxx" },
{ "id": 3, "value": "30", "name": "xxxx", "description": "xxxx" }
],
"user": [
{ "id": 1, "value": "10", "name": "xxxx", "description": "xxxx" },
{ "id": 2, "value": "20", "name": "xxxx", "description": "xxxx" },
{ "id": 3, "value": "30", "name": "xxxx", "description": "xxxx" }
]
}
```
### Pass it to JSON Server CLI
```console
npx json-server db.json
```
### Get a REST API
```console
Get a REST API
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

