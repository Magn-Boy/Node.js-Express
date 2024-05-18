"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//import { PORT } from './common/config';
app_1.default.listen(4000, () => { console.log(`App is running on http://localhost:4000`); });
//# sourceMappingURL=server.js.map