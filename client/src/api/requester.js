const URL = "https://main--exquisite-choux-2a199d.netlify.app/";

async function handleResponse(response) {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
}

export async function getProducts() {
    try {
        const response = await fetch(`${URL}/products`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.log(error);
    }
}

export async function getProjects() {
    try {
        const response = await fetch(`${URL}/projects`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.log(error);
    }
}

export async function getBlogPosts() {
    try {
        const response = await fetch(`${URL}/posts`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.log(error);
    }
}
