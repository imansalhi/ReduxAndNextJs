const axios = require('axios');
const GitHubClient = axios.create({
    baseURL: 'https://api.GitHub.com/',
    timeout: 1000,
    headers: {
        'Accept': 'application/vnd.GitHub.v3+json',
        //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
});

const getHeaders = () => {
    return {

    }
}

export async function getMostFollowedUsers() {
    const noOfFollowers = 35000;
    const perPage = 10;
    //ref: https://docs.GitHub.com/en/GitHub/searching-for-information-on-GitHub/searching-on-GitHub/searching-users
    const response = await GitHubClient.get(`search/users`, {
        params: {
            q:`followers:>${noOfFollowers}`,
            per_Page:perPage,
            ID: 12345,
        }
    });
    return response.data.items;
}




