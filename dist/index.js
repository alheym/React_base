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
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = require("./typeScript/task1");
const task2_1 = require("./typeScript/task2");
const task3_1 = require("./typeScript/task3");
const task4_1 = require("./typeScript/task4");
const runTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Задание №1:");
    yield (0, task1_1.task1)();
    console.log("");
    console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁");
    console.log("");
    console.log("Задание №2:");
    yield (0, task2_1.task2)();
    console.log("");
    console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁");
    console.log("");
    console.log("Задание №3:");
    yield (0, task3_1.task3)();
    console.log("");
    console.log("❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁ ❁");
    console.log("");
    console.log("Задание №4:");
    yield (0, task4_1.task4)();
});
runTasks();
