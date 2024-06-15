let token = null

export async function getTodos() {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error(`Ошибвка: ${response.status}`);
    }
    return await response.json();
}

export async function postTodos(data) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return await response.json();
}

export async function loginInApp({login, password}) {
    const response = await fetch(`https://wedev-api.sky.pro/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password
        }),
    })
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error('Ошибка: Неверный логин или пароль!');
        } else {
            throw new Error(`Ошибка: ${response.status}`);
        }
    }
    const data = await response.json();
    token = data.user.token;
    return data;
}

export async function registerInApp({login, name, password}) {
    if (login.length > 0 && name.length > 0 && password.length > 0) {
        return fetch(`https://wedev-api.sky.pro/api/user`, {
            method: 'POST',
            body: JSON.stringify({
                login,
                name,
                password
            }),
        }).then((response) => {
            if (response.status === 400) {
                throw new Error('Ошибка: пользователь уже существует!');
            } else {
                return response.json();
            }
        })
    } else {
        console.log('Заполните все поля.');
    }
}