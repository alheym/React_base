"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task2 = void 0;
const task2 = () => {
    const newCar = {
        wheels: 4,
        doors: 4,
        color: "Red",
        updateSystem(update) {
            if (update.engine) {
                this.engine = update.engine;
            }
            if (update.lighting) {
                this.lighting = update.lighting;
            }
            if (update.color) {
                this.color = update.color;
            }
            if (update.wheels) {
                this.wheels = update.wheels;
            }
            if (update.doors) {
                this.doors = update.doors;
            }
            console.log("Система обновлена:", this);
        },
        showInfo() {
            console.log(`Основная информация о машине:
            Колеса: ${this.wheels}
            Двери: ${this.doors}
            Цвет: ${this.color}`);
        },
        showSystemsInfo() {
            if (this.engine) {
                console.log(`Информация о двигателе:
                Имя: ${this.engine.name}
                ID: ${this.engine.id}
                Тип: ${this.engine.type}
                Лошадиные силы: ${this.engine.horsepower}`);
            }
            else {
                console.log("Двигатель не установлен.");
            }
            if (this.lighting) {
                console.log(`Информация об освещении:
                Имя: ${this.lighting.name}
                ID: ${this.lighting.id}
                Тип: ${this.lighting.type}
                Интенсивность света: ${this.lighting.lightIntensity}`);
            }
            else {
                console.log("Система освещения не установлена.");
            }
        }
    };
    const engineUpdate = {
        name: "Engine System",
        id: 2,
        type: "V8",
        horsepower: 450,
    };
    const lightingUpdate = {
        name: "Lighting System",
        id: 3,
        type: "LED",
        lightIntensity: 1200,
    };
    console.log("Текущая информация о машине до обновления:");
    newCar.showInfo();
    newCar.showSystemsInfo();
    console.log("\nОбновляем систему");
    newCar.updateSystem({
        engine: engineUpdate,
        lighting: lightingUpdate,
        wheels: 4,
        doors: 2,
        color: "Yellow",
    });
    console.log("\nИнформация о машине после обновления:");
    newCar.showInfo();
    newCar.showSystemsInfo();
};
exports.task2 = task2;
