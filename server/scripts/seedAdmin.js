"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Admin_1 = __importDefault(require("../src/models/Admin"));
const config_1 = require("../src/config");
dotenv_1.default.config();
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminName = process.env.ADMIN_NAME;
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminName || !adminEmail || !adminPassword) {
            console.error('Error: ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD must be defined in environment variables.');
            process.exit(1);
        }
        console.log('Connecting to MongoDB...');
        yield mongoose_1.default.connect(config_1.config.MONGO_URI);
        console.log('Connected to MongoDB.');
        const adminExists = yield Admin_1.default.findOne({ email: adminEmail });
        if (adminExists) {
            console.log(`Admin with email ${adminEmail} already exists. Skipping seed.`);
        }
        else {
            const newAdmin = new Admin_1.default({
                username: adminName,
                email: adminEmail,
                password: adminPassword,
            });
            yield newAdmin.save();
            console.log('Admin user created successfully.');
        }
        yield mongoose_1.default.disconnect();
        console.log('Disconnected from MongoDB.');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
});
seedAdmin();
