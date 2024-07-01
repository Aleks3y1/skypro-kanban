export async function getTodos(token) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    return await response.json();
}

export async function postTodos(token, data) {
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
    if (login.length > 0 && password.length > 0) {
        const response = await fetch(`https://wedev-api.sky.pro/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                login,
                password
            }),
        })
        if (!response.ok) {
            if (response.status === 400) {
                alert('Ошибка: Неверный логин или пароль!');
            } else {
                alert(`Ошибка: ${response.status}`);
            }
        }

        return await response.json();
    } else {
        alert('Заполните все поля!');
    }
}

export async function registerInApp({login, name, password}) {
    if (login.length > 0 && name.length > 0 && password.length > 0) {
        const response = await fetch(`https://wedev-api.sky.pro/api/user`, {
            method: 'POST',
            body: JSON.stringify({
                login,
                name,
                password
            }),
        });

        if (!response.ok) {
            if (response.status === 400) {
                alert('Ошибка: пользователь уже существует!');
            } else {
                alert(`Ошибка: ${response.status}`);
            }
        }

        return await response.json();
    } else {
        throw new Error('Заполните все поля.');
    }
}

export async function changeTask({title, topic, status, description, date, _id, token}) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${_id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date
        }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return await response.json();
}

export async function deleteTask(token, id) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return await response.json();
}

export async function getTaskById(token, id) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        if (response.status === 404) {
            console.error('Задача не найдена');
        } else {
            throw new Error(`Ошибка: ${response.status}`);
        }
    }
    return await response.json();
}