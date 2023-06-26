"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, './'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    },
}));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "./index.html"));
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map