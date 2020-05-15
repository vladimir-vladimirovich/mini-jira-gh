import { users } from '../dataFromServer/users';

// Class developed in order to emulate async server calls
class FakeAuthServer {
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundUser = users.find((user) => user.username === username && user.password === password);
                foundUser ? resolve(foundUser) : reject('User not found');
            }, 3000);
        });
    }
}

export const fakeAuthServer = new FakeAuthServer();