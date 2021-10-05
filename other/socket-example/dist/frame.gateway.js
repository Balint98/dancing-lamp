"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ws_1 = require("ws");
const WebSocket = require("ws");
let FrameGateway = class FrameGateway {
    handleConnection(client, ...args) {
        let frameSocket = new WebSocket('ws://localhost:8080');
        frameSocket.onmessage = (message) => {
            client.send(message.data);
        };
    }
    findAll(data) {
        return (0, rxjs_1.from)([1, 2, 3]).pipe((0, operators_1.map)(item => ({ event: 'events', data: item })));
    }
    async identity(data) {
        return data;
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", ws_1.Server)
], FrameGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('events'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], FrameGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('identity'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FrameGateway.prototype, "identity", null);
FrameGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8081)
], FrameGateway);
exports.FrameGateway = FrameGateway;
//# sourceMappingURL=frame.gateway.js.map