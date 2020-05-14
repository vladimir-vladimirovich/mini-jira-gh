import { tasksData } from '../dataFromServer/tasksData';
import { employees } from '../dataFromServer/employees';
import { taskbarConfig } from '../configFromServer/taskbar';
import { filtersConfig } from '../configFromServer/filters';
import { taskConfig } from '../configFromServer/task';

// Class developed in order to emulate async server calls
class FakeTaskServerUtil {
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

export const fakeTaskServerUtil = new FakeTaskServerUtil();