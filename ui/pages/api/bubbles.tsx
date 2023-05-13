export default async function handler(req: any, res: any) {

    if (req.method === 'POST') {
        // Handle the POST request here
        res.body = {
            
        }
        res.status(200).json({ message: 'POST request received!', ... req.body});
    }

    const response = await fetch('https://example.com/cards'); // fetch the cards data from an external API
    const cards = await response.json(); // parse the response as JSON
    res.status(200).json(cards); // return the cards data as JSON
}
