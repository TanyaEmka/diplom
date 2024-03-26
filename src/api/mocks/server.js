import { createServer, Model, hasMany, belongsTo } from 'miragejs'

import { polygonData, treeData } from './data';

export default function () {
    createServer({
        models: {
            tree: Model.extend({
                polygon: belongsTo(),
            }),

            polygon: Model.extend({
                tree: hasMany(),
            }),
        },

        seeds(server) {
            let polygonShema = [];
            polygonData.forEach((polygon) => {
                polygonShema.push(server.create('polygon', { ...polygon }));
            });

            treeData.forEach((treeArray, index) => {
                treeArray.forEach((tree) => {
                    server.create('tree', { ...tree, polygon: polygonShema[index] });
                });
            });
        },

        routes() {
            this.get('/api/polygons/', (schema) => {

                return schema.all('polygon');
            })

            this.get('/api/polygons/:id', (schema, request) => {
                const id = request.params.id;

                return schema.find('polygon', id);
            })

            this.post('/api/polygons', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);

                return schema.create('polygon', attrs);
            })

            this.delete('/api/polygons/:id', (schema, request) => {
                const id = request.params.id;

                return schema.find('polygon', id).destroy();
            })

            this.get('/api/trees', (schema) => {
                return schema.all('tree');
            })

            this.get('/api/trees/:id', (schema, request) => {
                const id = request.params.id;

                return schema.find('tree', id);
            })

            this.get('/api/trees?polygon_id=:id', (schema, request) => {
                const id = request.params.id;
                const polygonBody = schema.find('polygon', id);

                return polygonBody.trees;
            })
        },
    })
}