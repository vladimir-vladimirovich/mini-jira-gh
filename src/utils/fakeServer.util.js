import { tasksData } from '../data/tasksData';
import { taskbarConfig } from '../config/taskbarConfig';

class FakeServerUtil {
    constructor() {
        this.tasksData = tasksData;
        this.taskbarConfig = taskbarConfig;
    };

    // In order to emulate request/response
    async getTasksData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.tasksData);
            }, 4500);
        })
    };

    // In order to emulate request/response
    async getTaskbarConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.taskbarConfig);
            }, 2500);
        })
    };
}

export const fakeServerUtil = new FakeServerUtil();