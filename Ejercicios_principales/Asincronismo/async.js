/**
 * Async/Await Real Live Example
 * This example demonstrates fetching data from a public API using async/await,
 * handling errors, and logging the results.
 */


async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call the async function with a valid user ID
fetchUserData(3);

// Call the async function with an invalid user ID to demonstrate error handling
fetchUserData(9999);
