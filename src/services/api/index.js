const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION
const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    },
    users: {
        getUsers: (id) => `${API}/api/${VERSION}/users/${id}`
    },
    categories: {
        getCategories: (id) => `${API}/api/${VERSION}/categories/${id}`
    }
};

export default endPoints;