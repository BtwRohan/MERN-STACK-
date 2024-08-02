const axios = require('axios');

// Assignment 1
const fetchData = async () => {
    try {
        // Fetch data from the specified API endpoint
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Retrieved Data from API:');
        console.log(result.data); // Log the retrieved data to the console
    } catch (err) {
        // Handle errors if the API request fails
        console.error('Failed to fetch data:', err.message);
    }
};
fetchData();


// Assignment 2
const getData = async () => {
    try {
        // Attempt to fetch data from an invalid URL to simulate an error
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts-invalid');
        console.log('API Data:', result.data);
    } catch (err) {
        // Check for specific error codes or handle generic errors
        if (err.code === 'ENOTFOUND') {
            console.error('Failed to fetch data: Invalid URL or domain not found.');
        } else {
            console.error('Error occurred while fetching data:', err.message);
        }
    }
};
getData();


// Assignment 3
const getPosts = async () => {
    try {
        // Fetch posts data from one API endpoint
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return result.data; // Return the fetched data
    } catch (err) {
        console.error('Failed to fetch posts:', err.message);
        throw err; // Propagate the error up the call stack
    }
};
const getUsers = async () => {
    try {
        // Fetch users data from another API endpoint
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        return result.data; // Return the fetched data
    } catch (err) {
        console.error('Failed to fetch users:', err.message);
        throw err; // Propagate the error up the call stack
    }
};
const fetchAndDisplayData = async () => {
    try {
        // Fetch posts and users data sequentially
        const [posts, users] = await Promise.all([getPosts(), getUsers()]);
        console.log('Posts:', posts); // Log posts data
        console.log('Users:', users); // Log users data
    } catch (err) {
        console.error('Error occurred:', err.message); // Handle any errors during fetching
    }
};
fetchAndDisplayData();


// Assignment 4
const fetchPostsAndUsers = async () => {
    try {
        // Fetch posts and users data in parallel using Promise.all
        const [posts, users] = await Promise.all([getPosts(), getUsers()]);
        console.log('Posts received:', posts); // Log posts data
        console.log('Users received:', users); // Log users data
    } catch (err) {
        console.error('Encountered an error:', err.message); // Handle errors from either request
    }
};
fetchPostsAndUsers();


// Assignment 5
const getComments = async () => {
    try {
        // Fetch comments data from a separate API endpoint
        const result = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return result.data; // Return the fetched data
    } catch (err) {
        console.error('Failed to fetch comments:', err.message);
        throw err; // Propagate the error up the call stack
    }
};
const fetchPostsAndComments = async () => {
    try {
        // Fetch posts data first
        const posts = await getPosts();
        console.log('Fetched Posts:', posts); // Log fetched posts data
        // Then fetch comments data
        const comments = await getComments();
        console.log('Fetched Comments:', comments); // Log fetched comments data
    } catch (err) {
        console.error('Encountered an issue:', err.message); // Handle any errors during fetching
    }
};
fetchPostsAndComments();
