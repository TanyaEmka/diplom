import { createServer, Model, hasMany, belongsTo } from 'miragejs'

import { polygonData, woodData, treeData, userData } from './data';
import { cookieParser, deleteCookie } from './cookie';
const sign = require('jwt-encode');

export const keyName = 'Token';

export default function () {
    createServer({
        models: {
            wood: Model,

            tree: Model.extend({
                polygon: belongsTo(),
            }),

            polygon: Model.extend({
                tree: hasMany(),
            }),

            user: Model,
        },

        seeds(server) {
            let polygonShema = [];
            polygonData.forEach((polygon) => {
                polygonShema.push(server.create('polygon', { ...polygon }));
            });

            woodData.forEach((wood) => {
                server.create('wood', { ...wood });
            })

            treeData.forEach((treeArray, index) => {
                treeArray.forEach((tree) => {
                    server.create('tree', { 
                        ...tree, 
                        polygon: polygonShema[index] 
                    });
                });
            });

            userData.forEach((user) => {
                server.create('user', { ...user });
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

            this.post('/api/login', (shema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = shema.findBy('user', { ...attrs });
                
                const newToken = sign(user, 'Token');
                let now = new Date();
                let endTime = new Date(now.getTime() + 24 * 3600 * 1000);
                document.cookie = ['access_token=' + encodeURIComponent(newToken),
                                    'expires=' + endTime.toUTCString()].join('; ');
            
                return new Response(
                    JSON.stringify({ access_token: newToken }),
                    {
                        status: 200,
                        statusText: 'Success',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }
                );
            })

            this.post('/api/logout', (shema, request) => {
                const status = deleteCookie('access_token');
            
                if (status) {
                    return {
                        'status': 200,
                        'message': 'success'
                    };
                }
                return {
                    'status': 400,
                    'message': 'error'
                };
            })
        },
    })
}