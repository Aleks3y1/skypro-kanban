const token = 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck';

export async function getTodos() {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export async function postTodos(data) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}