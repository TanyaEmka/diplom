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
                    server.create('tree', { 
                        polygon: polygonShema[index],
                        ...tree,
                    });
                });
            });
        },

        routes() {
            this.get('/polygons', (schema) => {
                return schema.polygon.all();
            })

            this.get('polygons/:id', (schema, request) => {
                const id = request.params.id;

                return schema.polygon.find(id);
            })

            this.post('/polygons', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);

                return schema.polygon.create(attrs);
            })

            this.delete('polygons/:id', (schema, request) => {
                const id = request.params.id;

                return schema.polygon.find(id).destroy();
            })

            this.get('/trees', (schema) => {
                return schema.tree.all();
            })

            this.get('trees/:id', (schema, request) => {
                const id = request.params.id;

                return schema.tree.find(id);
            })

            this.get('trees?polygon_id=:id', (schema, request) => {
                const id = request.params.id;
                const polygonBody = schema.polygon.find(id);

                return polygonBody.trees;
            }) 
        },
    })
}