import { tasksData } from '../data/tasksData';
import { taskbarConfig } from '../config/taskbar';
import { filtersConfig } from '../config/filters';

// Class developed in order to emulate async server calls
class FakeServerUtil {
    constructor() {
        this.tasksData = tasksData;
        this.taskbarConfig = taskbarConfig;
        this.filtersConfig = filtersConfig;
    }

    async getTasksData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.tasksData);
            }, 100);
        })
    }

    async getTaskbarConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.taskbarConfig);
            }, 100);
        })
    }

    async getFiltersConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.filtersConfig)
            }, 100)
        })
    }
}

export const fakeServerUtil = new FakeServerUtil();