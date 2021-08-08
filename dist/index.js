"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Well done!😀');
});
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`server is running on PORT : ${PORT}`);
});
//# sourceMappingURL=index.js.map