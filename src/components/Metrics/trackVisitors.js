import axios from 'axios';

const endpoint = 'https://metrics.leapingspider.com/portfolio'
// Function to handle visitor tracking
let bufferString = null;

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2){
        return parts.pop().split(';').shift();
    } 
    return 'unknown'
};

// Helper function to set cookie
const setCookie = (name, value, minutes) => {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const trackVisitor = async (inputString) => {
    let userId = getCookie('userId');
    console.log(userId);
    

    let inputStr = "";
    const [firstInput, secondInput] = inputString;

    if (secondInput === 0) {
        inputStr = firstInput;
        bufferString = firstInput;
    } else {
        inputStr = bufferString;
        bufferString = firstInput;
    }

    // If userId cookie doesn't exist or is "undefined", fetch it from /metrics endpoint
    if (typeof userId === 'undefined' || userId === 'undefined' || userId === 'unknown') {
        console.log("no cookie");
        let response;

        try {
            // response = await axios.post(endpoint, { input: inputStr, userId: userId, timeSpent: inputString[1] });
            response = await axios.post(endpoint, { inputStr, userId, timeSpent: secondInput });
            userId = response.data.userId;
            console.log("new userid set to ", userId)
        } catch (error) {
            console.error('Error fetching userId from /metrics:', error);
            response = "unknown";
            userId = "unknown";
        }

        // Set userId cookie for 1 month
        setCookie('userId', userId, 30 * 24 * 60); // 30 days
    } else {
        userId = getCookie('userId');

        // Send POST request to /metrics with input string and userId if the cookie is defined.
        try {
            await axios.post(endpoint, {
                input: inputStr,
                userId,
                timeSpent: inputString[1]
            });

            console.log('POST request to /metrics sent successfully.');
        } catch (error) {
            console.error('Error sending POST request to /metrics:', error);
        }
    }
};

// Helper function to get cookie value


export default trackVisitor;
