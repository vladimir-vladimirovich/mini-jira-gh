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

    getTasksData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.tasksData);
            }, 100);
        });
    }

    getTaskData(taskId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                taskId
                    ? resolve(this.tasksData.find((task) => task.id === taskId))
                    : reject(null);
            }, 4000);
        });
    }

    getTaskbarConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.taskbarConfig);
            }, 100);
        });
    }

    getFiltersConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.filtersConfig);
            }, 100);
        });
    }
}

export const fakeServerUtil = new FakeServerUtil();