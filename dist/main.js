"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const port = process.env.PROJECT_PORT;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true
    }));
    app.setGlobalPrefix('api/v1');
    await app.listen(port, () => console.log(`server is running on port: ${port}`));
}
bootstrap();
//# sourceMappingURL=main.js.map