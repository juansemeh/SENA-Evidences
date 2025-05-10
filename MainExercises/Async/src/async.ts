/**
 * Async/Await Real Live Example
 * This example demonstrates fetching data from a public API using async/await,
 * handling errors, and logging the results.
 */


async function fetchUserData(userId: number): Promise<any> {
    try {
        const response : Response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData : any = await response.json(); 
        console.log("User Data:", userData);
        return userData;
    } catch (error) {
        if (error instanceof Error) {
            console.error('An error occurred:', error.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
}

// Call the async function with a valid user ID
fetchUserData(1);

// Call the async function with an invalid user ID to demonstrate error handling
fetchUserData(1000);