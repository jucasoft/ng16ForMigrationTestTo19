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
npm i @ngrx/store@v16 @ngrx/entity@v16 @ngrx/effects@v16 @ngrx/store-devtools@v16 @ngrx/router-store@v16 @ngrx/component@v16
npm i primeng@16
npm i primeicons primeflex
```
```console
npm i ngrx-entity-crud@16
npx @angular/cli@16 add ngrx-entity-crud
```
```console
ng generate ngrx-entity-crud:store --name=user --clazz=User --type=CRUD-PLURAL
ng generate ngrx-entity-crud:section --clazz=User --lib=primeng/plural
ng generate ngrx-entity-crud:store --name=coin --clazz=Coin --type=CRUD-PLURAL
ng generate ngrx-entity-crud:section --clazz=Coin --lib=primeng/plural
```

```console
npm i json-server@^0.17.4
```
make new file db.json
```console
echo '{
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
}' > db.json
```

```console
echo '
module.exports = (req, res, next) => {
  const originalSend = res.__proto__.send;
  res.send = function (body) {
    let newBody;
    try {
      newBody = { data: JSON.parse(body) };
    } catch (e) {
      newBody = { data: body };
    }
    originalSend.call(this, JSON.stringify(newBody));
  };
  next();
};
' > middleware.js
```

### Pass it to JSON Server CLI
```console
npx json-server db.json --middlewares ./middleware.js
```
### Get a REST API
```console
curl http://localhost:3000/user
```
```console
curl http://localhost:3000/coin
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

