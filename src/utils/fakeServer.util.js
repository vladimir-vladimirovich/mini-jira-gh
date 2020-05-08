import { tasksData } from '../data/tasksData';
import { employees } from '../data/employees';
import { taskbarConfig } from '../config/taskbar';
import { filtersConfig } from '../config/filters';
import { taskConfig } from '../config/task';

// Class developed in order to emulate async server calls
class FakeServerUtil {
    constructor() {
        this.tasksData = tasksData;
        this.taskbarConfig = taskbarConfig;
        this.filtersConfig = filtersConfig;
        this.taskConfig = taskConfig;
        this.employees = employees;
    }

    getTasksData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.tasksData);
            }, 100);
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

    getTasksConfig() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.taskConfig);
            }, 2000);
        });
    }

    getEmployees() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.employees);
            }, 2000);
        });
    }
}

export const fakeServerUtil = new FakeServerUtil();