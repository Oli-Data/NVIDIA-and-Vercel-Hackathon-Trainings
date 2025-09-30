export default function handler (request, response) {

    const message = 'Hello from the backend!';

    response.status(200).json({
        text: message
    });

}