module.exports = {
    async listAll(req, res) {
        
        const items = [{
            name: "Item 1",
            description: "Description 1",
            quantity: 100,
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            name: "Item 2",
            description: "Description 2",
            quantity: 200,
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            name: "Item 3",
            description: "Description 3",
            quantity: 300,
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            name: "Item 4",
            description: "Description 4",
            quantity: 400,
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        }];

        return res.json(items);
    },
};